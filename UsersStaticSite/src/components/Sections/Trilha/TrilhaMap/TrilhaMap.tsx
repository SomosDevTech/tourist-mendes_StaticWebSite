import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface Props {
  link: string;
}

const GpxTrack: React.FC<{ link: string }> = ({ link }) => {
  const map = useMap();
  const [originalLink, setOriginalLink] = useState<string | null>(null);

  useEffect(() => {
    const loadGpx = async () => {
      try {
        const response = await fetch(link);
        const gpxText = await response.text();
        const parser = new DOMParser();
        const gpxDoc = parser.parseFromString(gpxText, "text/xml");

        // Extract link from GPX file
        const linkElement = gpxDoc.querySelector('link');
        if (linkElement) {
          const href = linkElement.getAttribute('href');
          setOriginalLink(href);
        }

        // Extract track points
        const trackpoints: [number, number][] = Array.from(gpxDoc.getElementsByTagName("trkpt")).map(point => [
          parseFloat(point.getAttribute("lat") || "0"),
          parseFloat(point.getAttribute("lon") || "0")
        ] as [number, number]);

        // Extract waypoints (if any)
        const waypoints = Array.from(gpxDoc.getElementsByTagName("wpt")).map(point => ({
          lat: parseFloat(point.getAttribute("lat") || "0"),
          lon: parseFloat(point.getAttribute("lon") || "0"),
          name: point.getElementsByTagName("name")[0]?.textContent || "",
          desc: point.getElementsByTagName("desc")[0]?.textContent || ""
        }));

        // Create the track line
        const polyline = L.polyline(trackpoints, {
          color: '#FF4500',
          weight: 3,
          opacity: 0.8
        });

        // Create a feature group to hold all layers
        const group = L.featureGroup();

        // Add the track line
        group.addLayer(polyline);

        // If we have waypoints, add those
        if (waypoints.length > 0) {
          waypoints.forEach(wpt => {
            const marker = L.marker([wpt.lat, wpt.lon]);
            if (wpt.name || wpt.desc) {
              marker.bindPopup(`<b>${wpt.name}</b><br>${wpt.desc}`);
            }
            group.addLayer(marker);
          });
        } else {
          // If no waypoints, add markers for start and end of track
          const startMarker = L.marker(trackpoints[0] as L.LatLngExpression, {
            title: "Começo"
          }).bindPopup("<b>Começo</b>");

          const endMarker = L.marker(trackpoints[trackpoints.length - 1] as L.LatLngExpression, {
            title: "Final"
          }).bindPopup("<b>Final</b>");

          group.addLayer(startMarker);
          group.addLayer(endMarker);
        }

        // Add all elements to map and fit bounds
        group.addTo(map);
        map.fitBounds(group.getBounds());

      } catch (error) {
        console.error("Erro ao carregar trilha", error);
      }
    };

    loadGpx();

    // Cleanup
    return () => {
      map.eachLayer((layer) => {
        if (layer instanceof L.Polyline || layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
    };
  }, [link, map]);

  const handleClick = () => {
    if (originalLink) {
      window.open(originalLink, '_blank');
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="absolute top-2 right-2 bg-white text-gray-900 py-1.5 px-2.5 rounded-md shadow-md z-[1000] text-sm flex items-center gap-1.5 transition-all duration-200 ease-in-out cursor-pointer hover:bg-gray-50"
        >
        Ver no Wikiloc
      </div>
    </>
  );
};

const TrilhaMap: React.FC<Props> = ({ link }) => {
  return (
    <div className="w-[97%] h-[327px] mb-12 pl-4 md:pl-0 md:w-full xl:w-[530px] z-20">
      <h2 className="text-h2 mb-4">Mapa do Circuito</h2>
      <MapContainer
        center={[0, 0]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
        className="rounded-2xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <GpxTrack link={link} />
      </MapContainer>

    </div>
  );
};

export default TrilhaMap;
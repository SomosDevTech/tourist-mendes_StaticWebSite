import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import CarouselPhotos from "../../components/Sections/LocalAttraction/CarouselPhotos/CarouselPhotos";
import CarouselVideos from "../../components/Sections/LocalAttraction/CarouselVideos/CarouselVideos";
import LocationMap from "../../components/Sections/LocalAttraction/LocationMap/LocationMap";
import WorkingTime from "../../components/Sections/LocalAttraction/WorkingTime/WorkingTime";
import AttractionContact from "../../components/Sections/LocalAttraction/AttractionContact/AttractionContact";
import CoverImage from "../../components/Sections/LocalAttraction/CoverImage/CoverImage";
import Breadcrumb from "../../components/Sections/LocalAttraction/Breadcrumb/Breadcrumb";
import AttractionDescription from "../../components/Sections/LocalAttraction/AttractionDescription/AttractionDescription";
import { useNavigate, useParams } from "react-router-dom";
import ButtonBackToTop from "../../components/ButtonBackToTop/ButtonBackToTop";
import { useQuery } from "@tanstack/react-query";
import { getAtracaoById } from "../../api/getAtracaoById/getAtracaoById";
import AtracaoLocalPageSkeleton from "./AtracaoLocalPageSkeleton";
import FullAtracaoLocalType from "../../shared-lib/FullAtracaoLocalType";
import Foto360 from "../../components/Sections/Trilha/Foto360/Foto360";

function AtracaoLocalPage(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["attraction", id],
    queryFn: () => getAtracaoById(id!),
    enabled: !!id,
  });
  const selectedAttraction: FullAtracaoLocalType | undefined = data?.data;

  useEffect(() => {
    if (!id) {
      navigate("/notFound");
      return;
    }
    if (isError) {
      navigate("/notFound");
    }
  }, [id, isError, error, navigate]);

  return (
    <>
      {isLoading ? (
        <AtracaoLocalPageSkeleton />
      ) : (
        <>
          {selectedAttraction && (
            <>
              <Helmet>
                <title>{selectedAttraction.title}</title>
                <meta
                  name="description"
                  content={`Descubra sobre ${selectedAttraction.title}. Saiba mais sobre sua história, horário de funcionamento, veja fotos e vídeos sobre o local.`}
                />
              </Helmet>
              <main className="relative bg-white dark:bg-lightBlack pb-20">
                <div className="flex flex-col">
                  <CoverImage
                    src={selectedAttraction.coverImage}
                    title={selectedAttraction.title}
                    category={selectedAttraction.category}
                  />
                  <Breadcrumb title={selectedAttraction.title} />
                </div>
                <div className="w-full mt-12 flex gap-12 flex-col md:max-w-[770x] md:mt-20 md:items-start md:justify-center md:mx-auto lg:gap-6 lg:max-w-[944px] xl:flex-row xl:justify-between xl:max-w-[1140px]">
                  <AttractionDescription
                    description={selectedAttraction.longDescription}
                    info={selectedAttraction.historicalInfo}
                    timeInfo={selectedAttraction.workingTime}
                    contacts={selectedAttraction.contacts}
                    socials={selectedAttraction.socialMedia}
                  />
                  <div className="flex flex-col gap-12 md:max-w-[770px] md:items-start justify-center md:pl-8 xl:gap-16 lg:pl-0 lg:max-w-[944px] xl:mx-0">
                  <CarouselPhotos photos={selectedAttraction.photoGallery} />

                    {selectedAttraction.videos && selectedAttraction.videos.length > 0 && (
                      <CarouselVideos videos={selectedAttraction.videos} />
                    )}

                    {selectedAttraction.tour360UrlLink && (
                      <Foto360 link={selectedAttraction.tour360UrlLink} />
                    )}

                    <LocationMap link={selectedAttraction.mapUrlLink} />
                  </div>
                  <div className="flex flex-col mt-12 md:w-[770px] md:items-start md:justify-center md:mx-auto lg:w-[944px] xl:mt-0 xl:hidden">
                    <WorkingTime text={selectedAttraction.workingTime} />
                    <AttractionContact
                      content={selectedAttraction.contacts}
                      socials={selectedAttraction.socialMedia}
                    />
                  </div>
                </div>
                <ButtonBackToTop />
              </main>
            </>
          )}
        </>
      )}
    </>
  );
}

export default AtracaoLocalPage;

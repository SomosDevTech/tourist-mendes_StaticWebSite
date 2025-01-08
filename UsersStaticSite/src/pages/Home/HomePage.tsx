import React from 'react';
import BannerCarousel from '../../components/Banner/Banner';
import { Helmet } from 'react-helmet-async';
import AttractionsSection from '../../components/Sections/AttractionsSection/AttractionsSection';
import AgentsSection from '../../components/Sections/AgentsSection/AgentsSection';
import TrailsSection from '../../components/Sections/TrailsSection/TrailsSection';
import EventsSection from '../../components/Sections/EventsSections/EventsSections';
function HomePage(): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>TurisMendes | HOME</title>
        <meta
          name='description'
          content='Com o intuito de preservar o patrimônio e promover o turismo, o TurisMendes transforma a maneira como a cidade se apresenta ao mundo!' />
      </Helmet>
      <main className="flex flex-col items-center justify-center w-full">
        <BannerCarousel />
        <AttractionsSection />
        <AgentsSection />
        <TrailsSection />
        <EventsSection />
      </main>
    </>
  );
}

export default HomePage;

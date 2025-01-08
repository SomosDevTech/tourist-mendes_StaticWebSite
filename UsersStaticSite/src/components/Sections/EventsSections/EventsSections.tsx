import React from 'react';
import Carousel from '../../Carousel/Carousel.tsx';
import ButtonCustom from '../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import EventCard from '../../Cards/EventCard/EventCard.tsx';
import EventSkeleton from '../../Skeletons/EventSkeleton.tsx';
import { getEvents } from '../../../api/events/index.ts';

function EventsSection(): React.ReactNode {

  const { data: events, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    initialData: undefined,
  });

  if (isError) return <h1>Erro ao carregar atrações locais</h1>;

  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 flex flex-col items-start gap-8">
        <h1 className='text-h1 text-black dark:text-white text-center'>EVENTOS</h1>
        <div className="w-full">
          <Carousel className='flex-shrink-0'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <EventSkeleton />
                  </div>
                ))
              : events?.data.map((event, index) => (
                <div key={index} className="flex-shrink-0">
                  <EventCard
                    imageData={event.imageData}
                    linkUrl={event.linkUrl}
                    eventTitle={event.eventTitle}
                    shortDescription={event.shortDescription}
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className="flex justify-center">
          <ButtonCustom variant='primary' text='Exibir mais' content='Eventos' link='' />
        </div>
      </div>
    </section>
  );
}

export default EventsSection;

import React from 'react';
import Carousel from '../../../Carousel/Carousel.tsx';
import ButtonCustom from '../../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import EventCard from '../../../Cards/EventCard/EventCard.tsx';
import EventoPageSkeleton from '../../../../pages/EventoPage/EventoPageSkeleton.tsx';
import { FetchError } from '../../../Errors/FetchError.tsx';
import { getEventos } from '../../../../api/getEventos/getEventos.ts';

function EventsSection(): React.ReactNode {

  const { data: responseEventsDTO, isLoading, isError, refetch } = useQuery({
    queryKey: ['events'],
    queryFn: getEventos,
  });

  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="md:max-w-[704px] lg:max-w-[944px] xl:max-w-[1142px] md:mx-auto py-12 md:py-20 flex flex-col items-start gap-8">
      <h1 className='text-h1 text-black dark:text-white text-center pl-4 md:pl-0 lg:pl-2'>EVENTOS</h1>

        {isError && (
          <FetchError action={refetch} content='eventos' />
        )}

        <div className="w-full lg:pl-0">
          <Carousel className='md:flex-wrap lg:justify-between'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0 pl-4">
                    <EventoPageSkeleton />
                  </div>
                ))
              : responseEventsDTO?.data?.map((event, index) => (
                <div key={index} className="pl-4 md:pb-4 md:pl-0 lg:pl-0">
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
        <div className={`${isLoading || isError ? 'hidden' : 'flex'} justify-start pl-4 md:pl-0 lg:pl-2`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Eventos' link='' />
        </div>
      </div>
    </section>
  );
}

export default EventsSection;

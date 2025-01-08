import React from 'react';
import Carousel from '../../Carousel/Carousel.tsx';
import ButtonCustom from '../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import TrailSkeleton from '../../Skeletons/TrailSkeleton.tsx';
import TrailCard from '../../Cards/TrailCard/TrailCard.tsx';
import { getTrails } from '../../../api/trails/index.ts';

function TrailsSection(): React.ReactNode {

  const { data: trails, isLoading, isError } = useQuery({
    queryKey: ['trails'],
    queryFn: getTrails,
    initialData: undefined,
  });

  if (isError) return <h1>Erro ao carregar atrações locais</h1>;

  return (
    <section className="bg-white dark:bg-lightGrey w-full">
      <div className="max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 flex flex-col items-start gap-8">
        <h1 className='text-h1 text-black dark:text-white text-center'>TRILHAS</h1>
        <div className="w-full">
          <Carousel className='flex-shrink-0'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <TrailSkeleton />
                  </div>
                ))
              : trails?.data.map((trails, index) => (
                <div key={index} className="flex-shrink-0">
                  <TrailCard
                    imageData={trails.imageData}
                    linkUrl={trails.linkUrl}
                    title={trails.title}
                    shortDescription={trails.shortDescription}
                    level={trails.level}
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className="flex justify-center">
          <ButtonCustom variant='primary' text='Exibir mais' content='Trilhas' link='' />
        </div>
      </div>
    </section>
  );
}

export default TrailsSection;

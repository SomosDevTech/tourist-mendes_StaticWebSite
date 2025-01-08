import React from 'react';
import Carousel from '../../Carousel/Carousel.tsx';
import AttractionCard from '../../Cards/AttractionCard/AttractionCard.tsx';
import ButtonCustom from '../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import CardSkeleton from '../../Skeletons/CardSkeleton.tsx';
import { getAttractions } from '../../../api/attractions/index.ts';

function AttractionsSection(): React.ReactNode {
  const { data: attractions, isLoading, isError } = useQuery({
    queryKey: ['attractions'],
    queryFn: getAttractions,
    initialData: undefined,
  });

  if (isError) return <h1>Erro ao carregar atrações locais</h1>;

  return (
    <section className="bg-white dark:bg-lightGrey w-full">
      <div className="max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 flex flex-col items-start gap-8">
        <h1 className='text-h1 text-black dark:text-white text-center'>
          ATRAÇÕES <strong className='text-h1 text-primary dark:text-secondary'>LOCAIS</strong>
        </h1>
        <div className="w-full">
          <Carousel className='flex-shrink-0'>
            {isLoading
              ? Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="flex-shrink-0">
                      <CardSkeleton />
                    </div>
                  ))
              : attractions?.data.map((attraction, index) => (
                  <div key={index} className="flex-shrink-0">
                    <AttractionCard
                      imageData={attraction.imageData}
                      linkUrl={attraction.linkUrl}
                      title={attraction.title}
                      shortDescription={attraction.shortDescription}
                    />
                  </div>
                ))}
          </Carousel>
        </div>
        <div className="flex justify-center">
          <ButtonCustom variant='primary' text='Exibir mais' content='Atrações locais' link='' />
        </div>
      </div>
    </section>
  );
}

export default AttractionsSection;
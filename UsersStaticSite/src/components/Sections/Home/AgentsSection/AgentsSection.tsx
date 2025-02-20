import React from 'react';
import Carousel from '../../../Carousel/Carousel.tsx';
import ButtonCustom from '../../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import AgentCard from '../../../Cards/AgentCard/AgentCard.tsx';
import AgentSkeleton from '../../../Skeletons/AgentSkeleton.tsx';
import { FetchError } from '../../../Errors/FetchError.tsx';
import { AgenteCulturalHomeCard, ResponseDTO } from '../../../../shared-lib/typesHomePage.ts';
import { getAgentes } from '../../../../api/getAgentes/getAgentes.ts';

function AgentsSection(): React.ReactNode {

  const { data: responseAgenteDTO, isLoading, isError, refetch } = useQuery<ResponseDTO<AgenteCulturalHomeCard[]>>({
    queryKey: ['agents'],
    queryFn: getAgentes,
  });


  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="lg:max-w-[944px] xl:max-w-[1142px] lg:mx-auto py-12 md:py-20 flex flex-col items-start gap-8">
        <h1 className='text-h1 text-black dark:text-white leading-8 pl-4 md:pl-8 lg:pl-0'>
          AGENTES <strong className='text-h1 text-primary dark:text-secondary'>CULTURAIS</strong>
        </h1>

        {isError && (
          <FetchError action={refetch} content='agentes' />
        )}

        <div className="w-full md:pl-4 lg:pl-0">
          <Carousel className='lg:flex-wrap lg:justify-between'>
            {isLoading
              ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <AgentSkeleton />
                  </div>
                ))
              : responseAgenteDTO?.data?.map((agent: AgenteCulturalHomeCard, index: number) => (
                <div key={index} className="pl-4 lg:pl-0 lg:pb-4">
                  <AgentCard
                    imageData={agent.imageData}
                    linkUrl={agent.linkUrl}
                    name={agent.name}
                    shortDescription={agent.shortDescription}
                  />
                </div>
              ))}
          </Carousel>
        </div>

        <div className={`${isLoading || isError ? 'hidden' : 'flex '} justify-start pl-4 md:pl-8 lg:pl-0`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Agentes culturais' link='' />
        </div>
      </div>
    </section>
  );
}

export default AgentsSection;

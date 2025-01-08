import React from 'react';
import Carousel from '../../Carousel/Carousel.tsx';
import ButtonCustom from '../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import AgentCard from '../../Cards/AgentCard/AgentCard.tsx';
import AgentSkeleton from '../../Skeletons/AgentSkeleton.tsx';
import { getAgents } from '../../../api/agents/index.ts';

function AgentsSection(): React.ReactNode {

  const { data: agents, isLoading, isError } = useQuery({
    queryKey: ['agents'],
    queryFn: getAgents,
    initialData: undefined,
  });

  if (isError) return <h1>Erro ao carregar atrações locais</h1>;

  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 flex flex-col items-start gap-8">
        <h1 className='text-h1 text-black dark:text-white text-center'>
          AGENTES <strong className='text-h1 text-primary dark:text-secondary'>CULTURAIS</strong>
        </h1>
        <div className="w-full">
          <Carousel className='flex-shrink-0'>
            {isLoading
              ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <AgentSkeleton />
                  </div>
                ))
              : agents?.data.map((agent, index) => (
                <div key={index} className="flex-shrink-0">
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
        <div className="flex justify-center">
          <ButtonCustom variant='primary' text='Exibir mais' content='Agentes culturais' link='' />
        </div>
      </div>
    </section>
  );
}

export default AgentsSection;

import React from 'react';
import { AgenteCulturalHomeCard } from '../../../shared-lib/typesHomePage';

function AgentCard({ name, shortDescription, linkUrl, imageData, }: AgenteCulturalHomeCard): React.ReactNode {
  return (
    <article
      className="relative flex flex-col w-[280px] h-[370px] xl:w-[370px] rounded-2xl gap-4 group transition-all duration-300"
      aria-label={`Nome do agente cultural: ${name}`}
    >
      <a href={linkUrl} className='w-full h-full'>
        <img
          src={imageData.imageUrl}
          alt={imageData.altDescription}
          className="w-full h-full object-cover rounded-2xl brightness-50 lg:brightness-75 lg:group-hover:brightness-50 transition duration-300"
        />
        <div className="flex flex-col w-52 absolute bottom-10 left-6 gap-5">
          <h2 className="text-h2 text-white">
            {name}
          </h2>
          <span className="text-level-1 text-white font-extralight flex lg:hidden lg:group-hover:flex transition duration-300">
            {shortDescription}
          </span>
        </div>
      </a>
    </article>
  );
}

export default AgentCard;

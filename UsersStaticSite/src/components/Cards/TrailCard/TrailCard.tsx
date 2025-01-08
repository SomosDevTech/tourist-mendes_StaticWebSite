import React from 'react';
import { TrilhasHomeCard } from '../../../shared-lib/typesHomePage';

function TrailCard({ title, level, shortDescription, linkUrl, imageData }: TrilhasHomeCard): React.ReactNode {
  const getDifficultyStyles = (level: string) => {
    switch (level.toLowerCase()) {
      case 'fácil':
        return 'bg-lightGreen text-darkGreen';
      case 'médio':
        return 'bg-lightYellow text-darkYellow';
      case 'difícil':
        return 'bg-lightRed text-darkRed';
      default:
        return 'bg-lightGreen text-darkGreen';
    }
  };
  return (
    <article className='w-[280px] h-[412px] lg:w-[230px] xl:w-full bg-white dark:bg-darkGrey rounded-2xl group'>
      <a
        href={linkUrl}
        className='flex flex-col items-start h-full p-5 border-[1px] rounded-xl drop-shadow-sm dark:border-none'
        aria-label={`Nome da trilha: ${title}, Dificuldade: ${level}`}
      >
        <div className='mb-4'>
          <img
            src={imageData.imageUrl}
            alt={imageData.altDescription}
            className='w-[239px] h-[180px] lg:w-[210px] xl:w-[233px] rounded-xl object-cover lg:group-hover:scale-105 transition-transform duration-200'
          />
        </div>

        <div className='flex flex-col items-start flex-grow'>
          <h2 className='text-h2 mb-2 text-black dark:text-white'>
            {title}
          </h2>
          <div className='mb-6'>
            <span className={`text-level-1 px-2 py-1 rounded-2xl ${getDifficultyStyles(level)}`}>
              Dificuldade: {level}
            </span>
          </div>
          <p className='text-level-1 text-black dark:text-white'>
            {shortDescription}
          </p>
        </div>
        
      </a>
    </article>
  );
}

export default TrailCard;
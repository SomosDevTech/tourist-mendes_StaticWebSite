import React from 'react';
import ButtonCustom from '../../ButtonCustom/ButtonCustom';
import { EventHomeCard } from '../../../shared-lib/typesHomePage';

function EventCard({
  eventTitle,
  shortDescription,
  linkUrl,
  imageData
}: EventHomeCard): React.ReactNode {

  return (
    <article
      className="flex flex-col md:flex-row items-start md:items-center justify-start gap-5 w-[280px] h-[414px] md:w-[700px] md:h-[348px] lg:w-[480px] xl:w-[562px] xl:h-[348px] rounded-2xl p-5 bg-white dark:bg-darkGrey group"
      aria-label={`Título do evento: ${eventTitle}`}
    >
      <img
        src={imageData.imageUrl}
        alt={imageData.altDescription}
        className='w-[318px] h-[146px] md:w-[357px] md:h-[308px] lg:w-[200px] lg:h-[300px] xl:w-[253px] xl:h-[308px] rounded-xl object-cover lg:group-hover:scale-105 transition-transform duration-200'
        role='img'
      />

      <div className='flex flex-col items-start justify-between gap-1 h-full'>
        <div className='flex flex-col gap-2'>
          <h2 className='w-full lg:w-full text-h2 text-black dark:text-white'>{eventTitle}</h2>
          <p className='text-level-1 text-black dark:text-white'>{shortDescription}</p>
        </div>
        <ButtonCustom text='Saiba mais' variant='secondary-dark' link={linkUrl} content={eventTitle} />
      </div>

    </article>
  );
}

export default EventCard;

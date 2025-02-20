import React from 'react';

interface Props { 
  link: string | undefined;
}

function LocationMap({ link }: Props): React.ReactNode {
  if (!link) return null;
  return (
    <section className='flex flex-col items-start gap-4 w-full px-4 md:px-0 lg:px-0'>
      <h1 className='text-h1'>Localização</h1>
      <iframe
        title="Direções para a atração"
        src={link}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full h-[327px] rounded-2xl'
      ></iframe>
    </section>
  )
}

export default LocationMap;
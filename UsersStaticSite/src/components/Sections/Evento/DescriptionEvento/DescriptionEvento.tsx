import React from 'react';
import ContactEvento from '../ContactEvento/ContactEvento';

interface Props {
  description: string[];
  info: string[];
  timeInfo: string;
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string[];
    address: string;
  };
  socials: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  }
}

function DescriptionEvento({ description, info, contacts, socials }: Props): React.ReactNode {

  return (
    <section className='w-full px-4 flex flex-col gap-12 md:px-8 lg:px-0 md:items-start md:justify-center md:mx-auto lg:mx-0'>
      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[530px] xl:max-w-[500px] xl:max-h-[242px]'>
        <h2 className='text-h2 text-black'>Sobre o evento</h2>
        <p className='text-level-1 font-normal '>{description}</p>
      </section>

      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[500px] xl:max-h-[500px]'>
        <h2 className='text-h2 text-black'>História</h2>
        <p className='text-level-1 font-normal'>{info[0]}</p>
        <p className='text-level-1 font-normal'>{info[1]}</p>
        <p className='text-level-1 font-normal'>{info[2]}</p>
      </section>

      <div className='hidden xl:flex'>
        <ContactEvento content={contacts} socials={socials} />
      </div>
    </section>
  )

}


export default DescriptionEvento;
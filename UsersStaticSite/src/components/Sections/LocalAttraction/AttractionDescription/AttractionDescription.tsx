import React from 'react';
import WorkingTime from '../WorkingTime/WorkingTime';
import AttractionContact from '../AttractionContact/AttractionContact';

interface Props {
  description: string[];
  info: string[];
  timeInfo: string;
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
    address: string;
  }
  socials: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  }
}

function AttractionDescription({ description, info, timeInfo, contacts, socials }: Props): React.ReactNode {

  return (
    <section className='w-full px-4 flex flex-col gap-12 md:px-8 lg:px-0 md:items-start md:justify-center md:mx-auto lg:mx-0 xl:w-[530px]'>
      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[500px]'>
        <h2 className='text-h2 text-black'>Descrição</h2>
        <p className='text-level-1 font-normal'>{description[0]}</p>
        <p className='text-level-1 font-normal'>{description[1]}</p>
      </section>

      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[500px]'>
        <h2 className='text-h2 text-black'>Informações históricas</h2>
        <p className='text-level-1 font-normal'>{info[0]}</p>
        <p className='text-level-1 font-normal'>{info[1]}</p>
      </section>

      <section className='hidden flex-col md:w-[770px] md:items-start md:justify-center md:mx-auto xl:w-[530px] xl:flex xl:mx-0'>
        <WorkingTime text={timeInfo} />
        <AttractionContact content={contacts} socials={socials} />
      </section>
    </section>
  )

}


export default AttractionDescription;
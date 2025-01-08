import React from 'react';

function Footer(): React.ReactNode {

  return (
    <footer className="bg-white dark:bg-lightGrey px-4 pt-12 w-full" >
      
      <div className='flex flex-col sm:flex-row items-start justify-center gap-8 md:gap-60'>
        <section className='flex flex-col gap-2 w-[280px] md:w-[350px] lg:w-[400px] mb-8'>
          <h2 className='text-h2 mb-2'>SOBRE</h2>
          <p className='body-level-1 font-normal'>O TurisMendes nasceu para valorizar a cultura, história e talentos de Mendes-RJ.</p>
          <p className='body-level-1 font-normal'>Através de placas turísticas com QR Codes e uma plataforma online interativa, o projeto conecta visitantes e moradores às riquezas locais.</p>
          <p className='body-level-1 font-normal'>Com o intuito de preservar o patrimônio e promover o turismo, o TurisMendes transforma a maneira como a cidade se apresenta ao mundo!</p>
        </section>

        <section className='flex flex-col gap-8 md:gap-10'>
          <div className='flex flex-col w-[280px]'>
            <h2 className='text-h2'>E-MAIL</h2>
            <a 
              href="mailto:cultura@mendes.rj.gov.br"
              className='body-level-1 font-normal'
              aria-label='Email: cultura@mendes.rj.gov.br'
              >
                cultura@mendes.rj.gov.br
                </a>
            <a 
              href="mailto:turismo@mendes.rj.gov.br"
              className='body-level-1 font-normal'
              aria-label='Email: turismo@mendes.rj.gov.br'
              >
                turismo@mendes.rj.gov.br
                </a>
          </div>
          <div className='flex flex-col w-[280px]'>
            <h2 className='text-h2'>TELEFONE</h2>
            <a
              href="tel:+552498865-6016"
              className='body-level-1 font-normal'
              aria-label='Telefone: +55(24)98865-6016'
            >
              (24) 98865-6016
            </a>
          </div>
          <div className='flex flex-col w-[280px]'>
            <h2 className='text-h2'>ENDEREÇO</h2>
            <a
              href="https://maps.app.goo.gl/SkDHrywTBv2hhYRY9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Endereço: Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro. CEP: 26700-000'
            >
              <address className='body-level-1 font-normal'>Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro</address>
              <address className='body-level-1 font-normal'>CEP: 26700-000</address>
            </a>
          </div>
        </section>
      </div>

      <div className='bg-offwhite dark:bg-white w-full h-[2px] mt-12 mb-10' />

      <section className='w-full flex flex-col items-center justify-center gap-12'>
        <div className='w-full flex flex-col md:flex-row items-center lg:items-start justify-between gap-12'>
          <img
            src="./src/assets/logos/TurisMendes.png"
            alt=""
            className='w-[226px] h-[130px] md:w-[127px] md:h-[73px] lg:w-[226px] lg:h-[130px] object-cover grayscale'
          />

          <div className='w-full flex items-start justify-center gap-4 md:gap-8 lg:gap-20'>
            <div className='flex flex-col items-center gap-4'>
              <h3 className='text-h3'>Realização</h3>
              <img
                src="./src/assets/logos/SomosDev.png"
                alt=""
                className='w-[125px] h-[62px] md:w-[70px] md:h-[35px] lg:w-[136px] lg:h-[62px] object-cover grayscale'
              />
            </div>
            <div className='flex flex-col items-center gap-4'>
              <h3 className='text-h3'>Idealização</h3>
              <img
                src="./src/assets/logos/ColetivoCafeina.png"
                alt=""
                className='w-[78px] h-[64px] md:w-[43px] md:h-[36px] lg:w-full lg:h-[90px] object-cover grayscale'
              />
            </div>
          </div>

          <div className='w-full flex flex-col items-center justify-between gap-4'>
            <h3 className='text-h3'>Fomentadores</h3>
            <div className='w-[280px] flex flex-wrap md:flex-nowrap items center justify-center gap-4'>
              <img
                src="./src/assets/logos/Prefeitura.png"
                alt=""
                className='w-[183px] h-[60px] md:w-[103px] md:h-[33px] lg:w-full lg:h-[63px] object-cover grayscale'
              />
              <img
                src="./src/assets/logos/PNAB.png"
                alt=""
                className='w-[117px] h-[60px] md:w-[72px] md:h-[33px] lg:w-[136px] lg:h-[62px] object-cover grayscale'
              />
              <img
                src="./src/assets/logos/GovernoFederal.png"
                alt=""
                className='w-[141px] h-[60px] md:w-[79px] md:h-[33px] lg:w-[136px] lg:h-[62px] object-cover grayscale'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center w-full'>
          <p className='body-level-2 w-fit'>&copy; TurisMendes 2025.</p>
          <p className='body-level-2 w-fit'>Todos os direitos reservados.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

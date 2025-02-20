import React, { useEffect, useState } from "react";
import { AboutSessionData } from "../../shared-lib/typesHomePage";

function Footer(): React.ReactNode {
  const [sobre, setSobre] = useState<undefined | AboutSessionData>(undefined);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((response) => {
        const sobre = response as AboutSessionData;
        setSobre(sobre);
      });
  }, []);

  const handleAnoAtual = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="bg-primary">
      <div className="flex flex-col sm:flex-row max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 items-start justify-between gap-8">
        {sobre && (
          <>
            <section className="flex flex-col items-start gap-2 w-[280px] md:w-[320px] lg:w-[470px] mb-8">
              <h2 className="text-h2 mb-2 text-neutralGrey">SOBRE</h2>
              {sobre.aboutDescription.map((line, index) => (
                <p key={index} className="text-level-1 font-normal text-neutralGrey">
                  {line}
                </p>
              ))}
            </section>

            <section className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col w-[280px]">
                <h2 className="text-h2 mb-4 text-neutralGrey">E-MAIL</h2>
                <a
                  href={`mailto:${sobre.emails[0]}`}
                  className="text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6"
                  aria-label={`Email: ${sobre.emails[0]}`}
                >
                  {sobre.emails[0]}
                </a>
                <a
                  href={`mailto:${sobre.emails[1]}`}
                  className="text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6"
                  aria-label={`Email: ${sobre.emails[1]}`}
                >
                  {sobre.emails[1]}
                </a>
              </div>
              <div className="flex flex-col w-[280px]">
                <h2 className="text-h2 mb-4 text-neutralGrey">TELEFONE</h2>
                <a
                  href={`tel:${sobre.phoneNumbers}`}
                  className="text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6"
                  aria-label={`Telefone: ${sobre.phoneNumbers}`}
                >
                  {sobre.phoneNumbers}
                </a>
              </div>
              <div className="flex flex-col w-[280px] sm:w-[310px] lg:w-[400px] xl:w-full">
                <h2 className="text-h2 mb-4 text-neutralGrey">ENDEREÇO</h2>
                <a
                  href="https://maps.app.goo.gl/SkDHrywTBv2hhYRY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Endereço: Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro. CEP: 26700-000"
                >
                  <address className="text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6">
                    Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro
                  </address>
                  <address className="text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6">
                    CEP: 26700-000
                  </address>
                </a>
              </div>
            </section>
          </>
        )}
      </div>

      <div className="bg-offwhite dark:bg-white w-full flex items-center justify-center h-[2px] mt-12 mb-10" />

      <section className="w-full mt-12 pb-4 gap-7 flex flex-col items-center justify-center xl:flex-row xl:gap-[200px]">
        <div className="w-fit flex flex-col items-center justify-center gap-4 md:gap-16 md:flex-row xl:gap-14">
          <div className="w-fit flex items-start justify-between gap-16 xl:justify-start xl:gap-14">
            <div className="flex flex-col items-center justify-between gap-2 w-16 md:w-28">
              <p className="text-level-2 text-neutralGrey font-normal dark:text-neutralGrey">
                Realização
              </p>
              <img
                src="/logos/SomosDev.svg"
                alt="Logo SomosDev"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-2 w-9 md:w-16">
              <p className="text-level-2 text-neutralGrey font-normal dark:text-neutralGrey">
                Idealização
              </p>
              <img
                src="/logos/ColetivoCafeina.svg"
                alt="Logo Coletivo Cafeina"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[300px] flex flex-col items-center justify-evenly">
            <p className="text-level-2 text-neutralGrey font-normal dark:text-neutralGrey">
              Fomentadores
            </p>
            <div className="w-full flex items-center justify-evenly gap-4">
              <div className="w-24 md:w-32">
                <img
                  src="/logos/PrefeituraMendes.svg"
                  alt="Logo Prefeitura de Mendes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 md:w-24">
                <img
                  src="/logos/PNAB.svg"
                  alt="Logo PNAB"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 md:w-24">
                <img
                  src="/logos/GovernoFederal.svg"
                  alt="Logo Governo Federal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-level-2 font-normal leading-5 text-neutralGrey">
          © TurisMendes {handleAnoAtual()}. Todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
}

export default Footer;

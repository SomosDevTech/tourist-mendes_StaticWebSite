import React from "react";

interface Props {
  content: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
    address: string;
  };
}

function ContactTrilha({ content}: Props): React.ReactNode {
  return (
    <section className="px-4 md:px-0">
        <>
          <h2 className="text-h2 mb-4">Contato</h2>

          <div className="flex flex-col gap-2">
            {content.phoneNumbers && (
              <div className="flex flex-col">
                <p className="text-level-1 font-bold">Telefone</p>
                <article className="flex gap-2">
                  <a
                    href={`tel:${content.phoneNumbers[0]}`}
                    className="text-level-1 font-normal"
                  >
                    {content.phoneNumbers[0]}
                  </a>
                  {content.phoneNumbers.length > 1 && (
                    <>
                      <p className="text-black dark:text-white">|</p>
                      <a
                        href={`tel:${content.phoneNumbers[1]}`}
                        className="text-level-1 font-normal"
                      >
                        {content.phoneNumbers[1]}
                      </a>
                    </>
                  )}
                </article>
              </div>
            )}

            <div className="flex flex-col">
              <p className="text-level-1 h-fit z-10">Endereço</p>
              <address className="text-level-1 not-italic font-normal">
                {content.address}
              </address>
            </div>
          </div>
        </>
    </section>
  );
}

export default ContactTrilha;

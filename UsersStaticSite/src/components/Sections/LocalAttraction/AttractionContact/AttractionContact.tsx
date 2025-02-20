import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

interface Props {
  content: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
    address: string;
  };
  socials: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
}

function AttractionContact({ content, socials }: Props): React.ReactNode {
  const { isDarkMode } = useTheme();

  return (
    <section className="pl-4 my-12 md:pl-0">
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

        {content.email && (
          <div className="flex flex-col">
            <p className="text-level-1 font-bold">Email</p>
            <article className="flex gap-2">
              <a
                href={`mailto:${content.email[0]}`}
                className="text-level-1 font-normal"
              >
                {content.email[0]}
              </a>
              {content.email.length > 1 && (
                <>
                  <p className="text-black dark:text-white">|</p>
                  <a
                    href={`mailto:${content.email[1]}`}
                    className="text-level-1 font-normal"
                  >
                    {content.email[1]}
                  </a>
                </>
              )}
            </article>
          </div>
        )}

        {content.site && (
          <div className="flex flex-col">
            <p className="text-level-1 font-bold">Site</p>
            <a
              href={content.site}
              target="_blank"
              rel="noreferrer"
              className="text-level-1 font-normal"
            >
              {content.site}
            </a>
          </div>
        )}

        <div className="flex flex-col xl:max-w-[420px]">
          <p className="text-level-1 h-fit z-10">Endereço</p>
          <address className="text-level-1 not-italic font-normal">
            {content.address}
          </address>
        </div>
      </div>

      <div className="flex my-4 gap-2">
        {socials.facebooK && (
          <a href={socials.facebooK}>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1720_899)">
                <path
                  d="M16 28.5649C22.6274 28.5649 28 23.1924 28 16.5649C28 9.93752 22.6274 4.56494 16 4.56494C9.37258 4.56494 4 9.93752 4 16.5649C4 23.1924 9.37258 28.5649 16 28.5649Z"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 11.5649H19C18.2044 11.5649 17.4413 11.881 16.8787 12.4436C16.3161 13.0062 16 13.7693 16 14.5649V28.5649"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18.5649H20"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1720_899">
                  <rect
                    width="32"
                    height="32"
                    stroke={isDarkMode ? "white" : "black"}
                    transform="translate(0 0.564941)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        )}

        {socials.instagram && (
          <a href={socials.instagram}>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1720_807)">
                <path
                  d="M16 21.5649C18.7614 21.5649 21 19.3264 21 16.5649C21 13.8035 18.7614 11.5649 16 11.5649C13.2386 11.5649 11 13.8035 11 16.5649C11 19.3264 13.2386 21.5649 16 21.5649Z"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M22 4.56494H10C6.68629 4.56494 4 7.25123 4 10.5649V22.5649C4 25.8787 6.68629 28.5649 10 28.5649H22C25.3137 28.5649 28 25.8787 28 22.5649V10.5649C28 7.25123 25.3137 4.56494 22 4.56494Z"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5 11.5649C23.3284 11.5649 24 10.8934 24 10.0649C24 9.23651 23.3284 8.56494 22.5 8.56494C21.6716 8.56494 21 9.23651 21 10.0649C21 10.8934 21.6716 11.5649 22.5 11.5649Z"
                  fill={isDarkMode ? "white" : "black"}
                />
              </g>
              <defs>
                <clipPath id="clip0_1720_807">
                  <rect
                    width="32"
                    height="32"
                    fill={isDarkMode ? "white" : "black"}
                    transform="translate(0 0.564941)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        )}

        {socials.whatsapp && (
          <a href={socials.whatsapp}>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1720_15467)">
                <path
                  d="M9 13.5649C9 12.5041 9.42143 11.4867 10.1716 10.7365C10.9217 9.98637 11.9391 9.56494 13 9.56494L15 13.5649L13.46 15.8737C14.0709 17.3334 15.2316 18.4941 16.6912 19.1049L19 17.5649L23 19.5649C23 20.6258 22.5786 21.6432 21.8284 22.3934C21.0783 23.1435 20.0609 23.5649 19 23.5649C16.3478 23.5649 13.8043 22.5114 11.9289 20.636C10.0536 18.7606 9 16.2171 9 13.5649Z"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99011 26.9539C12.5108 28.4127 15.476 28.9051 18.3328 28.3392C21.1897 27.7732 23.7433 26.1877 25.5175 23.878C27.2916 21.5684 28.1653 18.6924 27.9756 15.7862C27.7859 12.88 26.5457 10.142 24.4864 8.0826C22.427 6.02323 19.689 4.78308 16.7828 4.59337C13.8766 4.40366 11.0005 5.27733 8.69092 7.0515C6.3813 8.82567 4.79572 11.3792 4.2298 14.2361C3.66389 17.093 4.15626 20.0582 5.61511 22.5789L4.05136 27.2476C3.9926 27.4238 3.98407 27.6129 4.02673 27.7936C4.0694 27.9744 4.16156 28.1397 4.29289 28.2711C4.42423 28.4024 4.58955 28.4946 4.77032 28.5372C4.95109 28.5799 5.14017 28.5714 5.31636 28.5126L9.99011 26.9539Z"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1720_15467">
                  <rect
                    width="32"
                    height="32"
                    fill={isDarkMode ? "white" : "black"}
                    transform="translate(0 0.564941)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        )}

        {socials.twitter && (
          <a href={socials.twitter}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1819_25228)">
                <path
                  d="M6 5H12L26 27H20L6 5Z"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.235 17.9412L6 26.9999"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 5L17.765 14.0588"
                  stroke={isDarkMode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1819_25228">
                  <rect
                    width="32"
                    height="32"
                    fill={isDarkMode ? "white" : "black"}
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        )}

        {socials.tiktok && (
          <a href={socials.tiktok}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1819_25257)">
                <g clipPath="url(#clip1_1819_25257)">
                  <path
                    d="M21 12.75C23.0387 14.2174 25.4881 15.0047 28 15V10C26.1435 10 24.363 9.2625 23.0503 7.94975C21.7375 6.63699 21 4.85652 21 3H16V19.5C15.9997 20.1263 15.8314 20.741 15.5126 21.2801C15.1938 21.8192 14.7362 22.2629 14.1875 22.5648C13.6389 22.8668 13.0192 23.016 12.3932 22.9969C11.7672 22.9778 11.1578 22.7911 10.6285 22.4562C10.0993 22.1213 9.66962 21.6505 9.3843 21.093C9.09898 20.5355 8.96849 19.9116 9.00643 19.2865C9.04437 18.6613 9.24936 18.0578 9.60002 17.5389C9.95067 17.02 10.4341 16.6047 11 16.3363V11C7.02125 11.7088 4 15.3175 4 19.5C4 21.7543 4.89553 23.9163 6.48959 25.5104C8.08365 27.1045 10.2457 28 12.5 28C14.7543 28 16.9163 27.1045 18.5104 25.5104C20.1045 23.9163 21 21.7543 21 19.5V12.75Z"
                    stroke={isDarkMode ? "white" : "black"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1819_25257">
                  <rect
                    width="32"
                    height="32"
                    fill={isDarkMode ? "white" : "black"}
                  />
                </clipPath>
                <clipPath id="clip1_1819_25257">
                  <rect
                    width="32"
                    height="32"
                    fill={isDarkMode ? "white" : "black"}
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}

export default AttractionContact;

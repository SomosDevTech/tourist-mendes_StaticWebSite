import React from 'react';
import ButtonCustom from '../../ButtonCustom/ButtonCustom';
import { AtracaoLocalHomeCard } from '../../../shared-lib/typesHomePage';


function AttractionCard({ imageData, linkUrl, title, shortDescription }: AtracaoLocalHomeCard): React.ReactNode {
  return (
    <article
      className="relative flex flex-col w-[280px] h-[446px] xl:w-[370px] xl:h-[592px] rounded-2xl gap-4 group transition-all duration-300"
      aria-label={`Nome da atração: ${title}`}
    >
      <img
        src={imageData.imageUrl}
        alt={imageData.altDescription}
        className="w-full h-full object-cover rounded-2xl brightness-50 lg:brightness-75 lg:group-hover:brightness-50 transition duration-300"
      />
      
      <div className="flex flex-col w-52 absolute bottom-10 left-6 gap-5">
        <h2 className="text-h2 text-white">
          {title}
        </h2>
        <span className="text-level-1 text-white font-extralight flex lg:hidden lg:group-hover:flex transition duration-300">
          {shortDescription}
        </span>
        <ButtonCustom
          text="Saiba mais"
          variant="secondary"
          content={title}
          link={linkUrl}
        />
      </div>
      
    </article>
  );
}

export default AttractionCard;

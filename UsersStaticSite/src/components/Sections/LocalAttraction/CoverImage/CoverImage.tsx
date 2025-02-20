import React from "react";
import { ImageData } from "../../../../shared-lib/typesHomePage";

interface Props {
  src: ImageData | undefined;
  title: string | undefined;
  category: string | undefined;
}

function CoverImage({ src, title, category }: Props): React.ReactNode {

  return (
    <section className="relative w-full flex flex-col items-start justify-center">
      <img
        src={src ? src.imageUrl : ""}
        alt={src?.altDescription}
        className="w-full h-[632px] object-cover"
      />
      <div className="absolute bottom-12 flex flex-col items-start justify-center w-full px-4 md:pl-8">
        <div className="w-full md:max-w-[770px] md:mx-auto lg:max-w-[944px] xl:max-w-[1140px]">
          <h1 className="text-h1 leading-8 text-white mb-2">{title}</h1>
          <h2 className="text-h3 leading-6 text-white">{category}</h2>
        </div>
      </div>
    </section>
  );
}

export default CoverImage;

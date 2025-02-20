import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BannerSkeleton from '../Skeletons/BannerSkeleton';
import { HomeBanner, ResponseDTO } from '../../shared-lib/typesHomePage';
import { useQuery } from '@tanstack/react-query';
import { FetchError } from '../Errors/FetchError';
import { getBanners } from '../../api/getBanners/getBanners';
import { CircularProgress } from '@mui/material';

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const swipeContainerRef = useRef<HTMLDivElement>(null);
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  const { data: responseBannerDTO, isLoading, isError, refetch } = useQuery<ResponseDTO<HomeBanner[]>>({
    queryKey: ['banners'],
    queryFn: getBanners,
  });

  const banners = responseBannerDTO?.data || [];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, banners.length]);

  const handleNavDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const isExternalUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname !== window.location.hostname;
    } catch {
      return false;
    }
  };

  if (!isBannerLoaded && isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <CircularProgress color='info' size={80}/>
      </div>
    );
  }

  return (
    <section
      className="relative w-full overflow-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={() => setIsAutoPlaying(false)}
      onTouchEnd={() => setIsAutoPlaying(true)}
    >
      {isError && (
        <FetchError action={refetch} content='banners' />
      )}

      <div
        ref={swipeContainerRef}
        className="flex w-full h-full items-center overflow-x-hidden snap-x snap-mandatory touch-pan scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {isLoading
          ? Array(1)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex w-full">
                <BannerSkeleton />
              </div>
            )) : banners.map((banner, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-start"
                style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.3s ease-in-out' }}
              >
                <a
                  href={banner.linkUrl}
                  target={isExternalUrl(banner.linkUrl) ? '_blank' : '_self'}
                  rel={isExternalUrl(banner.linkUrl) ? 'noopener noreferrer' : undefined}
                  className="flex relative w-full h-full">
                  <img
                    src={banner.imageData.imageUrl}
                    alt={banner.imageData.altDescription}
                    className="w-full h-[516px] lg:h-[800px] object-cover"
                    onLoad={() => {
                      if (index === 1) {
                        setIsBannerLoaded(true);
                      }
                    }}
                  />
                  {banner.description && (
                    <div className="absolute bottom-20 md:bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 lg:left-40 w-[260px] md:w-[400px]">
                      <h1 className='text-h1 text-xl md:text-3xl text-white leading-8 text-center md:text-start w-full'>
                        {banner.description}
                      </h1>
                    </div>
                  )}
                </a>
              </div>
            ))}

        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + banners.length) % banners.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors"
          aria-label="Banner anterior"
          tabIndex={-1}
        >
          <ChevronLeft className="w-6 lg:w-10 h-6 lg:h-10 text-black" />
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors"
          aria-label="Próximo banner"
          tabIndex={-1}
        >
          <ChevronRight className="w-6 lg:w-10 h-6 lg:h-10 text-black" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavDotClick(index)}
              aria-label={`Ir para banner ${index + 1}`}
              className={`w-5 h-5 rounded-full transition-colors ${currentIndex === index ? 'scale-125 bg-primary dark:bg-secondary' : 'scale-75 bg-white'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
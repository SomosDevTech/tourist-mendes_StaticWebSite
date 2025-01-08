import React, { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
}) => {
  return (
    <section className={`w-full xl:w-fit overflow-hidden flex justify-start lg:justify-between items-center ${className}`}>
      <div
        className={`flex w-full xl:w-fit xl:flex-wrap gap-4 justify-start lg:justify-between overflow-x-auto overflow-y-hidden snap-x snap-mandatory lg:snap-none touch-pan no-scrollbar ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-full snap-start `}
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
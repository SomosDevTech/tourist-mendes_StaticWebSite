import { Skeleton } from '@mui/material';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const BannerSkeleton: React.FC = () => {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? '#2c2c2c' : '#f0f0f0';
  const textColor = isDarkMode ? '#3a3a3a' : '#d6d6d6';

  return (
    <div className="relative w-full h-[516px] lg:h-[900px] flex flex-col">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        style={{ backgroundColor: skeletonColor }}
      />

      <div className='hidden md:flex items-center justify-between w-full h-full absolute top-0'>
        <Skeleton
          variant="circular"
          width="50px"
          height="50px"
          animation="wave"
          className='left-5'
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="circular"
          width="50px"
          height="50px"
          animation="wave"
          className='right-5'
          style={{ backgroundColor: textColor }}
        />
      </div>

      <Skeleton
        variant="text"
        width="40%"
        height="10%"
        animation="wave"
        className='absolute bottom-40 left-5'
        style={{ backgroundColor: textColor }}
      />
    </div>
  )
}

export default BannerSkeleton;

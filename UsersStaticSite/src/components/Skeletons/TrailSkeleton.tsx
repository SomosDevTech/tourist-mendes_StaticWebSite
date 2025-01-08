import { Skeleton } from '@mui/material';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const TrailSkeleton: React.FC = () => {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? '#2c2c2c' : '#f0f0f0';
  const textColor = isDarkMode ? '#3a3a3a' : '#d6d6d6';

  return (
    <div className="relative w-[280px] h-[450px] lg:w-[230px] rounded-2xl flex flex-col">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        className='relative rounded-2xl'
        style={{ backgroundColor: skeletonColor }}
      />
      <Skeleton
        variant="rectangular"
        width="80%"
        height="50%"
        animation="wave"
        className='absolute bottom-64 left-6 rounded-2xl'
        style={{ backgroundColor: textColor }}
      />
      <Skeleton
        variant="text"
        width="50%"
        height="5%"
        animation="wave"
        className='absolute bottom-56 left-6 rounded-2xl'
        style={{ backgroundColor: textColor }}
      />
      <Skeleton
        variant="text"
        width="60%"
        height="5%"
        animation="wave"
        className='absolute bottom-52 left-6 rounded-2xl'
        style={{ backgroundColor: textColor }}
      />
      <Skeleton
        variant="text"
        width="80%"
        height="5%"
        animation="wave"
        className='absolute bottom-48 left-6 rounded-2xl'
        style={{ backgroundColor: textColor }}
      />
    </div>
  )
}

export default TrailSkeleton;

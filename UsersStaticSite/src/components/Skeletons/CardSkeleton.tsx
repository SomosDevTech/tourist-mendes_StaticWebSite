import { Skeleton } from '@mui/material';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const CardSkeleton: React.FC = () => {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? '#2c2c2c' : '#f0f0f0';
  const textColor = isDarkMode ? '#3a3a3a' : '#d6d6d6';

  return (
    <div className="relative w-[280px] h-[446px] xl:w-[370px] xl:h-[592px] rounded-2xl flex flex-col">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        className='relative rounded-2xl'
        style={{ backgroundColor: skeletonColor }}
      />
      <Skeleton
        variant="text"
        width="30%"
        height="5%"
        animation="wave"
        className='absolute bottom-40 left-5 rounded-2xl'
        style={{ backgroundColor: textColor }}
      />
      <Skeleton
        variant="text"
        width="60%"
        height="5%"
        animation="wave"
        className='absolute bottom-36 left-5 rounded-2xl'
        style={{ backgroundColor: textColor }}
      />
      <Skeleton
        variant="rectangular"
        width="123px"
        height="43px"
        animation="wave"
        className='absolute bottom-32 left-5 rounded-2xl'
        style={{ backgroundColor: textColor }}
      />
    </div>
  )
}

export default CardSkeleton;
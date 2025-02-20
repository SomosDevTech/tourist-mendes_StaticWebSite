import { Skeleton } from '@mui/material';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const EventoPageSkeleton: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const skeletonColor = isDarkMode ? '#2c2c2c' : '#f0f0f0';
  const textColor = isDarkMode ? '#3a3a3a' : '#d6d6d6';

  return (
    <div className="w-[280px] h-[414px] md:w-[700px] md:h-[348px] lg:w-[480px] xl:w-[562px] xl:h-[348px] bg-white dark:bg-darkBlack rounded-2xl p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-[45%] h-[200px] md:h-full">
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave" 
          className="rounded-xl"
          style={{ backgroundColor: skeletonColor }} 
        />
      </div>

      <div className="w-full md:w-[55%] flex flex-col justify-between gap-4 pt-2">
        <div className="flex flex-col gap-3">
          <Skeleton 
            variant="text" 
            width="80%" 
            height={32} 
            animation="wave" 
            style={{ backgroundColor: textColor }} 
          />
          <Skeleton 
            variant="text" 
            width="100%" 
            height={24} 
            animation="wave" 
            style={{ backgroundColor: textColor }} 
          />
          <Skeleton 
            variant="text" 
            width="90%" 
            height={24} 
            animation="wave" 
            style={{ backgroundColor: textColor }} 
          />
        </div>

        <div className="mt-auto">
          <Skeleton 
            variant="rounded" 
            width={120} 
            height={40} 
            animation="wave" 
            style={{ backgroundColor: textColor }} 
          />
        </div>
      </div>
    </div>
  );
};

export default EventoPageSkeleton;
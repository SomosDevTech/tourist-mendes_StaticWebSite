import { Skeleton } from '@mui/material';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const AgentSkeleton: React.FC = () => {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? '#2c2c2c' : '#f0f0f0';
  const textColor = isDarkMode ? '#3a3a3a' : '#d6d6d6';

  return (
    <div className="relative w-[280px] h-[370px] xl:w-[370px] flex flex-col">
      <Skeleton
        variant="rounded"
        width="100%"
        height="100%"
        animation="wave"
        style={{ backgroundColor: skeletonColor }}
      />
      <Skeleton
        variant="text"
        width="40%"
        height="10%"
        animation="wave"
        className='absolute bottom-20 left-5'
        style={{ backgroundColor: textColor }}
      />
    </div>
  )
}

export default AgentSkeleton;

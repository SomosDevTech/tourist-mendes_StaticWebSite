import { Skeleton } from '@mui/material';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const AtracaoLocalPageSkeleton: React.FC = () => {
  const { isDarkMode } = useTheme();

  const skeletonColor = isDarkMode ? '#2c2c2c' : '#f0f0f0';
  const textColor = isDarkMode ? '#3a3a3a' : '#d6d6d6';

  return (
    <div className="w-full flex flex-col gap-2 relative">
      {/* {coverImage} */}
      <div className="relative w-full h-[632px]">
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          className='relative rounded-2xl'
          style={{ backgroundColor: skeletonColor }}
        />
        <div className='absolute flex flex-col bottom-20 left-5 gap-2 w-3/4 h-20 md:pl-8'>
          <Skeleton
            variant="rounded"
            width="100%"
            height="100%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rounded"
            width="50%"
            height="100%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
        </div>
      </div>

      {/* {breadcrumb} */}
      <div className='flex w-full h-[40px] gap-4 pl-4 mb-10 md:pl-8'>
        <Skeleton
          variant="rounded"
          width="20%"
          height="100%"
          animation="wave"
          className='relative rounded-2xl'
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rounded"
          width="20%"
          height="100%"
          animation="wave"
          className='relative rounded-2xl'
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rounded"
          width="20%"
          height="100%"
          animation="wave"
          className='relative rounded-2xl'
          style={{ backgroundColor: textColor }}
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full items-start justify-between">
        <div className="flex flex-col w-full">
          {/* {description} */}
          <div className="flex flex-col w-full h-[200px] pl-4 mb-10 gap-2 md:pl-8">
            <Skeleton
              variant="rounded"
              width="50%"
              height="40%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
          </div>

          {/* {historical info} */}
          <div className="flex flex-col w-full h-[200px] pl-4 mb-12 gap-2 md:pl-8">
            <Skeleton
              variant="rounded"
              width="50%"
              height="40%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="80%"
              height="10%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full items-start justify-between">
          {/* {images} */}
          <div className='w-full h-[300px] flex flex-col gap-4 pl-4 mb-10 md:pl-8'>
            <Skeleton
              variant="rounded"
              width="40%"
              height="20%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <div className="w-full flex gap-2 h-[200px]">
              <Skeleton
                variant="rounded"
                width="100%"
                height="100%"
                animation="wave"
                className='relative rounded-2xl'
                style={{ backgroundColor: textColor }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height="100%"
                animation="wave"
                className='relative rounded-2xl'
                style={{ backgroundColor: textColor }}
              />
            </div>
          </div>

          {/* {videos} */}
          <div className='w-full h-[300px] flex flex-col gap-4 pl-4 mb-10 md:pl-8'>
            <Skeleton
              variant="rounded"
              width="40%"
              height="20%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <div className="w-full flex gap-2 h-[200px]">
              <Skeleton
                variant="rounded"
                width="100%"
                height="100%"
                animation="wave"
                className='relative rounded-2xl'
                style={{ backgroundColor: textColor }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height="100%"
                animation="wave"
                className='relative rounded-2xl'
                style={{ backgroundColor: textColor }}
              />
            </div>
          </div>

          {/* {tour360} */}
          <div className="w-full flex flex-col gap-4 pl-4 mb-10 h-[200px] md:pl-8">
            <Skeleton
              variant="rounded"
              width="40%"
              height="50%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="90%"
              height="20%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="90%"
              height="20%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="90%"
              height="20%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="50%"
              height="60%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
          </div>

          {/* {map} */}
          <div className="w-full h-[300px] gap-2 flex flex-col pl-4 mb-10 md:pl-8">
            <Skeleton
              variant="rounded"
              width="40%"
              height="20%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
            <Skeleton
              variant="rounded"
              width="90%"
              height="100%"
              animation="wave"
              className='relative rounded-2xl'
              style={{ backgroundColor: textColor }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:absolute lg:bottom-[350px] lg:w-1/2">
        {/* {working time} */}
        <div className="w-full h-[150px] gap-2 flex flex-col pl-4 mb-10 md:pl-8">
          <Skeleton
            variant="rounded"
            width="40%"
            height="60%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rounded"
            width="90%"
            height="100%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rounded"
            width="90%"
            height="100%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
        </div>

        {/* {contacts} */}
        <div className="w-full h-[150px] gap-2 flex flex-col pl-4 mb-10 md:pl-8">
          <Skeleton
            variant="rounded"
            width="40%"
            height="60%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rounded"
            width="90%"
            height="40%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rounded"
            width="90%"
            height="40%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rounded"
            width="90%"
            height="40%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rounded"
            width="90%"
            height="40%"
            animation="wave"
            className='relative rounded-2xl'
            style={{ backgroundColor: textColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default AtracaoLocalPageSkeleton;
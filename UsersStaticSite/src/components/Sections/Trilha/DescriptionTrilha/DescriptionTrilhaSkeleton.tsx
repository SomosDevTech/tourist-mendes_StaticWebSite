import { Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

function DescriptionTrilhaSkeleton(): React.ReactNode {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? "#2c2c2c" : "#f0f0f0";
  const textColor = isDarkMode ? "#3a3a3a" : "#d6d6d6";

  return (
    <div className="relative w-[98%] h-[500px] pl-4 mt-5 md:max-w-[770px] md:mx-auto md:my-0 md:pl-0 lg:mx-0 xl:w-4/5 lg:max-w-[944px] xl:max-w-[1140px]">
      <Skeleton
        variant="rounded"
        width="100%"
        height="100%"
        animation="wave"
        className="relative"
        style={{ backgroundColor: skeletonColor }}
      />

      <div className="absolute top-0 w-[90%] h-10 pl-4 gap-8">
        <Skeleton
          variant="rectangular"
          width="50%"
          height="100%"
          animation="wave"
          className="my-6"
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height="80%"
          animation="wave"
          className="mb-2"
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height="80%"
          animation="wave"
          className="mb-2"
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height="80%"
          animation="wave"
          className="mb-2"
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height="80%"
          animation="wave"
          className="mb-2"
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rectangular"
          width="70%"
          height="100%"
          animation="wave"
          className="my-10"
          style={{ backgroundColor: textColor }}
        />
        <div className="flex w-full h-20 gap-4">
          <Skeleton
            variant="rectangular"
            width="100%"
            height="50%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height="50%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height="50%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
        </div>
        <Skeleton
          variant="rectangular"
          width="60%"
          height="70%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
      </div>

      <div className="hidden relative w-full h-[250px] md:w-full md:max-w-[770px] md:my-0 md:pl-0 lg:w-full lg:max-w-[944px] xl:flex xl:max-w-[1140px] xl:mt-20">
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          animation="wave"
          className="absolute bottom-0"
          style={{ backgroundColor: skeletonColor }}
        />
        <div className="absolute top-3 w-[98%] h-20 pl-4">
          <Skeleton
            variant="text"
            width="50%"
            height="80%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height="60%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height="60%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height="60%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
        </div>
      </div>
      <div className="hidden relative w-full h-[250px] md:w-full md:max-w-[770px] md:my-0 md:pl-0 lg:w-full lg:max-w-[944px] xl:flex xl:max-w-[1140px] xl:mt-20">
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          animation="wave"
          className="absolute bottom-0"
          style={{ backgroundColor: skeletonColor }}
        />
        <div className="absolute top-3 w-[98%] h-20 pl-4">
          <Skeleton
            variant="text"
            width="50%"
            height="80%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height="60%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height="60%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height="60%"
            animation="wave"
            className=""
            style={{ backgroundColor: textColor }}
          />
        </div>
      </div>
    </div>
  );
}

export default DescriptionTrilhaSkeleton;

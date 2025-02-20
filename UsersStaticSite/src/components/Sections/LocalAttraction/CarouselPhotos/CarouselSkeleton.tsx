import { Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

function CarouselSkeleton(): React.ReactNode {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? "#2c2c2c" : "#f0f0f0";
  const textColor = isDarkMode ? "#3a3a3a" : "#d6d6d6";

  return (
    <div className="relative w-[98%] h-[180px] my-10 md:max-w-[770px] md:my-0 md:pl-0 lg:w-full lg:max-w-[944px] xl:max-w-[1140px]">
      <Skeleton
        variant="text"
        width="20%"
        height="30%"
        animation="wave"
        className="absolute top-0 md:top-10"
        style={{ backgroundColor: textColor }}
      />
      <div className="flex w-full h-[180px] gap-4 justify-start xl:h-[130px]">
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          animation="wave"
          className="absolute top-2 md:top-12"
          style={{ backgroundColor: skeletonColor }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          animation="wave"
          className="absolute top-2 md:top-12"
          style={{ backgroundColor: skeletonColor }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          animation="wave"
          className="absolute top-2 md:top-12"
          style={{ backgroundColor: skeletonColor }}
        />
      </div>
    </div>
  );
}

export default CarouselSkeleton;

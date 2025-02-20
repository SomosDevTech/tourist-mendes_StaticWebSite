import { Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

function BreadcrumbSkeleton(): React.ReactNode {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? "#2c2c2c" : "#f0f0f0";
  const textColor = isDarkMode ? "#3a3a3a" : "#d6d6d6";

  return (
    <div className="relative w-[98%] h-20 my-5 pl-4 md:max-w-[770px] md:mx-auto md:pl-0 lg:max-w-[944px] xl:max-w-[1140px]">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        className="relative"
        style={{ backgroundColor: skeletonColor }}
      />
      <div className="flex gap-4 absolute top-6 w-[90%] pl-2">
        <Skeleton
          variant="text"
          width="30%"
          height="100%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="text"
          width="30%"
          height="100%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="text"
          width="30%"
          height="100%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
      </div>
    </div>
  );
}

export default BreadcrumbSkeleton;

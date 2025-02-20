import { Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

function CoverImageSkeleton(): React.ReactNode {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? "#2c2c2c" : "#f0f0f0";
  const textColor = isDarkMode ? "#3a3a3a" : "#d6d6d6";

  return (
    <div className="relative flex flex-col w-full h-[700px]">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        className="relative"
        style={{ backgroundColor: skeletonColor }}
      />
      <div className="absolute w-full bottom-16 gap-4 left-4 h-10 md:pl-0 md:max-w-[770px] md:mx-auto">
        <Skeleton
          variant="text"
          width="70%"
          height="100%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="text"
          width="40%"
          height="100%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
      </div>
    </div>
  );
}

export default CoverImageSkeleton;

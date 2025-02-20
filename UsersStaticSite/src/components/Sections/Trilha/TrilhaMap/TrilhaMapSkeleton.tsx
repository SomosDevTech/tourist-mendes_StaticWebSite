import { Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

function TrilhaMapSkeleton(): React.ReactNode {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? "#2c2c2c" : "#f0f0f0";
  const textColor = isDarkMode ? "#3a3a3a" : "#d6d6d6";

  return (
    <div className="relative w-[98%] h-[327px] pl-4 my-5 md:max-w-[770px] md:my-0 md:pl-0 lg:w-full lg:max-w-[944px] xl:max-w-[1140px] xl:mt-0">
      <Skeleton
        variant="text"
        width="50%"
        height="20%"
        animation="wave"
        className="absolute bottom-3"
        style={{ backgroundColor: textColor }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height="100%"
        animation="wave"
        className="absolute top-0 rounded-2xl"
        style={{ backgroundColor: skeletonColor }}
      />
    </div>
  );
}

export default TrilhaMapSkeleton;

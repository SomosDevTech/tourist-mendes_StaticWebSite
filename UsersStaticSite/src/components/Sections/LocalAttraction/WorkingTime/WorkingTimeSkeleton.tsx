import { Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

function WorkingTimeSkeleton(): React.ReactNode {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? "#2c2c2c" : "#f0f0f0";
  const textColor = isDarkMode ? "#3a3a3a" : "#d6d6d6";

  return (
    <div className="relative w-[98%] h-[250px] my-5 md:w-full md:max-w-[770px] md:my-0 md:pl-0 lg:w-full lg:max-w-[944px] xl:max-w-[1140px] xl:mt-0">
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
  );
}

export default WorkingTimeSkeleton;

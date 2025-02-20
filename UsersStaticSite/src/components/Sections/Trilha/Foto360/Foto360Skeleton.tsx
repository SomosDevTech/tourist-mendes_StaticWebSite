import { Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

function Foto360Skeleton(): React.ReactNode {
  const { isDarkMode } = useTheme();
  const skeletonColor = isDarkMode ? "#2c2c2c" : "#f0f0f0";
  const textColor = isDarkMode ? "#3a3a3a" : "#d6d6d6";

  return (
    <div className="relative flex flex-col w-[98%] h-[550px] md:w-full md:max-w-[770px] md:my-0 md:pl-0 lg:w-full lg:max-w-[944px] xl:max-w-[1140px] xl:mt-0">
      <Skeleton
        variant="text"
        width="100%"
        height="100%"
        animation="wave"
        className="absolute bottom-3"
        style={{ backgroundColor: skeletonColor }}
      />

      <div className="absolute top-28 left-4 flex flex-col w-full h-[300px]">
        <Skeleton
          variant="text"
          width="40%"
          height="100%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="text"
          width="80%"
          height="50%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="text"
          width="80%"
          height="50%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="text"
          width="80%"
          height="50%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="text"
          width="80%"
          height="50%"
          animation="wave"
          className=""
          style={{ backgroundColor: textColor }}
        />
        <Skeleton
          variant="rounded"
          width="70%"
          height="60%"
          animation="wave"
          className="mt-20"
          style={{ backgroundColor: textColor }}
        />
      </div>
    </div>
  );
}

export default Foto360Skeleton;

import React, { useEffect, useState } from "react";
import { ChevronRight, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

type SegmentMap = {
  [key: string]: string;
};

type BreadcrumbProps = {
  resolveSegment?: (segment: string, index: number) => Promise<string>;
  segmentMap?: SegmentMap;
  idSegments?: number[];
  title: string;
};

const Breadcrumb = ({
  resolveSegment,
  segmentMap = {},
  idSegments = [],
  title,
}: BreadcrumbProps) => {
  const [resolvedSegments, setResolvedSegments] = useState<{
    [key: string]: string;
  }>({});

  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  useEffect(() => {
    const resolveSegments = async () => {
      if (!resolveSegment) return;

      const resolved: { [key: string]: string } = {};

      try {
        await Promise.all(
          pathSegments.map(async (segment, index) => {
            if (idSegments.includes(index)) {
              const name = await resolveSegment(segment, index);
              resolved[segment] = name;
            }
          })
        );

        setResolvedSegments(resolved);
      } catch (error) {
        console.error("Error resolving segments:", error);
      }
    };

    resolveSegments();
  }, [pathname, resolveSegment, idSegments, pathSegments]);

  const getSegmentLabel = (segment: string, index: number): string => {
    if (idSegments.includes(index) && resolvedSegments[segment]) {
      return resolvedSegments[segment];
    }

    if (segmentMap[segment]) {
      return segmentMap[segment];
    }

    return decodeURIComponent(segment)
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = getSegmentLabel(segment, index);
    return { path, label };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center justify-start mt-4 w-[94%] h-8 pl-4 md:pl-8 md:max-w-[770px] lg:pl-0 lg:mx-auto lg:w-full lg:max-w-[944px] xl:max-w-[1140px]"
    >
      <ol className="flex items-center justify-center gap-1 flex-wrap">
        <li className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-level-2 underline underline-offset-2 font-medium leading-6 text-gray-500 hover:text-primary transition-all duration-300 dark:text-white dark:hover:text-secondary">
              Home
            </span>
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li
            key={item.path}
            className="flex items-center justify-center gap-1"
          >
            {index > breadcrumbItems.length - 1 && (
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}

            {index === breadcrumbItems.length - 2 && (
              <div className="relative group">
                <EllipsisVertical className="h-4 w-4 text-gray-400 cursor-pointer" />
                <div className="absolute left-0 bottom-0 w-fit h-fit hidden group-hover:block bg-white shadow-md border rounded-md mt-1 transition duration-1000">
                  <ul className="p-2">
                    {breadcrumbItems.slice(0, 1).map((pathItem, i) => (
                      <li key={i}>
                        <Link
                          to={pathItem.path}
                          className="capitalize text-level-2 bg-primary hover:bg-primaryDark dark:bg-secondary dark:hover:bg-secondaryDark rounded-md text-white dark:text-black block py-1 px-2"
                        >
                          {pathItem.label.toString()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {index < breadcrumbItems.length - 1 && (
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}

            {index === breadcrumbItems.length - 1 && (
              <span
                className="text-level-2 text-primary dark:text-white font-bold"
                aria-current="page"
              >
                {title}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

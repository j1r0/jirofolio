import { cn } from "@/lib/utils";
import { Globe } from "@/components/ui/Globe";
import { GridGlobe } from "@/components/ui/GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  subtitle,
  subheading,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative p-[1px] rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-black-100 dark:bg-gradient-to-b dark:from-stone-300 dark:via-stone-700 dark:to-transparent h-full w-full overflow-hidden",
        className
      )}
    >
      <div className={`h-full bg-black-100 rounded-[23px] p-4`}>
        <div className="w-full h-full absolute">
          {id === 1 ? (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover, object-center opacity-20"
              )}
            />
          ) : (
            img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover, object-center")}
              />
            )
          )}
        </div>
        <div
          className={`w-full h-full absolute right-0 -bottom-5 ${
            id === 1 && "w-full opacity-80"
          }`}
        >
          {" "}
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center, w-full, h-full"}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            `relative md:h-full min-h-40 flex flex-col 
            ${id === 1 ?"group-hover/bento:-translate-y-2 transition duration-200" : id === 3 ? "group-hover/bento:-translate-x-2 transition duration-200" : "group-hover/bento:translate-x-2 transition duration-200"
        }`

          )}
        >
          <div className="font-sans font-extralight text-sm md:text-xs lg:text-base z-10 text-white-100">
            {description}
          </div>
          <div className="font-sans font-bold text-lg md:text-xl lg:text-3xl z-10 text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-300 to-stone-500">
            {id === 3 ? (
              <span className="flex flex-col gap-0 text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-300 to-stone-500 pt-1 leading-5 lg:leading-7">
                {title}
                {subtitle && (
                  <span className="text-sm md:text-base italic">
                    {subtitle}
                  </span>
                )}
                {subheading && (
                  <span className="font-extralight text-lg md:text-xl italic">
                    {subheading}
                  </span>
                )}
              </span>
            ) : (
              `${title}`
            )}
          </div>
          {id == 2 && <GridGlobe />}
          {id === 1 && (
            <div className="flex gap-2 lg:gap-3 absolute -bottom-2 w-full">
              <div className="flex flex-col gap-2 lg:gap-3 flex-1">
                {["Next.js", "ReactJS", "Java"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-10 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-black-200 hover:scale-[103%] hover:bg-black-300 transition duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 flex-1">
                {["Next.js", "ReactJS", "Java"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-10 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-black-200 hover:scale-[103%] hover:bg-black-300 transition duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 flex-1">
                {["Next.js", "ReactJS", "Java"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-10 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-black-200 hover:scale-[103%] hover:bg-black-300 transition duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 flex-1">
                {["Next.js", "ReactJS", "Java"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-10 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-black-200 hover:scale-[103%] hover:opacity-100 hover:bg-black-300 transition duration-200 "
                  >
                    {item}
                  </span>
                ))}
              </div>
 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

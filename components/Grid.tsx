import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="px-4 md:px-[10vw]">
      <BentoGrid className="gap-10 py-20">
        {gridItems.map(({ id, title, subtitle, subheading, description, className,img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            subtitle={subtitle}
            subheading={subheading}
            description={description}
            className={className}
            imgClassName = {imgClassName}
            titleClassName={titleClassName}
            img={img}
            spareImg={spareImg}

          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { aboutMe, gridItems } from "@/data";
import { StickyScroll } from "./ui/StickyScroll";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const About = () => {
  return (
    <section id="about" className="px-4 md:px-[10vw] py-10 bg-black">
      <div className="relative pb-10">
        <h1 className="text-4xl font-extralight text-center">
          A Little {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-400 to-stone-50 font-bold">
            About Me
          </span>
        </h1>
      </div>
      <div className="pb-10 font-thin text-center text-xl md:text-2xl lg:text-3xl font-serif w-full px-20 lg:px-40">
        {aboutMe.map((text) => (
          <div key={text}>
          <h1>{text}</h1>
          </div>

        ))}
        </div>

      <BentoGrid className="gap-10">
        {gridItems.map(
          ({
            id,
            title,
            subtitle,
            subheading,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              subtitle={subtitle}
              subheading={subheading}
              description={description}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default About;

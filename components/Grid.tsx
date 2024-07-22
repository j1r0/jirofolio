import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="px-4 md:px-[10vw] py-10">
      <div className="relative pb-10">
        <h1 className="text-4xl font-bold text-center">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-400 to-stone-50 ">
            Myself
          </span>
        </h1>
      </div>

      <div>
        <p>
          I am a dedicated first-generation student from Guam who has high aspirations as a software engineer. Despite the challenges of moving to the mainland alone and managing financial constraints, I have excelled academically, maintaining a 3.8 GPA, and actively participating in
          leadership roles within various clubs and organizations. My
          involvement with the Society of Asian Scientists and Engineers (SASE)
          has been pivotal, providing me with a sense of belonging and enabling
          me to foster inclusive experiences for others. My passion for software
          development is evident through my coursework in Data Structures,
          Algorithms, and Software Engineering, as well as my hands-on
          experience in developing software applications and websites. With a
          minor in Psychology, I approach software design with a user-centric
          perspective, ensuring intuitive and efficient products. As I pursue an
          accelerated Master’s Degree in Software Engineering, I remain
          committed to utilizing my education to make a meaningful impact in my
          community and beyond.
        </p>
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

export default Grid;

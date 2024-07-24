"use client"
import { AuroraBackground } from "./ui/Aurora";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypeAnimation } from "react-type-animation";
import MagicButton from "./MagicButton";
import {  FaLocationArrow } from "react-icons/fa";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { PiCaretDoubleDown, PiCaretDoubleDownThin, PiDownloadSimple, PiDownloadSimpleBold, PiDownloadSimpleThin } from "react-icons/pi";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div>
      <div className="h-dvh w-screen flex items-center justify-center absolute top-0 left-0">
        <div>
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center"
            ></motion.div>
          </AuroraBackground>
        </div>
      </div>
      <div className= "flex items-center justify-center relative ">
          {/* Gradient */}
          <div className="absolute opacity-50 xl:opacity-70 xl:-right-96 ">
            <img className="pointer-events-none blur-xl -z-[1] h-[90vw] xl:h-[70vw]" src="/gradient.svg" />
          </div>


          {/* Content */}
          <div className="w-screen px-8  xl:px-20 xl:pb-20 2xl:pb-40 2xl:px-40 flex flex-col xl:items-start xl:justify-end items-center justify-center h-screen ">

          {/* Typer */}
            <span className="uppercase tracking-widest text-md md:text-lg lg:text-2xl text-base text-center font-display2 text-transparent text-stroke-thin text-stroke-beige">
              <TypeAnimation
                sequence={[
                  2000,
                  "Problem Solver",
                  2000,
                  "Full-Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>

            {/* Heading */}
            <TextGenerateEffect
              className="my-4 xl:my-0 relative text-center text-[2.8rem] xl:text-left md:text-7xl  xl:text-8xl 2xl:text-9xl text-beige uppercase font-extralight font-display1 "
              words={"Jim Pamplona"}
            />
            {/* Subheading */}
            <div className="w-[80%] xl:w-[60%]">
            <TextGenerateEffect className="relative xl:text-left text-center text-sm font-extralight md:tracking-widest mb-4 md:text-xl lg:text-2xl text-beige pb-11" words="
              I&apos;m a first-generation student from Guam who has faced the unknown and is resiliently turning dreams to reality.">
            </TextGenerateEffect>
            </div>

            <a href="./Resume - 20240719.pdf" download="Resume - 20240719">
              {/* <MagicButton
                title="Check out my Resume"
                icon={<PiDownloadSimpleBold className="scale-[130%]" />}
                position="right"
                className="h-12 rounded-lg p-[1px] md:w-60 hover:-translate-y-1 transition duration-200"
                otherClasses="rounded-lg"
              /> */}

              <button className="relative inline-flex overflow-hidden px-4 py-2 border-beige border-[1px] rounded-[10px] font-light tracking-widest uppercase text-sm md:text-base lg:text-3xl text-beige hover:-translate-y-1 transition duration-200">Check out my resume
                </button>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Hero;

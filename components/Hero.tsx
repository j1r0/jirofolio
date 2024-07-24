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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0.00) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="h-dvh w-screen bg-black flex items-center justify-center absolute top-0 left-0">
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
      <div className= "w-screen flex items-center justify-center relative bg-[url('/noise.svg')]">
          {/* Gradient */}
          <div className="w-screen h-full absolute opacity-70 blur-2xl flex justify-end items-end -right-96 -bottom-96 scale-75">
            <img className="pointer-events-none z-0 opacity-80" src="/gradient.svg" />
          </div>
          {/* Content */}
          <div className="w-screen px-20 lg:pb-40 lg:px-30 flex flex-col lg:items-start lg:justify-end items-center justify-center h-screen ">

          {/* Typer */}
            <span className="uppercase tracking-widest md:text-lg lg:text-xl text-base text-center font-display2 text-transparent text-stroke-thin text-stroke-beige ">
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
              className="relative text-center text-6xl md:text-left lg:text-6xl xl:text-8xl 2xl:text-9xl text-beige uppercase font-extralight font-display1 "
              words={"Jim Pamplona"}
            />
            {/* Subheading */}
            <div className="lg:w-[60%]">
            <TextGenerateEffect className="relative lg:text-left text-center text-sm font-extralight md:tracking-widest mb-4 md:text-lg lg:text-2xl text-beige pb-11" words="
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

              <button className="relative inline-flex overflow-hiddenp px-4 py-2 border-beige border-[3px] rounded-[10px] font-normal tracking-widest uppercase">Check out my resume
                </button>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Hero;

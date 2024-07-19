"use client"
import { AuroraBackground } from "./ui/Aurora";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypeAnimation } from "react-type-animation";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      
      <div className="h-[50vw] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.007] bg-grid-black/[0.007] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >

      </motion.div>
    </AuroraBackground>
      </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <span className ="uppercase tracking-widest md:text-sm lg:text-base text-xs text-center text-white-100 max-w-80">
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
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words={"Hello, I am Jim Pamplona"}/>
          <p className="text-center text-sm md:tracking-wider mb-4 md:text-lg lg:text-2xl text-white-100">I&apos;m a first-generation student from Guam who has faced the unknown 
          and is resiliently turning dreams to reality.</p>

          <a href='#about'>
            <MagicButton title="Learn about me" icon ={<FaLocationArrow />} position="right" />
            </a>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Hero;

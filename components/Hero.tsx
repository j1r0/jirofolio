"use client"
import { AuroraBackground } from "./ui/Aurora";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypeAnimation } from "react-type-animation";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="h-[50vw] w-screen dark:bg-black-100 bg-white flex items-center justify-center absolute top-0 left-0">
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
      >

      </motion.div>
    </AuroraBackground>
      </div>
      </div>
      <div className="">
        <HeroHighlight>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center h-screen">
        <span className ="uppercase tracking-widest md:text-sm lg:text-base text-xs text-center text-white-100">
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
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words={"Hello, I'm Jim Pamplona"}/>
          <p className="text-center text-sm md:tracking-wider mb-4 md:text-lg lg:text-2xl text-white-100 pb-11">I&apos;m a first-generation student from Guam who has faced the unknown 
          and is resiliently turning dreams to reality.</p>

          <a href='#about' className="pt-11">
            <MagicButton title="Check out my Resume" spin={4} icon ={<FaLocationArrow />} position="right" className="h-12 rounded-lg p-[1px] md:w-60 md:mt-10" otherClasses="rounded-lg"/>
            </a>
          <br/>
        </div>
        </HeroHighlight>
      </div>
    </div>
  );
};

export default Hero;

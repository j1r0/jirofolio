"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);


  let direction = 0;

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
       direction = current! - scrollYProgress.getPrevious()!;

        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      setScrolled(scrollYProgress.get() > 0);
    }
  );



  return (
    <AnimatePresence mode="popLayout">
        <motion.div 
        initial={{
          opacity: 1,
          y: -100,
        boxShadow: "none",
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          boxShadow: scrolled ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none",
          top: scrolled ? 0 : 10,
          

        }}
        transition={{
          duration: 0.2,
        }}
        className=
          {`dark:bg-black/[0.8] bg-white/[0.8] tablet:flex hidden fixed inset-x-0 w-full z-[5000] py-8 items-center justify-center ${scrolled && " backdrop-blur-md dark:border-b border-black/[0.3]"}`}
    > 
    <nav className="fixed tablet:flex flex-row gap-10 items-center justify-end right-0 mx-9 pt-2 lowercase hidden">

        <ThemeSwitcher />
        {navItems.map((item) => (
            <a
                className="hover:opacity-70 transition duration-200"
                key={item.name}
                href={item.link}
            >
                {item.name}
            </a>
        ))}
        <a href="/JP_Resume.pdf" download="/JP_Resume.pdf">
        <button className='dark:bg-white bg-black-100 dark:text-black-100 text-white rounded-[.2rem] px-4 py-2 font-bold lowercase hover:opacity-80 transition duration-200'>Resume</button>
        </a>

    </nav>
    </motion.div>
    </AnimatePresence>
  )
}

export default Navbar;

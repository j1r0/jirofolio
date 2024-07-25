import React from 'react'
import { socialMedia } from '@/data'
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';

const Contacts = () => {
    return (
        <footer id="contact" className="h-full w-screen   relative flex flex-col items-center justify-center py-10 px-20">


          <div className="flex mt-16 flex-col justify-between items-center">
    
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a href={info.link} key={info.id}>
                <button
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm saturate-180 bg-transparent rounded-lg border dark:border-black-300 dark:text-black-300 text-sage border-sage"
                >
                    {info.icon}
                </button>
                </a>
              ))}
            </div>
            <p className="dark:text-beige text-black-300 relative pt-4 md:text-base text-sm md:font-normal font-extralight tracking-wider text-center">
              Copyright 2024 © Jim Pamplona
            </p>
          </div>
        </footer>
      );
}

export default Contacts
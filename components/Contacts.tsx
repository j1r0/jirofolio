import React from 'react'
import { BackgroundBeams } from './ui/Beams'
import { socialMedia } from '@/data'
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';

const Contacts = () => {
    return (
        <footer id="contact" className="h-full w-screen   relative flex flex-col items-center justify-center py-10 px-20">


          <div className="mx-10 flex mt-16 flex-col justify-between items-center">
    
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a href={info.link} key={info.id}>
                <button
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm saturate-180 bg-transparent rounded-lg border border-black-300"
                >
                    {info.icon}
                </button>
                </a>
              ))}
            </div>
            <p className="text-white-200 relative sm:pt-4 md:text-base text-sm md:font-normal font-extralight tracking-wider">
              Copyright 2024 © Jim Pamplona
            </p>
          </div>
        </footer>
      );
}

export default Contacts
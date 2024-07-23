import React from 'react'
import { BackgroundBeams } from './ui/Beams'
import { socialMedia } from '@/data'
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';

const Contacts = () => {
    return (
        <footer className="w-full pt-20 pb-10 bg-black" id="contact">
          {/* background grid */}
          <div className="w-full absolute left-0 sm:bottom-96 -bottom-72 min-h-96">
            <img
              src="/footer-grid.svg"
              alt="grid"
              className="w-full h-full opacity-50 "
            />
          </div>
    

          <div className="mx-10 flex mt-16 lg:flex-row flex-col justify-between items-center">
    
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a href={info.link} key={info.id}>
                <button
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                    {info.icon}
                </button>
                </a>
              ))}
            </div>
            <p className=" sm:pt-4 md:text-base text-sm md:font-normal font-extralight tracking-wider">
              Find magic in all the little things in life {":)"}
            </p>
          </div>
        </footer>
      );
}

export default Contacts
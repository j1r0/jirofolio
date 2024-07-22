import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3DCard'
import { projects } from '../data'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/HoverBorderGradient'
import { SlLink } from 'react-icons/sl'

const Projects = () => {
  return (
        <div className="h-full w-screen dark:bg-black bg-white bg-grid-small-white/[0.15] relative flex flex-col items-center justify-center py-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,transparent_0%,transparent_0%,transparent_0%,black)]"></div>
      <div className="relative pb-10">
        <h1 className='text-4xl font-bold text-center'>
          Check out my {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-400 to-stone-50 "> 
            Projects
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-4 flex-wrap justify-center mx-10">
        {projects.map((item) => (
        <CardContainer className="inter-var" key={item.id}>
      <CardBody className=" relative group/card dark:hover:shadow-2xl bg-black-300 bg-opacity-40 dark:hover:shadow-black-400/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full">
          {/* img */}
          <img
            src={item.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
          {/* Text */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white-100 mt-4"
        >
          {item.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 dark:text-white-200 font-light tracking-wider"
        >
          {item.des}
        </CardItem>
        {/* Icons */}
        <div className="flex justify-between items-center pt-4">
          <CardItem
            translateZ={20}
            target="__blank"
            className="rounded-xl text-xs font-normal dark:text-white"
          >
                          <div className="flex items-center justify-start">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border bg-black border-white/[.2] rounded-full background-blur-md lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center group-hover/card:shadow-xl"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
          </CardItem>
          <CardItem
            translateZ={20}
            className="rounded-xl text-white text-xs font-bold"
          >
                  <HoverBorderGradient
        as="button"
        className="bg-transparent text-black dark:text-white flex items-center space-x-2 group-hover/card:shadow-xl"
      >
        <span>GitHub</span>
      </HoverBorderGradient>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
        )) }

      </div>

    </div>
  )
}

export default Projects
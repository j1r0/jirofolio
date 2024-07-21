import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3DCard'
import { projects } from '../data'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/HoverBorderGradient'
import { SlLink } from 'react-icons/sl'

const Projects = () => {
  return (
    <div className='pt-20' id="projects">
      <div>
        <h1 className='text-4xl font-bold text-center'>
          Check out my {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-300 to-stone-500 "> 
            Projects
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-4 flex-wrap justify-center mx-10 py-10">
        {projects.map((item) => (
        <CardContainer className="inter-var " key={item.id}>
      <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-black-400/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 via-stone-400 to-stone-300 "
        >
          {item.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 dark:text-white-100 font-light tracking-wider"
        >
          {item.des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={item.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* Icons */}
        <div className="flex justify-between items-center">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
                          <div className="flex items-center justify-between mt-7 mb-3">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border bg-black border-white/[.2] rounded-full background-blur-md lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
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
            className=" mt-7 mb-3 rounded-xl text-white text-xs font-bold"
          >
                  <HoverBorderGradient
        as="button"
        className="bg-transparent text-black dark:text-white flex items-center space-x-2"
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
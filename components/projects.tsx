import React from 'react'
import { Card } from './ui/Card'
import { projectList } from '../data/index'

const projects = () => {
  return (
    <section className="flex flex-col gap-10 py-10" id="projects">
            <div className="flex desktop:flex-row-reverse flex-col desktop:gap-x-20 gap-y-3 desktop:gap-y-0 items-center justify-center desktop:justify-start tablet_lg:mx-28">
        <h2 className="text-4xl font-bold tracking-widest ">my projects.</h2>
        <div className="w-96 border-[0.5px] dark:border-[#f2eeea]/50 border-[#5a5a5a]/50"></div>
      </div>
      <div className="flex flex-col mx-10 tablet:mx-20 tablet_lg:mx-40 gap-10 desktop:gap-14 items-center justify-center desktop:justify-between ">
      {projectList.map((project,id) => (
        <div className={`w-full `} key={id}>
        <Card
          id={id}
          key={project.id}
          title={project.title}
          des={project.des}
          img={project.img}
          link={project.link}
          linktype={project.linktype}
          iconLists={project.iconLists}
          figma={project.figma}
        ></Card>
         </div>
      ))
    }
    </div>
    </section>
  )
}

export default projects
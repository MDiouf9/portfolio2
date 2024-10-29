"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import "swiper/css"
import { WorkSliderBtn } from '@/components/WorkSliderBtn'

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Projet",
    description: "Lorem ipsum description...",
    stack: [{ name: "HTML" }, { name: "CSS" }],
    image: "/assets/firstproject.png",
    voir: "https://mdiouf9.github.io/projet2-xarala/",
    github: "https://github.com/MDiouf9/projet2-xarala",
  },
  {
    num: "02",
    category: "frontend",
    title: "Projet",
    description: "Lorem ipsum description...",
    stack: [{ name: "HTML" }, { name: "CSS" }],
    image: "/assets/first-portfolio.png",
    voir: "https://mdiouf9.github.io/projet-examen/",
    github: "https://github.com/MDiouf9/projet-examen",
  },
  {
    num: "03",
    category: "frontend",
    title: "Projet",
    description: "Lorem ipsum description...",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "javascript" }],
    image: "/assets/secondproject.png",
    voir: "https://mdiouf9.github.io/projet-app-livre/",
    github: "https://github.com/MDiouf9/projet-app-livre",
  },
  {
    num: "04",
    category: "frontend",
    title: "Projet",
    description: "Lorem ipsum description...",
    stack: [{ name: "React js" }, { name: "Tailwind css" }],
    image: "/assets/firstReact.png",
    voir: "https://xaralaprojectt.vercel.app/",
    github: "https://github.com/MDiouf9/projet_react_xarala/issues",
  },
  {
    num: "05",
    category: "frontend",
    title: "Projet",
    description: "Lorem ipsum description...",
    stack: [{ name: "React js" }, { name: "Tailwind css" }, { name: "Nest js" }],
    image: "/assets/projetbudget.png",
    voir: "https://final-examen-frontend.vercel.app/",
    github: "https://github.com/MDiouf9/Final-examen-frontend",
  },
  {
    num: "0",
    category: "frontend",
    title: "Projet",
    description: "Lorem ipsum description...",
    stack: [{ name: "React js" }, { name: "Tailwind css" }, { name: "Nest js" }],
    image: "/assets/projetbudget.png",
    voir: "https://final-examen-frontend.vercel.app/",
    github: "https://github.com/MDiouf9/Final-examen-frontend",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const HandleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='min-w-[80vh] flex flex-col justify-center py-2 xl:px-0 '
      >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row xl:gap-[10px]'>
            {/* Texte */}
          <div className='h-full xl:w-[40%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-5 h-[50%]'>    
              <div className='text-5xl font-extrabold text-transparent text-outline '>
                {project.num}
              </div>
              <h2 className='text-[36px] font-bold text-white group-hover:text-accent transition-all duration-500 capitalize m-0'>
                {project.category}
              </h2>
              <p className='text-white/60 m-0'>
                {project.description}
              </p>
              <ul className='flex gap-1 m-0'>
                {project.stack.map((item, index) => (
                  <li className='text-xl text-accent' key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className='border border-white/60 my-1'></div>
              <div className='flex items-center gap-1'>
                {/* Lien vers le projet live */}
                <Link href={project.voir} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[40px] h-[40px] rounded-full bg-white/50 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-xl group-hover:text-accent' />
                        <TooltipContent>
                          <p>voir le project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Lien vers le repo GitHub */}
                <Link href={project.github} passHref>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[40px] h-[40px] rounded-full bg-white/50 flex justify-center items-center group'>
                        <BsGithub className='text-white text-2xl group-hover:text-accent' />
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link> 
                </div>
              </div>
            </div>
            {/* Slide Swiper */}
            <div className='w-full h-full xl:w-[60%] relative'>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className='xl:h-[500px] mb-8'
                onSlideChange={HandleSlideChange}
              >
                {projects.map((projet, index) => (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[320px] relative group flex justify-center items-center bg-pink-50/20'>
                      <div className='relative w-full h-full'>
                        <Image
                          src={projet.image}
                          alt={`Project ${projet.title}`}
                          fill
                          className='object-center '
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                
                {/* WorkSliderBtn centré avec les flèches entre les bords */}
                <WorkSliderBtn
                  containerStyles="flex gap-2 absolute p-2 left-0 right-0 top-[30%] z-20 w-full justify-between"
                  btnStyles=" bg-transparent-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]" 
                  iconStyles="text-4xl text-accent hover:text-white"
                />
              </Swiper> 
            
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Work

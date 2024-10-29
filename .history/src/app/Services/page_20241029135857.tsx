"use client"

import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowDownRight } from 'react-icons/bs'; 
import Link from 'next/link'; 

const services = [
  {
    num: "1",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adip officm cum magni odiouuntur? Assumenda, iusto.",
    href: "/web-development"
  },
  {
    num: "2",
    title: "Mobile Development",
    description: "Lorem ipsum dolor sit amet, consectetur adip officm cum magni odiouuntur? Assumenda, iusto.",
    href: "/mobile-development"
  },
  {
    num: "3",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adip officm cum magni odiouuntur? Assumenda, iusto.",
    href: "/ui-ux-design"
  },
  {
    num: "4",
    title: "SEO Optimization",
    description: "Lorem ipsum dolor sit amet, consectetur adip officm cum magni odiouuntur? Assumenda, iusto.",
    href: "/seo-optimization"
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}    
          animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2, ease: "easeIn" } }}
          className='grid grid-cols-1 md:grid-cols-3 gap-[60px]'
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className='w-full flex justify-between items-center'>

             
              <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>

              {/* Lien de navigation avec l'icône et taille ajustée */}
              <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-180'>
                <div className="flex items-center space-x-2">
                  <BsArrowDownRight className="text-2xl text-accent group-hover:text-white transition-colors duration-500"   /> {/* Ajuste la taille et la couleur */}
            
                </div >
              </Link>
            </div>
              <h2 className="text-[42px] font-bold leading-none text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.title}</h2>
              <p className="text-sm text-gray-500">{service.description}</p>
              <div className="border-b border-white/20 w-full mt-4"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

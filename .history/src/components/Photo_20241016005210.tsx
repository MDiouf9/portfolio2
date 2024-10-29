"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

export const Photo = () => {
  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
        className="relative"
      >
        {/* Conteneur de l'image */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
          className='w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] mix-blend-lighten relative'
        >
          {/* Image avec forme circulaire */}
          <Image 
            src="/assets/profile-pic.png" 
            priority 
            quality={100} 
            fill 
            alt='Profile Picture' 
            className='object-cover rounded-full'  // Forme circulaire
          />
        </motion.div>

        {/* Cercle animé responsive */}
        <motion.svg 
          className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px]" 
          fill="transparent" 
          viewBox="0 0 506 506" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="250"  // Rayon du cercle
            stroke="#00ff99" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 250 25", "16 25 92 72", "4 250 22 220"],
              rotate: [120, 360],
              transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

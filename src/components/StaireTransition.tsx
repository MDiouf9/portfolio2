"use client"; // Indique que ce fichier est un Client Component

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

// Animation de l'escalier
const StairAnimation = {
  initial: { scaleY: 0, opacity: 0 }, // Commence invisible et petit
  animate: { scaleY: 1, opacity: 1 }, // Devient visible et pleine taille
  exit: { scaleY: 0, opacity: 0 }, // Reste invisible et rétréci à la fin
};

interface StairTransitionProps {
  children: React.ReactNode;
}

const StaireTransition = ({ children }: StairTransitionProps) => {
  const pathname = usePathname(); // Utilisation du hook `usePathname`
  
  // Etat pour contrôler si l'animation est terminée
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {/* Animation de l'escalier qui se déroule entre les pages */}
      <motion.div
        key={pathname} // Anime la transition entre les pages
        initial="initial"
        animate="animate"
        exit="exit"
        variants={StairAnimation}
        transition={{
          duration: 2, // La transition dure 2 secondes
          ease: "easeInOut",
        }}
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 ${animationCompleted ? "hidden" : ""}`}
        onAnimationComplete={() => {
          setAnimationCompleted(true); // Marque la fin de l'animation
        }}
      >
        {/* Contenu réel de la page */}
        <div className="w-full h-full relative z-40">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StaireTransition;

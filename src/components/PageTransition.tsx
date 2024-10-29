"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}  // Démarre avec une opacité de 0 (invisible)
        animate={{ opacity: 1 }}  // Devient complètement visible (opacité à 1)
        exit={{ opacity: 0 }}  // Lors du changement de page, l'élément disparaît
        transition={{ duration: 0.5 }}  // Durée de la transition en secondes
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

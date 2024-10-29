"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps: number = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <AnimatePresence>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={StairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-blue relative"
        />
      ))}
    </AnimatePresence>
  );
};

export default Stairs;

import React, { useRef, useEffect } from "react";
import { experiences } from "../lib/data";
import { ExperienceCard } from "./ExperienceCard";
import { motion, useAnimation, useInView } from "framer-motion";

export const ExperienceList = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div
      className="grid p-0 grid-cols-1 h-max w-full gap-y-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        ref={ref}
        className="w-full space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
          >
            <ExperienceCard experience={exp} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
import { useRef, useEffect } from "react";
import { experiences } from "../lib/data";
import { ExperienceCard } from "./ExperienceCard";
import { motion, useAnimation, useInView } from "framer-motion";

export const ExperienceList = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="grid p-0 grid-cols-1 h-max w-full gap-y-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full space-y-8"
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </motion.div>
    </div>
  );
};

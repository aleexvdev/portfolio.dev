import { projects } from "../data/data"
import { ProjectCard } from "./ProjectCard"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const ProjectList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="grid p-0 grid-cols-1 h-full w-full gap-y-6"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={cardVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  )
}
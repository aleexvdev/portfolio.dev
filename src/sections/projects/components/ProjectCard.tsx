import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";
import type { Project } from "../types/types";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const { title, description, image, skills, repoLink, viewLink, iconUrl } =
    project;

  return (
    <motion.article
      className={`w-full h-max flex items-center justify-start rounded-3xl px-5 py-5 md:px-6 md:py-5 
        lg:px-12 lg:py-10 transition-colors duration-300 border 
        border-gray-600/20 bg-[#F1F5F9] dark:bg-[#181818] relative overflow-hidden`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-full w-full md:w-3/5 flex flex-col items-center justify-between">
        <div className="flex flex-col items-start justify-start">
          <div className="bg-white dark:bg-black opacity-80 dark:bg-opacity-20 rounded-2xl mb-2 flex items-center justify-center">
            <img src={iconUrl} alt={title} className="w-16 h-16 object-cover" />
          </div>
          <h2 className="w-full text-3xl md:text-3xl lg:text-4xl font-semibold text-pretty text-black dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-base md:text-base lg:text-lg text-black/75 dark:text-white/75 mb-4 text-pretty leading-relaxed font-medium">
            {description}
          </p>
          <div className="w-full h-max">
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, color, icon }, index) => (
                <motion.span
                  key={index}
                  className={`px-3 py-2 rounded-xl font-medium bg-opacity-50 flex items-center justify-center bg-[#bfc1c5] dark:bg-black cursor-default`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={icon} alt={name} className="w-5 h-5" />
                  <span className={`ml-2 text-sm md:text-base lg:text-lg ${color}`}>
                    {name}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between md:justify-start mt-5 md:mt-10 gap-x-2 md:gap-x-8">
          <a
            href={repoLink}
            target="_blank"
            aria-label="Repositorio de GitHub"
            className="group w-max flex items-center justify-center space-x-1.5 md:space-x-2 rounded-lg bg-transparent px-0 py-3 text-black dark:text-white transition-all duration-300 hover:text-[#2563EB] cursor-pointer z-10"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm lg:text-base font-semibold">Ver Repositorio</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={viewLink}
            target="_blank"
            aria-label="Visitar sitio web"
            className="group w-max flex items-center justify-center space-x-1.5 md:space-x-2 rounded-lg bg-transparent px-0 py-3 text-black dark:text-white transition-all duration-300 hover:text-[#2563EB] cursor-pointer z-10"
          >
            <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm lg:text-base font-semibold">Visitar Sitio</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className={`h-full w-max absolute hidden md:block bg-transparent px-2 ${image.urlSmall.style} transition-all duration-300`}>
        <img src={image.urlSmall.url} alt={title} className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? "scale-105" : "scale-100"}`} />
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 to-green-500 absolute bottom-0 left-0 right-0"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

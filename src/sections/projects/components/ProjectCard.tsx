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
      className={`w-full h-max flex items-center justify-start rounded-3xl px-12 py-10 transition-all duration-300 border border-gray-600/20 bg-[#181818] relative overflow-hidden`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-full w-3/5 flex flex-col items-center justify-between">
        <div className="flex flex-col items-start justify-start">
          <div className="bg-black rounded-2xl p-2 mb-2 flex items-center justify-center">
            <img src={iconUrl} alt={title} className="w-14 h-14 object-cover" />
          </div>
          <h2 className="w-full text-xl md:text-2xl lg:text-3xl font-semibold text-pretty text-white mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-white/55 mb-4 text-pretty">
            {description}
          </p>
          <div className="w-full">
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, color, icon }, index) => (
                <motion.span
                  key={index}
                  className={`px-3 py-2 rounded-xl text-sm font-medium bg-opacity-50 flex items-center justify-center bg-black cursor-default`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={icon} alt={name} className="w-5 h-5" />
                  <span className={`ml-2 text-sm md:text-base  ${color}`}>
                    {name}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start mt-10 gap-x-8">
          <a
            href={repoLink}
            target="_blank"
            aria-label="Repositorio de GitHub"
            className="group w-max flex items-center justify-center space-x-2 rounded-lg bg-transparent px-4 py-3 text-white transition-all duration-300 hover:text-green-500 cursor-pointer z-10"
          >
            <Github className="w-6 h-6" />
            <span className="text-sm md:text-base font-semibold">Ver Repositorio</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={viewLink}
            target="_blank"
            aria-label="Visitar sitio web"
            className="group w-max flex items-center justify-center space-x-2 rounded-lg bg-transparent px-4 py-3 text-white transition-all duration-300 hover:text-green-500 cursor-pointer z-10"
          >
            <ExternalLink className="w-6 h-6" />
            <span className="text-sm md:text-base font-semibold">Visitar Sitio</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className={`h-full w-max absolute bg-transparent px-2 bottom-0 right-0 ${image.urlLarge.style} transition-all duration-300`}>
        <img src={image.urlLarge.url} alt={title} className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? "scale-105" : "scale-100"}`} />
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

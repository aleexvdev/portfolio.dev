import { useState } from "react";
import { motion } from "framer-motion";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import type { Project } from "../types/types";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { projectName, description, image, liveDemo, github, tags } = project;

  return (
    <article className="w-full flex items-center justify-center bg-[#09090b]">
      <motion.div
        className="w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          background:
            "linear-gradient(90deg, rgba(40, 40, 45, 0.5) 0%, rgb(27,27,31,0.7) 100%)",
        }}
      >
        <div className="md:w-2/5 relative">
          <img
            className="w-full h-64 md:h-full object-cover object-center"
            src="public/images/projects/project_1.png"
            alt="Project preview"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href={liveDemo}
              className="text-white text-xl font-bold hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="md:w-3/5 p-6 flex flex-col justify-between">
          <div className="w-full h-full flex flex-col items-start justify-between">
            <header className="w-full flex items-center justify-between mb-2">
              <h2 className="text-2xl md:text-3xl font-bold flex flex-col items-start text-white mb-2">
                {projectName}
              </h2>
              <div className="flex items-center gap-x-2">
                <a href={github} target="_blank" className="flex items-center justify-center px-2 py-2 bg-transparent text-white rounded-lg overflow-hidden transition duration-300 ease-out hover:bg-gray-600">
                  <Github className="w-6 h-6" />
                </a>
                <a href={liveDemo} target="_blank" className="flex items-center justify-center px-2 py-2 bg-transparent text-white rounded-lg overflow-hidden transition duration-300 ease-out hover:bg-gray-600">
                  <SquareArrowOutUpRight className="w-6 h-6" />
                </a>
              </div>
            </header>
            <p className="mb-4 text-white/75 font-light text-sm md:text-base text-pretty">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map(({ id, name, icon }) => (
                <span
                  key={id}
                  className="relative flex items-center justify-center px-4 py-2 text-base font-medium tracking-wide rounded-2xl bg-[#0b0b0b] text-white/90 select-none border border-white/10 transition-colors duration-300 ease-out group"
                >
                  <img
                    src={icon}
                    alt={name}
                    className="w-5 h-5"
                  />
                  <span className="ml-2 text-nowrap text-sm font-medium text-white/90">
                    {name}
                  </span>
                  <div className="absolute inset-0 flex justify-center overflow-hidden rounded-full">
                    <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 opacity-20 transform translate-x-[-150%] skew-x-12 transition-transform duration-700 group-hover:translate-x-[150%] group-hover:opacity-50"></div>
                  </div>
                </span>
              ))}
            </div>
          </div>
          {/* <div className="flex justify-between items-center">
            <motion.a
              href="#"
              className="flex items-end justify-center text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out space-x-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon className="w-6 h-6 mb-1" />
              <span className="text-base text-pretty">View Code</span>
            </motion.a>
            <motion.a
              href="#"
              className="flex items-end justify-center text-green-400 hover:text-green-300 transition duration-150 ease-in-out space-x-1"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.95 }}
            >
              <SquareArrowOutUpRight className="w-6 h-6 mb-1" />
              <span className="text-base text-pretty">Live Demo</span>
            </motion.a>
          </div> */}
        </div>
        <motion.div
          className="h-1 bg-gradient-to-r from-blue-500 to-green-500 absolute bottom-0 left-0 right-0"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </article>
  );
};

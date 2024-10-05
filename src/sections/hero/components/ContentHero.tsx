import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@/components/react/Tooltip";
import { Github, FileText, Linkedin, Mail } from "lucide-react";
import { AvailableToWork } from "./AvailableToWork";

interface Props {
  children: React.ReactNode;
}

export const ContentHero = ({ children }: Props) => {
  return (
    <motion.div
      className="w-full h-full flex flex-col space-y-8 items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
      <motion.div
        className="w-full h-full flex flex-col items-center md:items-start justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-0 mt-2 md:flex-row pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div 
          className="w-full flex items-center justify-center md:justify-start"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <AvailableToWork />
        </motion.div>
        <div className="block w-[60%] h-px rounded-xl md:hidden bg-gray-500"></div>
        <motion.div
          className="w-full flex items-center justify-center md:justify-end gap-x-2 relative"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="w-max flex items-center gap-x-2 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Tooltip content="LinkedIn" position="bottom">
              <motion.a
                href="https://www.linkedin.com/in/alexvdev/"
                target="_blank"
                aria-label="LinkedIn"
                className="flex items-center justify-center px-3 py-2 bg-transparent text-black/90 dark:text-white/90 rounded-lg overflow-hidden transition duration-300 ease-out hover:bg-[#d2d2d2] hover:dark:bg-[#292929]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
            </Tooltip>
            <Tooltip content="GitHub" position="bottom">
              <motion.a
                href="https://github.com/aleexvdev"
                aria-label="GitHub"
                target="_blank"
                className="flex items-center justify-center px-3 py-2 bg-transparent text-black/90 dark:text-white/90 rounded-lg overflow-hidden transition duration-300 ease-out hover:bg-[#d2d2d2] hover:dark:bg-[#292929]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-7 h-7" />
              </motion.a>
            </Tooltip>
            <Tooltip content="Curriculum" position="bottom">
              <motion.a
                href="https://drive.google.com/file/d/1S2TCrTiIJOrA5x78eespQ_pGoEiBTIWH/view?usp=drive_link"
                aria-label="Curriculum"
                target="_blank"
                className="flex items-center justify-center px-3 py-2 bg-transparent text-black/90 dark:text-white/90 rounded-lg overflow-hidden transition duration-300 ease-out hover:bg-[#d2d2d2] hover:dark:bg-[#292929]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-7 h-7" />
              </motion.a>
            </Tooltip>
            <Tooltip content="Email" position="bottom">
              <motion.a
                href="mailto:alexvalverde.dev@example.com"
                aria-label="Email"
                target="_blank"
                className="flex items-center justify-center px-3 py-2 bg-transparent text-black/90 dark:text-white/90 rounded-lg overflow-hidden transition duration-300 ease-out hover:bg-[#d2d2d2] hover:dark:bg-[#292929]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-7 h-7" />
              </motion.a>
            </Tooltip>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

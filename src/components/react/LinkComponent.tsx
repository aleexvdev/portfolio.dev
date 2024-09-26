import React, { useState } from "react";
import { motion } from "framer-motion";

interface LinkComponentProps {
  children: React.ReactNode;
  href: string;
  rel?: string;
}

export const LinkComponent = ({ children, href, rel = "noopener noreferrer" }: LinkComponentProps) => {
  
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.a
      href={href}
      rel={rel}
      className="relative w-full md:w-max flex items-center justify-center text-black dark:text-white/75 hover:dark:text-white bg-white/50 hover:bg-white dark:bg-black px-6 py-3 rounded-xl overflow-hidden transition-colors duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, #3b82f6, transparent)",
        }}
      />
      <motion.div
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center space-x-3"
      >
        {children}
      </motion.div>
    </motion.a>
  );
}

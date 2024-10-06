import React, { useState } from "react";
import { motion } from "framer-motion";

interface ButtonComponentProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonComponent = ({ children, type, disabled, onClick }: ButtonComponentProps) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.button
      className={`relative w-full md:w-max flex items-center justify-center text-black dark:text-white/75 ${disabled ? "" : "hover:dark:text-white"} bg-white/50 hover:bg-white dark:bg-black px-6 py-3 rounded-xl overflow-hidden transition-colors duration-300`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={{ 
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered && !disabled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, #3b82f6, transparent)",
        }}
      />
      <motion.div
        transition={{ duration: 0.3 }}
        className={`flex items-center justify-center space-x-3 ${disabled ? "opacity-50" : ""}`}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

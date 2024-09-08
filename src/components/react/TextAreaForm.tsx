import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  disabled?: boolean;
}

export const TextAreaForm = ({ label, placeholder, name, id, disabled = false }: Props) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setGradientPosition({ x, y });
  };

  return (
    <>
      <label
        className="ml-1 text-sm md:text-base lg:text-lg font-medium text-black dark:text-white/75 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        {label}
      </label>
      <motion.div
        className={`w-full rounded-lg p-0.5 transition-all duration-300 ease-out border relative bg-[#0C0A09]`}
        style={{
          borderColor: isHovered ? "transparent" : "rgba(107, 114, 128, 0.2)",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(${isHovered ? "100px" : "0px"} circle at ${gradientPosition.x}px ${gradientPosition.y}px, #22C55E, transparent 80%)`,
            zIndex: 0,
          }}
        ></div>
        <textarea
          className="relative bg-[#0C0A09] min-h-28 z-10 flex h-12 text-sm md:text-base w-full border-none outline-none resize-none text-white/75 placeholder:text-white/50 rounded-lg px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
        />
      </motion.div>
    </>
  );
}

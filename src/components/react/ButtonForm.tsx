import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonFormProps {
  type?: "button" | "submit" | "reset";
  text: string;
  icon?: ReactNode; 
  className?: string;
  background?: string;
  disabled?: boolean;
}

export const ButtonForm = ({
  type = "button",
  text,
  icon,
  className = "",
  background = "bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800",
  disabled = false,
}: ButtonFormProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setGradientPosition({ x, y });
  };

  return (
    <motion.button
      type={type}
      className={`relative w-full h-full rounded-md ${background} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300 }}
      disabled={disabled}
    >
      <div className="flex items-center justify-center space-x-2">
        {icon && <span>{icon}</span>}
        <span className="text-white font-medium text-sm md:text-base lg:text-lg">{text}</span>
      </div>

      {isHovered && !disabled && (
        <>
          <motion.span
            className="absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-green-500 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.span
            className="absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-green-600 to-transparent blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}
    </motion.button>
  );
};

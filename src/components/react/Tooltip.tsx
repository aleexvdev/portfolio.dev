import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  animation?: boolean;
}

export const Tooltip = ({
  children,
  content,
  position = "top",
  animation = false,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionStyles: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const tipArrow: Record<string, string> = {
    top: "bottom-[-5px] left-1/2 -translate-x-1/2 rotate-45",
    bottom: "top-[-5px] left-1/2 -translate-x-1/2 rotate-45",
    left: "right-[-5px] top-1/2 -translate-y-1/2 rotate-45",
    right: "left-[-5px] top-1/2 -translate-y-1/2 rotate-45",
  };

  const getMotionY = () => {
    if (position === "top") return 6;
    if (position === "bottom") return -6;
    return 0;
  };

  return (
    <div className="group relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        tabIndex={0}
        aria-describedby="tooltip"
      >
        {children}
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            id="tooltip"
            role="tooltip"
            className={`text-foreground bg-accent absolute z-50 rounded-xl px-3 py-2 text-sm font-medium shadow-lg backdrop-blur-sm ${positionStyles[position]} pointer-events-none`}
            initial={{ opacity: 0, y: getMotionY(), scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: getMotionY(), scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {content}
            <span
              className={`bg-accent absolute h-2.5 w-2.5 ${tipArrow[position]}`}
            />
            {animation && (
              <motion.div
                className="absolute bottom-[-4px] left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-transparent opacity-70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

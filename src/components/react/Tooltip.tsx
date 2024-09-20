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
  animation = false
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full transform -translate-x-1/2 mb-2",
    bottom: "top-full transform -translate-x-1/2 mt-2",
    left: "right-full transform -translate-y-1/2 mr-2",
    right: "left-full transform -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      <AnimatePresence>
        {visible && (
          <>
            <motion.div
              className={`absolute w-max z-20 px-3 py-2 bg-[#d2d2d2] dark:bg-[#292929] text-black dark:text-white text-sm font-semibold tracking-wide rounded-lg shadow-xl backdrop-blur-sm ${positionClasses[position]}`}
              initial={{
                opacity: 0,
                y: position === "top" ? -5 : 5,
                scale: 0.95,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: position === "top" ? -5 : 5, scale: 0.95 }}
              transition={{
                duration: 0.25,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {content}
              <span
                className={`absolute h-2 w-2 dark:bg-[#292929] bg-[#d2d2d2] transform rotate-45 ${
                  position === "top"
                    ? "bottom-[-4px] left-1/2 transform -translate-x-1/2"
                    : position === "bottom"
                      ? "top-[-4px] left-1/2 transform -translate-x-1/2"
                      : position === "left"
                        ? "right-[-4px] top-1/2 transform -translate-y-1/2"
                        : "left-[-4px] top-1/2 transform -translate-y-1/2"
                }`}
              />
              {
                animation && (
                  <motion.div
                    className="h-px absolute bottom-0 right-0 left-1/2 transform -translate-x-1/2"
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: "radial-gradient(circle, rgba(0,0,255,0.8), rgba(0,255,0,0.8) 70%, rgba(0,255,0,0) 100%)",
                    }}
                  />
                )
              }
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

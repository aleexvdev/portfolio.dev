import { useEffect, useState } from "react";
import { InfiniteScrollHorizontal } from "./InfiniteScrollHorizontal";
import { images } from "../data/images";
import { motion, useAnimation } from "framer-motion";

export const SkillsCard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);

  return (
    <article className="relative overflow-hidden flex flex-col items-center justify-center col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 rounded-3xl border border-gray-600/20 bg-[#F1F5F9] dark:bg-[#181818] transition-all duration-300 hover:shadow-xl">
      <motion.div
        className="p-6 md:p-6 lg:p-8 w-full h-full flex flex-col items-center justify-center"
        whileHover={!isTouchDevice ? "active" : {}}
        onHoverStart={() => !isTouchDevice && setIsActive(true)}
        onHoverEnd={() => !isTouchDevice && setIsActive(false)}
      >
        <header className="w-full h-max flex items-start mb-6">
          <h2
            className={`text-3xl md:text-3xl lg:text-4xl font-semibold text-pretty ${isActive ? "text-[#2563EB]" : "text-black dark:text-white"}`}
          >
            Habilidades
          </h2>
        </header>
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-0 lg:gap-y-6 z-50">
          <InfiniteScrollHorizontal images={images} />
        </div>
      </motion.div>
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 to-green-500 absolute bottom-0 left-0 right-0"
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </article>
  );
};

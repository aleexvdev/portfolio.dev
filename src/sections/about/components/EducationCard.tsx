import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const EducationCard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);

  return (
    <article className="relative overflow-hidden flex flex-col items-center justify-stretch col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-1 rounded-3xl border border-gray-600/20 bg-[#181818] transition-all duration-300 hover:shadow-xl">
      <motion.div
        className="p-6 md:p-6 lg:p-8 w-full h-full"
        whileHover={!isTouchDevice ? "active" : {}}
        onHoverStart={() => !isTouchDevice && setIsActive(true)}
        onHoverEnd={() => !isTouchDevice && setIsActive(false)}
      >
        <header className="w-full h-max flex items-start mb-6">
          <h2
            className={`text-3xl md:text-3xl lg:text-4xl font-semibold text-pretty ${isActive ? "text-[#22C55E]" : "text-white"}`}
          >
            Educación
          </h2>
        </header>
        <div className="w-full">
          <h3 className={`text-xl md:text-2xl text-wrap font-semibold ${isActive ? "text-[#22C55E]" : "text-white"}`}>
            Bachiller en Ingeniería Informática
          </h3>
          <div className="w-full mt-2 mb-3 flex items-start justify-start">
            <span className={`text-nowrap font-normal text-base md:text-base lg:text-lg ${isActive ? "text-stone-400" : "text-[#6E6E6F]"}`}>
              Lima, Perú
            </span>
            <span className={`w-px h-4 md:h-5 bg-[#6E6E6F] mx-2 my-1 ${isActive ? "text-stone-400" : "text-[#6E6E6F]"}`}></span>
            <span className={`text-nowrap font-normal text-base md:text-base lg:text-lg ${isActive ? "text-stone-400" : "text-[#6E6E6F]"}`}>
              2016 - 2021
            </span>
          </div>
          <p className={`text-base md:text-base lg:text-lg text-pretty leading-relaxed font-medium ${isActive ? "text-white/90" : "text-white/75"}`}>
            Graduado por la Universidad Nacional José Faustino Sánchez Carrión
            en Ingeniería Informática, donde desarrollé una base sólida en áreas
            clave como la gestión de tecnologías de la información, desarrollo
            de software, y la seguridad informática. Mi formación me preparó
            para alinear estrategias empresariales con soluciones tecnológicas
            avanzadas, garantizando la eficiencia y seguridad en los sistemas de
            información.
          </p>
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

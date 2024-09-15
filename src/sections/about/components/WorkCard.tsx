import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const WorkCard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);

  return (
    <article className="relative overflow-hidden flex flex-col items-start justify-start col-span-1 row-span-2 md:col-span-2 md:row-span-3 lg:col-span-3 lg:row-span-3 rounded-3xl border border-gray-600/20 bg-[#181818] transition-all duration-300">
      <motion.div
        className="p-7 lg:p-8 w-full h-full"
        whileHover={!isTouchDevice ? "active" : {}}
        onHoverStart={() => !isTouchDevice && setIsActive(true)}
        onHoverEnd={() => !isTouchDevice && setIsActive(false)}
      >
        <header className="w-full h-max flex items-start mb-6">
          <h2
            className={`text-xl md:text-3xl lg:text-4xl font-semibold text-pretty ${isActive ? "text-[#22C55E]" : "text-white"}`}
          >
            En el trabajo
          </h2>
        </header>
        <div className="w-full h-max flex flex-col items-start justify-start mb-24 md:mb-48 lg:mb-0">
          <p
            className={`text-sm md:text-base lg:text-lg text-pretty leading-relaxed font-medium mb-5 ${isActive ? "text-white/90" : "text-white/75"}`}
          >
            Con casi 3 años de experiencia en desarrollo web, me especializo en
            crear aplicaciones escalables y adaptadas a las necesidades del
            cliente. Mi enfoque combina un entendimiento profundo de los
            requisitos con la capacidad de trabajar eficazmente en equipos
            multidisciplinarios o de manera independiente. Soy adaptable y
            proactivo, siempre buscando mejorar procesos y contribuir al éxito
            de cada proyecto.
          </p>
          <p
            className={`text-sm md:text-base lg:text-lg text-pretty leading-relaxed font-medium ${isActive ? "text-white/90" : "text-white/75"}`}
          >
            Estoy continuamente explorando nuevas tecnologías y metodologías
            para mantenerme actualizado con las mejores prácticas en el campo,
            lo que me permite contribuir de manera significativa a los proyectos
            en los que trabajo.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden w-[95%] md:w-[90%] lg:w-4/5 mx-auto h-auto shadow-2xl shadow-black/20 opacity-80 rounded-t-lg transition-transform duration-500 scale-105 hover:scale-110"
          style={{
            maskImage: "linear-gradient(black 60%, transparent)",
          }}
        >
          <img
            src="./images/method_work.png"
            alt="Mi trabajo"
            className="w-full h-full object-cover rounded-xl filter contrast-125 brightness-90 saturate-150 transition-all duration-500 hover:contrast-150 hover:brightness-100"
            loading="lazy"
            decoding="async"
          />
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

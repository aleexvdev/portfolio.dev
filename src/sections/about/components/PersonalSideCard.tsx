import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const PersonalSideCard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);

  const ballVariants = {
    active: {
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: { duration: 1, repeat: Infinity },
    },
    inactive: { y: 0, rotate: 0 },
  };  

  const bounceVariants = {
    active: { y: [0, -20, 0], transition: { duration: 0.8, repeat: Infinity } },
    inactive: { y: 0 },
  };

  const joystickVariants = {
    active: { rotate: [0, 10, -10, 0], transition: { duration: 1, repeat: Infinity } },
    inactive: { rotate: 0 },
  };

  const dogVariants = {
    active: { rotate: [0, 5, -5, 0], y: [0, -10, 0], transition: { duration: 0.6, repeat: Infinity } },
    inactive: { rotate: 0, y: 0 },
  };

  return (
    <article className="relative overflow-hidden flex flex-col items-center justify-start col-span-1 row-span-2 lg:col-span-2 lg:row-span-3 rounded-3xl border border-gray-600/20 bg-[#F1F5F9] dark:bg-[#181818] transition-all duration-300 hover:shadow-xl">
      <motion.div
        className="p-6 md:p-6 lg:p-8 w-full h-full"
        whileHover={!isTouchDevice ? "active" : {}}
        onHoverStart={() => !isTouchDevice && setIsActive(true)}
        onHoverEnd={() => !isTouchDevice && setIsActive(false)}
      >
        <header className="w-full h-max flex items-start mb-6">
          <h2
            className={`text-3xl md:text-3xl lg:text-4xl font-semibold text-pretty ${isActive ? "text-[#2563EB]" : "text-black dark:text-white"}`}
          >
            Mi lado personal
          </h2>
        </header>
        <div className="w-full h-max flex-col items-start justify-start mb-14">
          <p
            className={`text-base md:text-base lg:text-lg text-pretty leading-relaxed font-medium ${isActive ? "text-black/90 dark:text-white/90" : "text-black/75 dark:text-white/75"} mb-5`}
          >
            Me considero una persona resiliente, responsable y optimista. No
            importa cuán complejo sea el desafío que enfrente, siempre encuentro
            una manera de superarlo, manteniendo una perspectiva positiva y una
            fuerte independencia en mis decisiones y acciones. Además de ser
            resiliente, me considero una persona comprometida y enfocada en mis
            metas.
          </p>
          <p
            className={`text-base md:text-base lg:text-lg text-pretty leading-relaxed font-medium ${isActive ? "text-black/90 dark:text-white/90" : "text-black/75 dark:text-white/75"}`}
          >
            Siempre busco mejorar y aprender de cada experiencia, lo que me
            permite crecer tanto personal como profesionalmente. Estoy
            convencido de que cada reto es una oportunidad para evolucionar y
            que con determinación y una actitud positiva, todo es posible.
          </p>
        </div>
        <div className="w-full h-max flex justify-between items-center px-4 lg:px-10">
          <motion.img
            src="./images/soccer.png"
            alt="Soccer"
            loading="lazy"
            className="w-14 h-14 lg:w-20 lg:h-20 object-cover"
            variants={ballVariants}
            animate={"active"}
          />
          <motion.img
            src="./images/dog.png"
            alt="Perrito"
            loading="lazy"
            className="w-14 h-14 lg:w-20 lg:h-20 object-contain"
            variants={dogVariants}
            animate={"active"}
          />
          <motion.img
            src="/images/pasta.png" 
            alt="Pasta"
            loading="lazy"
            className="w-14 h-14 lg:w-20 lg:h-20 object-contain"
            variants={bounceVariants}
            animate={"active"}
          />
          <motion.img
            src="./images/joystick.png"
            alt="Joystick"
            loading="lazy"
            className="w-14 h-14 lg:w-20 lg:h-20 object-contain"
            variants={joystickVariants}
            animate={"active"}
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

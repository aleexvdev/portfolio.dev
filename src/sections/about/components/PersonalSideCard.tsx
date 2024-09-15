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
    <article className="relative overflow-hidden flex flex-col items-center justify-start col-span-1 row-span-2 lg:col-span-2 lg:row-span-3 rounded-3xl border border-gray-600/20 bg-[#181818] transition-all duration-300 hover:shadow-xl">
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
            Mi lado personal
          </h2>
        </header>
        <div className="w-full h-max flex-col items-start justify-start mb-14">
          <p
            className={`text-sm md:text-base lg:text-lg text-pretty leading-relaxed font-medium ${isActive ? "text-white/90" : "text-white/75"} mb-5`}
          >
            Me considero una persona resiliente, responsable y optimista. No
            importa cuán complejo sea el desafío que enfrente, siempre encuentro
            una manera de superarlo, manteniendo una perspectiva positiva y una
            fuerte independencia en mis decisiones y acciones. Además de ser
            resiliente, me considero una persona comprometida y enfocada en mis
            metas.
          </p>
          <p
            className={`text-sm md:text-base lg:text-lg text-pretty leading-relaxed font-medium ${isActive ? "text-white/90" : "text-white/75"}`}
          >
            Siempre busco mejorar y aprender de cada experiencia, lo que me
            permite crecer tanto personal como profesionalmente. Estoy
            convencido de que cada reto es una oportunidad para evolucionar y
            que con determinación y una actitud positiva, todo es posible.
          </p>
        </div>
        <div className="w-full h-max flex justify-between items-center px-10">
          <motion.img
            src="./images/soccer.png"
            alt="Soccer"
            className="w-20 h-20 object-cover"
            variants={ballVariants}
            animate={isActive ? "active" : "active"}
          />
          <motion.img
            src="./images/dog.png"
            alt="Perrito"
            className="w-20 h-20 object-contain"
            variants={dogVariants}
            animate={isActive ? "active" : "active"}
          />
          <motion.img
            src="/images/pasta.png" 
            alt="Pasta"
            className="w-20 h-20 object-contain"
            variants={bounceVariants}
            animate={isActive ? "active" : "active"}
          />
          <motion.img
            src="./images/joystick.png"
            alt="Joystick"
            className="w-20 h-20 object-contain"
            variants={joystickVariants}
            animate={isActive ? "active" : "active"}
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

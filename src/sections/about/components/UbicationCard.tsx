import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useCurrentDate, useCurrentTime, useTimeDifference, useUserTimeZone } from "@/hooks";

export const UbicationCard = () => {
  const currentDate = useCurrentDate();
  const { hours, minutes } = useCurrentTime();
  const timeDifference = useTimeDifference();
  const userTimeZone = useUserTimeZone();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);

  return (
    <article className="relative overflow-hidden w-full h-full flex flex-col items-center justify-center col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 rounded-3xl border border-gray-600/20 bg-[#181818] transition-all duration-300 hover:shadow-xl">
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
            Mi ubicación
          </h2>
        </header>
        <div className="w-full h-max">
          <div className="w-full h-full flex flex-col items-center justify-center md:items-center md:flex-row lg:flex-col md:justify-center lg:justify-start">
            <div className="w-full flex flex-col items-center justify-center gap-y-2 lg:pt-6">
              <p className="text-white text-3xl md:text-4xl font-bold">
                Sede en
                <span className="bg-gradient-to-r from-red-600 via-white to-red-600 bg-clip-text text-transparent ml-2">
                  Lima
                </span>
              </p>
              <div className="flex items-center gap-x-2">
                <img
                  src="./images/bandera.png"
                  alt="Bandera de Perú"
                  className="w-6 h-6 object-cover"
                />
                <p className="text-white/90 text-xl md:text-2xl">Perú</p>
              </div>
              <p
                className={`text-lg leading-relaxed ${isActive ? "text-white/90" : "text-white/75"}  text-center text-pretty`}
              >
                {timeDifference}
              </p>
            </div>
            <div className="w-4/5 h-px bg-[#6E6E6F] my-4 md:w-px md:h-32 md:my-0 md:mx-4 lg:mx-0 lg:my-6 lg:h-px lg:w-4/5"></div>
            <div className="w-full flex flex-col items-center justify-end lg:justify-center">
              <div className="w-full h-max flex items-end justify-center gap-x-2">
                <span className="text-[#22C55E] text-center text-nowrap font-bold text-4xl md:text-5xl w-max">
                  {hours === 0 ? "00" : hours}:{minutes < 10 ? `0${minutes}` : minutes}
                </span>
                <span className={`text-base md:text-base lg:text-lg leading-relaxed ${isActive ? "text-white/90" : "text-white/75"} text-center text-pretty mb-0.5 md:mb-0.5 lg:mb-0.5`}>
                  UTC-5
                </span>
              </div>
              <p
                className={`text-base md:text-base lg:text-lg leading-relaxed ${isActive ? "text-white/90" : "text-white/75"} text-center text-pretty mt-2`}
              >
                {currentDate}
              </p>
            </div>
          </div>
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

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import type { Experience } from "../types/types";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronDown,
  Sparkles,
  Target,
} from "lucide-react";
import { Badge } from "@/components/react/Badge";

interface Props {
  experience: Experience;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const ExperienceCard = ({ experience }: Props) => {
  const { id, company, role, period, description, achievements, skills } =
    experience;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);

  const handleInteraction = () => {
    if (isTouchDevice) {
      setIsActive(!isActive);
    }
    setIsExpanded(!isExpanded);
  };

  const cardVariants = {
    inactive: {
      background: "transparent",
      transition: { duration: 0.3 },
    },
    active: {
      background:
        "linear-gradient(90deg, rgba(40, 40, 45, 0.5) 0%, rgba(27, 27, 31, 0.7) 100%)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.article
      key={id}
      variants={itemVariants}
      className="relative w-full rounded-3xl overflow-hidden border border-gray-600/20 bg-[#181818] transition-all duration-300 hover:shadow-xl"
      whileHover={
        !isTouchDevice
          ? {
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }
          : {}
      }
    >
      <motion.div
        className="px-6 py-5 md:px-12 md:py-10 cursor-pointer"
        onClick={handleInteraction}
        variants={cardVariants}
        initial="inactive"
        animate={controls}
        whileHover={!isTouchDevice ? "active" : {}}
        onHoverStart={() => !isTouchDevice && setIsActive(true)}
        onHoverEnd={() => !isTouchDevice && setIsActive(false)}
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            <div className="flex items-center mb-1 transition-colors duration-300">
              <Building2
                className={`mr-2 w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 ${isActive ? "text-[#22C55E]" : "text-white"}`}
              />
              <h2
                className={`text-3xl md:text-3xl lg:text-4xl font-semibold text-pretty ${isActive ? "text-[#22C55E]" : "text-white"}`}
              >
                {company}
              </h2>
            </div>
            <p
              className={`text-lg md:text-lg lg:text-xl ${isActive ? "text-stone-400" : "text-[#6E6E6F]"}`}
            >
              {role}
            </p>
          </div>
          <div
            className={`flex items-center mt-4 md:mt-0 ${isActive ? "text-[#22C55E]" : "text-white/75"}`}
          >
            <CalendarDays className="mr-2" size={16} />
            <span className="text-base md:text-base lg:text-lg">{period}</span>
          </div>
        </div>
        <p
          className={`text-base md:text-base lg:text-lg leading-relaxed ${isActive ? "text-white/90" : "text-white/75"} mb-4 text-pretty`}
        >
          {description}
        </p>
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="mt-4 space-y-4">
            <div className="mb-6">
              <h4
                className={`text-lg font-semibold mb-4 flex items-center ${isActive ? "text-[#22C55E]" : "text-white"}`}
              >
                <Target className="mr-2" size={20} />
                Logros Destacados
              </h4>
              <ul className="space-y-2 pl-6">
                {achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <ArrowRight
                      className={`w-5 h-5 mr-2 ${isActive ? "text-[#22C55E]" : "text-white"} flex-shrink-0`}
                    />
                    <span
                      className={`text-base md:text-base lg:text-lg leading-relaxed ${isActive ? "text-white/90" : "text-white/75"} mb-2 text-pretty`}
                    >
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4
                className={`text-lg font-semibold mb-4 flex items-center ${isActive ? "text-[#22C55E]" : "text-white"}`}
              >
                <Sparkles className="mr-2" size={20} />
                Habilidades Clave
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ id, name, icon }, i) => (
                  <Badge key={i} id={id} title={name} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-5 flex justify-center"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-white/75" size={24} />
        </motion.div>
      </motion.div>
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 to-green-500 absolute bottom-0 left-0 right-0"
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

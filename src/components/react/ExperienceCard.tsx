import { useState, useEffect } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronDown,
  Sparkles,
  Target,
} from "lucide-react";
import type { LocalizedExperience } from "@/lib/experience";
import { easeOut } from "@/lib/motion";

interface Props {
  experience: LocalizedExperience;
  titleAchievements: string;
  titleSkills: string;
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      ease: easeOut,
    },
  },
};

export const ExperienceCard = ({
  experience,
  titleAchievements,
  titleSkills,
}: Props) => {
  const { id, company, link, role, period, description, achievements, skills } =
    experience;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0,
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
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.article
      key={id}
      variants={itemVariants}
      className="relative mb-8 w-full overflow-hidden rounded-3xl border border-gray-600/20 bg-[#181818] transition-colors duration-300 hover:bg-[#1f1f1f]"
      whileHover={
        !isTouchDevice
          ? {
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 20px 20px -2px rgba(0, 0, 0, 0.05)",
            }
          : {}
      }
    >
      <motion.div
        className="cursor-pointer px-6 py-5 md:px-12 md:py-10"
        onClick={handleInteraction}
        variants={cardVariants}
        initial="inactive"
        animate={controls}
        whileHover={!isTouchDevice ? "active" : {}}
        onHoverStart={() => !isTouchDevice && setIsActive(true)}
        onHoverEnd={() => !isTouchDevice && setIsActive(false)}
      >
        <div className="mb-4 flex flex-col items-start justify-between md:flex-row">
          <div>
            <div className="mb-1 flex items-center transition-colors duration-300">
              <Building2
                className={`mr-2 h-6 w-6 md:h-6 md:w-6 lg:h-7 lg:w-7 ${isActive || isExpanded ? "text-brand" : "text-white"}`}
              />
              <a href={link} target="_blank" rel="noreferrer">
                <h2
                  className={`text-3xl font-semibold text-pretty md:text-3xl lg:text-4xl ${isActive || isExpanded ? "text-brand" : "text-white"}`}
                >
                  {company}
                </h2>
              </a>
            </div>
            <p
              className={`text-lg font-medium md:text-lg lg:text-xl ${isActive || isExpanded ? "text-stone-400" : "text-[#6E6E6F]"}`}
            >
              {role}
            </p>
          </div>
          <div
            className={`mt-4 flex items-center md:mt-0 ${isActive || isExpanded ? "text-brand" : "text-white/75"}`}
          >
            <CalendarDays className="mr-2" size={16} />
            <span className="text-base font-medium md:text-base lg:text-lg">
              {period}
            </span>
          </div>
        </div>
        <p
          className={`text-base leading-relaxed font-medium md:text-base lg:text-lg ${isActive || isExpanded ? "text-white/90" : "text-white/75"} mb-4 text-pretty`}
        >
          {description}
        </p>
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="overflow-hidden"
        >
          <div className="mt-4 space-y-4">
            <div className="mb-6">
              <h4
                className={`mb-4 flex items-center text-lg font-semibold ${isActive || isExpanded ? "text-brand" : "text-white"}`}
              >
                <Target className="mr-2" size={20} />
                {titleAchievements}
              </h4>
              <ul className="space-y-2 pl-6">
                {achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="mb-4 flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: easeOut }}
                  >
                    <ArrowRight
                      className={`mt-1 mr-2 h-5 w-5 ${isActive || isExpanded ? "text-brand" : "text-white"} flex-shrink-0`}
                    />
                    <span
                      className={`text-base leading-relaxed font-medium md:text-base lg:text-lg ${isActive || isExpanded ? "text-white/90" : "text-white/75"} text-pretty`}
                    >
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4
                className={`mb-4 flex items-center text-lg font-semibold ${isActive || isExpanded ? "text-brand" : "text-white"}`}
              >
                <Sparkles className="mr-2" size={20} />
                {titleSkills}
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map(({ id, name, icon }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-full bg-black/90 px-4 py-2 shadow-sm transition-colors duration-200"
                  >
                    <img src={icon} alt={name} className="h-6 w-6" />
                    <span className="text-sm font-medium text-white/95">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-5 flex justify-center"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
        >
          <ChevronDown className="text-white/75" size={24} />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-brand to-emerald-500"
        initial={{ width: "0%" }}
        animate={{ width: isActive || isExpanded ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

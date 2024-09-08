import { useState } from "react";
import { motion } from "framer-motion";
import type { Experience } from "../types/types";
import {
  Award,
  Bolt,
  Building2,
  CalendarDays,
  ChevronDown,
  LucideAward,
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      key={id}
      variants={itemVariants}
      className="relative w-full rounded-2xl overflow-hidden shadow-xl shadow-[#141211] transition-all duration-300"
      whileHover={{
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <motion.div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        initial={{ background: "transparent" }}
        whileHover={{
          background:
            "linear-gradient(90deg, rgba(40, 40, 45, 0.5) 0%, rgba(27, 27, 31, 0.7) 100%)",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            <div className="flex items-center mb-1 transition-colors duration-300">
              <Building2
                className={`mr-2 ${isHovered ? "text-[#22C55E]" : "text-white"}`}
                size={20}
              />
              <h3
                className={`text-xl md:text-2xl font-semibold text-pretty ${isHovered ? "text-[#22C55E]" : "text-white"}`}
              >
                {company}
              </h3>
            </div>
            <p className="text-base md:text-lg text-[#6E6E6F]">{role}</p>
          </div>
          <div className="flex items-center text-sm md:text-base text-white/90 mt-4 md:mt-0">
            <CalendarDays className="mr-2" size={16} />
            {period}
          </div>
        </div>
        <p className="text-sm md:text-base text-white/75 mb-4">{description}</p>
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
                className={`text-lg font-semibold mb-4 flex items-center ${isHovered ? "text-[#22C55E]" : "text-white"}`}
              >
                <Target className="mr-2" size={20} />
                Logros Destacados
              </h4>
              <ul className="space-y-2 text-white/75 pl-6">
                {achievements.map((achievement, i) => (
                  <li key={i} className="list-disc">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4
                className={`text-lg font-semibold mb-4 flex items-center ${isHovered ? "text-[#22C55E]" : "text-white"}`}
              >
                <Sparkles className="mr-2" size={20} />
                Habilidades Clave
              </h4>
              <div className="flex flex-wrap gap-2">
                {
                  skills.map(({ id, name, icon }, i) => (
                    <Badge key={i} id={id} title={name} icon={icon} />
                  ))
                }
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-4 flex justify-center"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-gray-400" size={24} />
        </motion.div>
      </motion.div>
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 to-green-500 absolute bottom-0 left-0 right-0"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

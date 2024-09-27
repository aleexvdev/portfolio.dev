import { BriefcaseBusiness, FolderCode, UserRound, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeDropdown } from "./react/ThemeDropdown";
import { DialogMenu } from "./react/DialogMenu";
import { motion } from "framer-motion";

const navItems = [
  { href: "#experiencia", icon: BriefcaseBusiness, text: "Experiencia" },
  { href: "#proyectos", icon: FolderCode, text: "Proyectos" },
  { href: "#sobre-mi", icon: UserRound, text: "Sobre mi" },
  { href: "#contacto", icon: Mail, text: "Contacto" },
];

const logo = "{av.}";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection: string | null = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentSection = section.getAttribute("id");
        }
      });
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <motion.header
      className="w-full h-max fixed z-[99999] transition-colors duration-300"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      <div className="w-full h-full flex justify-center max-w-screen-lg mx-auto relative">
        <motion.div
          className={`w-full h-max flex items-center justify-between px-6 py-1 md:py-3 rounded-3xl transition-all duration-300 
            ${scrolled ? "mt-5 mx-4 bg-[#f1f1f1cc] dark:bg-[#383838cc] backdrop-blur-md" : "mt-2 bg-transparent backdrop-blur-none"}`}
          style={{ 
            boxShadow: scrolled ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "none"
          }}
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-max h-max flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="/#"
              className="text-2xl lg:text-3xl font-bold leading-6 gradient-text select-none transition-transform duration-200 flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(90deg, #9845e8 0%, #3377ff 55%, #dd5789 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {logo}
            </a>
          </motion.div>

          <motion.div
            className="w-full hidden md:flex items-center justify-center gap-x-7"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className={`list-none transition-colors duration-300 ease-out ${activeSection === item.href.replace('#', '') ? 'text-[#2563EB] dark:text-[#2563EB]' : 'text-black dark:text-white'} hover:text-[#2563EB] hover:dark:text-[#2563EB]`}
                whileHover={{ scale: 1.02 }} 
              >
                <a
                  href={item.href}
                  aria-label={item.href.slice(1)}
                  className="flex items-center gap-x-2 cursor-pointer"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm md:text-base lg:text-lg leading-6 font-semibold text-nowrap">
                    {item.text}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-x-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <ThemeDropdown />
            <DialogMenu />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

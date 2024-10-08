import {
  BriefcaseBusiness,
  FolderCode,
  UserRound,
  Mail,
  LayoutDashboard,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeDropdown } from "./react/ThemeDropdown";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { href: "#experiencia", icon: BriefcaseBusiness, text: "Experiencia" },
  { href: "#proyectos", icon: FolderCode, text: "Proyectos" },
  { href: "#sobre-mi", icon: UserRound, text: "Sobre mí" },
  { href: "#contacto", icon: Mail, text: "Contacto" },
];

const logo = "{av.}";

export const Header = () => {
  const [isActiveDrawer, setIsActiveDrawer] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsActiveDrawer(false);
    }
  };

  return (
    <>
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
              boxShadow: scrolled
                ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                : "none",
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
                  className={`list-none transition-colors duration-300 ease-out ${activeSection === item.href.replace("#", "") ? "text-[#2563EB] dark:text-[#2563EB]" : "text-black dark:text-white"} hover:text-[#2563EB] hover:dark:text-[#2563EB]`}
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
              <button
                className="relative w-max flex flex-shrink-0 items-center justify-center rounded-md p-2 overflow-hidden md:hidden bg-transparent text-sm font-medium transition-all dark:bg-transparent hover:bg-[#d2d2d2] hover:dark:bg-[#292929]"
                onClick={() => setIsActiveDrawer(!isActiveDrawer)}
              >
                <LayoutDashboard className="w-5 h-5 text-black dark:text-white cursor-pointer" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isActiveDrawer && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[99998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOutsideClick}
            />
            <motion.div
              className="bg-[#F1F5F9] dark:bg-[#181818] flex flex-col rounded-t-3xl mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-[99999] shadow-xl shadow-black"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, info) => {
                if (info.offset.y > 100) {
                  setIsActiveDrawer(false); 
                }
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="p-4 bg-[#F1F5F9] dark:bg-[#181818] rounded-t-3xl flex-1">
                <motion.div
                  aria-hidden
                  className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
                  whileHover={{ scale: 1.1 }}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 50 }}
                  onDrag={(e, info) => {
                    if (info.offset.y > 50) {
                      setIsActiveDrawer(false);
                    }
                  }}
                />
                <div className="max-w-md mx-auto">
                  <h1 className="font-medium mb-4 text-black dark:text-white text-center text-base md:text-lg space-x-2">
                    <span>Alexander Valverde</span>
                    <span>|</span>
                    <span>Desarrollador Full Stack</span>
                  </h1>
                  <nav className="w-full flex flex-col items-center justify-center gap-y-3 py-6">
                    {navItems.map(({ href, icon: Icon, text }) => (
                      <li
                        key={href}
                        className={`list-none transition-colors duration-300 ease-out ${activeSection === href.replace("#", "") ? "text-[#2563EB] dark:text-[#2563EB]" : "text-black dark:text-white"} hover:text-[#2563EB] hover:dark:text-[#2563EB]`}
                      >
                        <a
                          href={href}
                          aria-label={text.toLowerCase()}
                          className="flex items-center gap-x-3 cursor-pointer"
                          onClick={() => setIsActiveDrawer(false)}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-base leading-6 font-semibold text-nowrap">
                            {text}
                          </span>
                        </a>
                      </li>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="p-4 bg-[#F1F5F9] dark:bg-[#181818] border-t border-gray-300  mt-auto">
                <div className="flex gap-x-4 justify-center max-w-md mx-auto text-black dark:text-white">
                  <a
                    className="text-xs flex items-center gap-0.25 hover:text-[#2563EB] hover:dark:text-[#2563EB]"
                    href="https://github.com/aleexvdev/"
                    target="_blank"
                  >
                    GitHub
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    className="text-xs flex items-center gap-0.25 hover:text-[#2563EB] hover:dark:text-[#2563EB]"
                    href="https://www.linkedin.com/in/alexvdev/"
                    target="_blank"
                  >
                    Linkedin
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    className="text-xs flex items-center gap-0.25 hover:text-[#2563EB] hover:dark:text-[#2563EB]"
                    href="https://www.facebook.com/alexvalverde666/"
                    target="_blank"
                  >
                    Facebook
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    className="text-xs flex items-center gap-0.25 hover:text-[#2563EB] hover:dark:text-[#2563EB]"
                    href="https://www.instagram.com/alexvalverde._/"
                    target="_blank"
                  >
                    Instagram
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

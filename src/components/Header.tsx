import { BriefcaseBusiness, FolderCode, UserRound, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeDropdown } from "./react/ThemeDropdown";
import { DialogMenu } from "./react/DialogMenu";

const navItems = [
  { href: "#experiencia", icon: BriefcaseBusiness, text: "Experiencia" },
  { href: "#proyectos", icon: FolderCode, text: "Proyectos" },
  { href: "#sobre-mi", icon: UserRound, text: "Sobre mi" },
  { href: "#contacto", icon: Mail, text: "Contacto" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full h-max fixed z-[99999] transition-colors duration-300">
      <div className="w-full h-full flex justify-center max-w-screen-lg mx-auto relative">
        <div 
          className={`w-full h-max flex items-center justify-between px-6 py-1 md:py-3 rounded-3xl transition-all duration-300 
            ${scrolled ? "mt-5 mx-4 bg-[#f1f1f1cc] dark:bg-[#383838cc] backdrop-blur-md" : "mt-2 bg-transparent backdrop-blur-none"}`}
          style={{ 
            boxShadow: scrolled ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "none"
          }}
        >
          <div className="w-max h-max flex items-center">
            <a
              href="/#"
              className="text-2xl lg:text-3xl font-bold leading-6 gradient-text select-none transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(90deg, #9845e8 0%, #3377ff 55%, #dd5789 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              av.
            </a>
          </div>
          <div className="w-full hidden md:flex items-center justify-center gap-x-7">
            {navItems.map((item, index) => (
              <li 
                key={index}
                className={`text-black dark:text-white list-none transition-colors duration-300 ease-out hover:text-[#2563EB] hover:dark:text-[#2563EB]`}
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
              </li>
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            <ThemeDropdown />
            <DialogMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

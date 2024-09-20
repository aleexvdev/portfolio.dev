import { themes } from "@/data/data";
import { useDropdown } from "@/hooks/useDropdown";
import { Computer, Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export const ThemeDropdown = () => {
  const { isActive, selectedItem, toggleDropdown, selectItem, dropdownRef } = useDropdown("System");

  const themeIcon = (icon: string) => {
    switch (icon) {
      case "Light":
        return <Sun className="w-5 h-5 text-black dark:text-white" />;
      case "Dark":
        return <Moon className="w-5 h-5 text-black dark:text-white" />;
      default:
        return <Computer className="w-5 h-5 text-black dark:text-white" />;
    }
  }

  const applyTheme = (theme: string) => {
    if (theme === "System") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      document.documentElement.classList.toggle("light", !prefersDark);
    } else {
      const isDark = theme === "Dark";
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.classList.toggle("light", !isDark);
    }
  };
  

  useEffect(() => {
    applyTheme(selectedItem);
    localStorage.setItem("theme", selectedItem);
  }, [selectedItem]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center p-2 hover:bg-[#d2d2d2] hover:dark:bg-[#292929] rounded-md transition-colors duration-300 focus:bg-[#d2d2d2] focus:dark:bg-[#292929]"
        onClick={toggleDropdown}
      >
        {themeIcon(selectedItem)}
      </button>
      {isActive && (
        <div
          ref={dropdownRef}
          className="absolute top-10 right-0 bg-[#d2d2d2] dark:bg-[#292929] rounded-lg overflow-hidden z-20 w-max px-2 py-2"
        >
          {themes.map((theme, index) => (
            <button
              key={index}
              onClick={() => selectItem(theme.name)}
              className={`block w-full rounded-md text-left text-sm py-1 px-2 transition-colors duration-300 font-medium text-black dark:text-white hover:bg-[#adadad] hover:dark:bg-[#151515]
                ${
                  selectedItem === theme.name
                    ? "bg-[#adadad] dark:bg-[#151515]"
                    : "bg-transparent"
                }
              `}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
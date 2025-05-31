import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="navbar"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="cursor-pointer border-none transition-all hover:scale-110"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

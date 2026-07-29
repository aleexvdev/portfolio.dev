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
      className="cursor-pointer border-none transition-transform [@media(hover:hover)]:hover:scale-110"
    >
      <Sun
        className={`h-5 w-5 transition-[transform,opacity] ${theme === "dark" ? "scale-75 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"}`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-[transform,opacity] ${theme === "dark" ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 -rotate-90"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

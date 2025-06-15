import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  currentLang: string;
}

export function LanguageToogle({ currentLang }: LanguageToggleProps) {
  const toggleLanguage = (lang: string) => {
    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/^\/en(\/|$)/, "/");
    const newPath = lang === "es" ? basePath : `/en${basePath}`;
    window.location.href = newPath;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="navbar" className="cursor-pointer border-none hover:scale-105 transition-all duration-300 outline-none">
          <Languages className="w-10 h-10" />
          <span className="text-base font-medium text-gray-300 uppercase">{currentLang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toggleLanguage("es")} disabled={currentLang === "es"}>
          <span className="text-base font-medium text-gray-300">Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage("en")} disabled={currentLang === "en"}>
          <span className="text-base font-medium text-gray-300">English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

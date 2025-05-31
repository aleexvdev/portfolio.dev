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
        <Button variant="navbar" className="cursor-pointer border-none transition-all hover:scale-110">
          <Languages className="mr-0.5 h-4 w-4" />
          {currentLang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toggleLanguage("es")} disabled={currentLang === "es"}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage("en")} disabled={currentLang === "en"}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

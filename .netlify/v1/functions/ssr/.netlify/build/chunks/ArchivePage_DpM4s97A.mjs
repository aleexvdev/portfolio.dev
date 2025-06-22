import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { B as Button, g as getLangFromUrl, S as ScrollUp } from './Footer_D_PgQmee.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, k as renderSlot, l as renderHead, h as addAttribute } from './astro/server_Dx6Wyndb.mjs';
import 'kleur/colors';
/* empty css                           */
/* empty css                           */

function ModeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: "navbar",
      size: "icon",
      onClick: toggleTheme,
      "aria-label": "Toggle theme",
      className: "cursor-pointer border-none transition-all hover:scale-110",
      children: [
        /* @__PURE__ */ jsx(
          Sun,
          {
            className: `h-5 w-5 transition-all ${theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"}`
          }
        ),
        /* @__PURE__ */ jsx(
          Moon,
          {
            className: `absolute h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321/");
const $$ArchivePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArchivePage;
  const { title, description, canonicalPathname } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Astro Basics</title>", '</head> <body class="bg-background relative w-screen overflow-x-hidden"> <div class="bg-background absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ', " ", ' <script>\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light";\n  };\n  const isDark = getThemePreference() === "dark";\n  document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n\n  if (typeof localStorage !== "undefined") {\n    const observer = new MutationObserver(() => {\n      const isDark = document.documentElement.classList.contains("dark");\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n    });\n    observer.observe(document.documentElement, {\n      attributes: true,\n      attributeFilter: ["class"],\n    });\n  }\n<\/script> </body></html>'])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ScrollUp", ScrollUp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/ScrollUp", "client:component-export": "ScrollUp" }));
}, "E:/Repositorios/Astro/portfolio.dev/src/layouts/ArchivePage.astro", void 0);

export { $$ArchivePage as $, ModeToggle as M };

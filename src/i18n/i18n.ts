"use client";

export const languages = {
  es: "Español",
  en: "English",
}

export const defaultLang = "es"

export const ui = {
  es: {
    nav: {
      home: {
        title: "Inicio",
        label: "home",
        ariaLabel: "Ir a la página de inicio",
        href: "#home",
      },
      experience: {
        title: "Experiencia",
        label: "experience",
        ariaLabel: "Ir a la sección de experiencia",
        href: "#experience",
      },
      projects: {
        title: "Proyectos",
        label: "projects",
        ariaLabel: "Ir a la sección de proyectos",
        href: "#projects",
      },
      about: {
        title: "Sobre mi",
        label: "about",
        ariaLabel: "Ir a la sección de sobre mi",
        href: "#about",
      },
      contact: {
        title: "Contacto",
        label: "contact",
        ariaLabel: "Ir a la sección de contacto",
        href: "#contact",
      },
    },
  },
  en: {
    nav: {
      home: {
        title: "Home",
        label: "home",
        ariaLabel: "Go to home page",
        href: "#home",
      },
      experience: {
        title: "Experience",
        label: "experience",
        ariaLabel: "Go to experience section",
        href: "#experience",
      },
      projects: {
        title: "Projects",
        label: "projects",
        ariaLabel: "Go to projects section",
        href: "#projects",
      },
      about: {
        title: "About",
        label: "about",
        ariaLabel: "Go to about section",
        href: "#about",
      },
      contact: {
        title: "Contact",
        label: "contact",
        ariaLabel: "Go to contact section",
        href: "#contact",
      },
    },
  }
} as const

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/")
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
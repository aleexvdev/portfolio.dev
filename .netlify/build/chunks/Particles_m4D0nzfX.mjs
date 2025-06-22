import { e as createAstro, f as createComponent, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, n as renderComponent, h as addAttribute, k as renderSlot, l as renderHead } from './astro/server_Dx6Wyndb.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import 'clsx';
import { c as cn, g as getLangFromUrl, u as useTranslations, B as Button, L as LanguageToogle, S as ScrollUp, p as projects } from './Footer_D_PgQmee.mjs';
/* empty css                         */
import { Drawer as Drawer$1 } from 'vaul';
import { Menu, BriefcaseBusiness, FolderCode, UserRound, Mail, Building2, CalendarDays, Target, ArrowRight, Sparkles, ChevronDown, ExternalLink, Coffee, Loader2, XCircle, CheckCircle, AtSign, OctagonX, UserCheck, MessagesSquare, RefreshCcw, Send } from 'lucide-react';
/* empty css                           */
import { $ as $$Seo } from './seo_CbbYWVyX.mjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';

const Tooltip = ({
  children,
  content,
  position = "top",
  animation = false
}) => {
  const [visible, setVisible] = useState(false);
  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3"
  };
  const tipArrow = {
    top: "bottom-[-5px] left-1/2 -translate-x-1/2 rotate-45",
    bottom: "top-[-5px] left-1/2 -translate-x-1/2 rotate-45",
    left: "right-[-5px] top-1/2 -translate-y-1/2 rotate-45",
    right: "left-[-5px] top-1/2 -translate-y-1/2 rotate-45"
  };
  const getMotionY = () => {
    if (position === "top") return 6;
    if (position === "bottom") return -6;
    return 0;
  };
  return /* @__PURE__ */ jsxs("div", { className: "group relative inline-block", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "cursor-pointer",
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false),
        onFocus: () => setVisible(true),
        onBlur: () => setVisible(false),
        tabIndex: 0,
        "aria-describedby": "tooltip",
        children
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxs(
      motion.div,
      {
        id: "tooltip",
        role: "tooltip",
        className: `text-foreground bg-accent absolute z-50 rounded-xl px-3 py-2 text-sm font-medium shadow-lg backdrop-blur-sm ${positionStyles[position]} pointer-events-none`,
        initial: { opacity: 0, y: getMotionY(), scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: getMotionY(), scale: 0.96 },
        transition: { duration: 0.25, ease: "easeOut" },
        children: [
          content,
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `bg-accent absolute h-2.5 w-2.5 ${tipArrow[position]}`
            }
          ),
          animation && /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute bottom-[-4px] left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-transparent opacity-70",
              initial: { scaleX: 0 },
              animate: { scaleX: 1 },
              exit: { scaleX: 0 },
              transition: { duration: 0.4, ease: "easeInOut" }
            }
          )
        ]
      }
    ) })
  ] });
};

const AvailableToWork = ({ text }) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative inline-flex h-full w-max overflow-hidden rounded-lg p-0.5", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full items-center justify-center space-x-3 rounded-lg px-3 py-2 backdrop-blur-3xl bg-[#0C0A09]", children: [
      /* @__PURE__ */ jsx("span", { className: "animate-custom-pulse block h-3 w-3 rounded-full bg-green-500" }),
      /* @__PURE__ */ jsx("span", { className: "animate-ripple absolute left-0 ml-3 h-3 w-3 rounded-full bg-green-500" }),
      /* @__PURE__ */ jsx("span", { className: "inline-flex text-sm font-medium text-nowrap md:text-base lg:text-lg text-white", children: text })
    ] })
  ] });
};

const $$Astro$s = createAstro("http://localhost:4321/");
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"${spreadAttributes(Astro2.props)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/linkedin.astro", void 0);

const $$Astro$r = createAstro("http://localhost:4321/");
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"${spreadAttributes(Astro2.props)}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/github.astro", void 0);

const $$Astro$q = createAstro("http://localhost:4321/");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"${spreadAttributes(Astro2.props)}><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/mail.astro", void 0);

const $$Astro$p = createAstro("http://localhost:4321/");
const $$ScrollText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$ScrollText;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text-icon lucide-scroll-text"${spreadAttributes(Astro2.props)}><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/scroll-text.astro", void 0);

function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: "group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
        ),
        style: {
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box"
        }
      }
    ),
    "🎉 ",
    /* @__PURE__ */ jsx("hr", { className: "mx-2 h-4 w-px shrink-0 bg-neutral-500" }),
    /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-to": colorTo
        },
        className: cn(
          `inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          className
        ),
        ...props,
        children
      }
    )
  ] });
}

const $$Astro$o = createAstro("http://localhost:4321/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Hero;
  const author = "Alexander Valverde";
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexvdev/",
      icon: $$Linkedin,
      ariaLabel: "Visitar perfil de LinkedIn"
    },
    {
      name: "GitHub",
      url: "https://github.com/aleexvdev",
      icon: $$Github,
      ariaLabel: "Visitar perfil de GitHub"
    },
    {
      name: "Curriculum",
      url: "https://drive.google.com/file/d/1Lj-Fx0J0Mazz9DKWsw1egcyUl7zzGUDP/view?usp=sharing",
      icon: $$ScrollText,
      ariaLabel: "Descargar curriculum vitae"
    },
    {
      name: "Email",
      url: "mailto:alexvalverde.dev@example.com",
      icon: $$Mail,
      ariaLabel: "Enviar correo electr\xF3nico"
    }
  ];
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const hero = t("hero");
  const profession = hero.profession;
  const badge = hero.title;
  const disponibility = hero.disponibility;
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative mx-auto flex min-h-screen w-screen max-w-7xl flex-col items-center justify-center px-4 py-8 transition-all duration-300 lg:px-8" aria-labelledby="hero-title"> <div class="animate-fade-in-up w-full space-y-8"> <div class="space-y-4"> <div class="flex w-full items-center justify-center"> <div class="flex w-max items-center justify-center text-sm font-semibold tracking-widest"> ${renderComponent($$result, "AnimatedGradientText", AnimatedGradientText, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/AnimatedGradientText", "client:component-export": "AnimatedGradientText" }, { "default": ($$result2) => renderTemplate`${badge}` })} </div> </div> <h1 id="hero-title" class="animate-glow-fade hero-title text-center text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"> ${author.toUpperCase()} </h1> <p class="animate-soft-glow profession-text mt-4 bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400 bg-clip-text text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-5xl"> ${profession} </p> </div> <div class="flex w-full flex-col items-center justify-center pt-8 md:flex-row md:justify-between"> ${renderComponent($$result, "AvailableToWork", AvailableToWork, { "client:load": true, "text": disponibility, "client:component-hydration": "load", "client:component-path": "@/components/react/AvailableToWork", "client:component-export": "AvailableToWork" })} <div class="my-6 block h-px w-[60%] rounded-full bg-stone-400 md:hidden text-stone-400"></div> <ul class="flex justify-center gap-3 sm:gap-4" aria-label="Redes sociales y contacto"> ${socialLinks.map((link) => renderTemplate`<li> ${renderComponent($$result, "Tooltip", Tooltip, { "content": link.name, "position": "bottom", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/Tooltip", "client:component-export": "Tooltip" }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(link.ariaLabel, "aria-label")} class="group flex items-center justify-center rounded-lg p-2 transition-all duration-300 hover:scale-125 hover:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"> <span class="sr-only">${link.name}</span> <span class="glow-icon  transition duration-300 text-gray-300 group-hover:text-blue-600"> ${renderComponent($$result2, "link.icon", link.icon, { "class": "h-7 w-7 sm:h-8 sm:w-8", "width": "32", "height": "32" })} </span> </a> ` })} </li>`)} </ul> </div> </div> <div class="absolute bottom-6 left-1/2 -translate-x-1/2"> <div class="mouse animate-bounce"> <div class="scroll-wheel"></div> </div> </div> </section> `;
}, "E:/Repositorios/Astro/portfolio.dev/src/sections/Hero.astro", void 0);

const $$Astro$n = createAstro("http://localhost:4321/");
const $$BriefcaseBusiness = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$BriefcaseBusiness;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business-icon lucide-briefcase-business"${spreadAttributes(Astro2.props)}> <path d="M12 12h.01"></path> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path> <path d="M22 13a18.15 18.15 0 0 1-20 0"></path> <rect width="20" height="14" x="2" y="6" rx="2"></rect> </svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/briefcaseBusiness.astro", void 0);

const $$Astro$m = createAstro("http://localhost:4321/");
const $$FolderCode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$FolderCode;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-code-icon lucide-folder-code"${spreadAttributes(Astro2.props)}><path d="M10 10.5 8 13l2 2.5"></path><path d="m14 10.5 2 2.5-2 2.5"></path><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"></path></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/folder-code.astro", void 0);

const $$Astro$l = createAstro("http://localhost:4321/");
const $$UserRound = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$UserRound;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"${spreadAttributes(Astro2.props)}><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/user-round.astro", void 0);

function Drawer({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      Drawer$1.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Title,
    {
      "data-slot": "drawer-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

const navs = [
  {
    name: "Experiencia",
    href: "#experience",
    icon: BriefcaseBusiness
  },
  {
    name: "Proyectos",
    href: "#projects",
    icon: FolderCode
  },
  {
    name: "Sobre mi",
    href: "#about",
    icon: UserRound
  },
  {
    name: "Contacto",
    href: "#contact",
    icon: Mail
  }
];
function MenuToogle() {
  return /* @__PURE__ */ jsxs(Drawer, { children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "navbar",
        size: "icon",
        "aria-label": "Toggle menu",
        className: "cursor-pointer border-none transition-all hover:scale-110 md:hidden",
        children: [
          /* @__PURE__ */ jsx(Menu, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle menu" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(DrawerContent, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { children: [
        /* @__PURE__ */ jsx(DrawerTitle, { className: "text-muted-foreground text-center", children: "@alexvdev" }),
        /* @__PURE__ */ jsx(DrawerDescription, { children: "" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-4 pb-0", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col items-center justify-center gap-4", children: navs.map((nav) => /* @__PURE__ */ jsx(DrawerClose, { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: nav.href,
          className: `text-white after:bg-foreground relative flex items-center gap-2 text-sm/6 font-semibold after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:text-blue-500 hover:after:w-full hover:after:bg-blue-500`,
          children: [
            /* @__PURE__ */ jsx(nav.icon, { className: "h-6 w-6" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm/6 leading-6 font-semibold text-nowrap md:text-base lg:text-lg", children: nav.name })
          ]
        }
      ) }) }, nav.name)) }) }),
      /* @__PURE__ */ jsx(DrawerFooter, { children: /* @__PURE__ */ jsx("div", { className: "mt-auto p-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-md justify-center gap-x-4 text-white", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex items-center gap-0.25 text-xs hover:text-[#2563EB]",
            href: "https://github.com/aleexvdev/",
            target: "_blank",
            children: [
              "GitHub",
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  fill: "none",
                  height: "16",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  viewBox: "0 0 24 24",
                  width: "16",
                  "aria-hidden": "true",
                  className: "ml-1 h-3 w-3",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
                    /* @__PURE__ */ jsx("path", { d: "M15 3h6v6" }),
                    /* @__PURE__ */ jsx("path", { d: "M10 14L21 3" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex items-center gap-0.25 text-xs hover:text-[#2563EB]",
            href: "https://www.linkedin.com/in/alexvdev/",
            target: "_blank",
            children: [
              "Linkedin",
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  fill: "none",
                  height: "16",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  viewBox: "0 0 24 24",
                  width: "16",
                  "aria-hidden": "true",
                  className: "ml-1 h-3 w-3",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
                    /* @__PURE__ */ jsx("path", { d: "M15 3h6v6" }),
                    /* @__PURE__ */ jsx("path", { d: "M10 14L21 3" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex items-center gap-0.25 text-xs hover:text-[#2563EB]",
            href: "https://www.facebook.com/alexvalverde666/",
            target: "_blank",
            children: [
              "Facebook",
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  fill: "none",
                  height: "16",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  viewBox: "0 0 24 24",
                  width: "16",
                  "aria-hidden": "true",
                  className: "ml-1 h-3 w-3",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
                    /* @__PURE__ */ jsx("path", { d: "M15 3h6v6" }),
                    /* @__PURE__ */ jsx("path", { d: "M10 14L21 3" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex items-center gap-0.25 text-xs hover:text-[#2563EB]",
            href: "https://www.instagram.com/alexvalverde._/",
            target: "_blank",
            children: [
              "Instagram",
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  fill: "none",
                  height: "16",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  viewBox: "0 0 24 24",
                  width: "16",
                  "aria-hidden": "true",
                  className: "ml-1 h-3 w-3",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
                    /* @__PURE__ */ jsx("path", { d: "M15 3h6v6" }),
                    /* @__PURE__ */ jsx("path", { d: "M10 14L21 3" })
                  ]
                }
              )
            ]
          }
        )
      ] }) }) })
    ] }) })
  ] });
}

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$k = createAstro("http://localhost:4321/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Header;
  const logo = "{av.}";
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const nav = t("nav");
  const navs = [
    {
      name: nav.experience.title,
      href: nav.experience.href,
      label: nav.experience.label,
      ariaLabel: nav.experience.ariaLabel,
      icon: $$BriefcaseBusiness
    },
    {
      name: nav.projects.title,
      href: nav.projects.href,
      label: nav.projects.label,
      ariaLabel: nav.projects.ariaLabel,
      icon: $$FolderCode
    },
    {
      name: nav.about.title,
      href: nav.about.href,
      label: nav.about.label,
      ariaLabel: nav.about.ariaLabel,
      icon: $$UserRound
    },
    {
      name: nav.contact.title,
      href: nav.contact.href,
      label: nav.contact.label,
      ariaLabel: nav.contact.ariaLabel,
      icon: $$Mail
    }
  ];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header id="header" class="header fixed top-0 z-[100] w-full bg-transparent py-2" data-astro-cid-3ef6ksr2> <nav class="mx-auto flex max-w-7xl items-center justify-between px-0 py-4 transition-all duration-300" id="nav" data-astro-cid-3ef6ksr2> <a href="#home" class="logo pb-1.5 text-2xl font-bold transition-transform duration-200 select-none hover:scale-105 md:text-3xl lg:text-4xl" data-astro-cid-3ef6ksr2> ', ' </a> <ul class="hidden items-center justify-center gap-6 transition-all duration-300 md:flex" data-astro-cid-3ef6ksr2> ', ' </ul> <div class="flex items-center justify-end gap-x-2.5" data-astro-cid-3ef6ksr2> ', " ", ' </div> </nav> </header> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const navbar = document.querySelector("nav");\n    const sections = document.querySelectorAll("section");\n    const navItems = document.querySelectorAll("header nav ul li a");\n    const setActiveNav = (id) => {\n      navItems.forEach((item) => {\n        const targetId = item\n          .getAttribute("href")\n          ?.substring(1)\n          .replace(/\\/$/, "");\n        if (targetId === id) {\n          item.classList.add("active");\n        } else {\n          item.classList.remove("active");\n        }\n      });\n    };\n    const callback = (entries) => {\n      const visible = entries.filter((entry) => entry.isIntersecting);\n      if (visible.length > 0) {\n        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);\n        setActiveNav(visible[0].target.id);\n      }\n    };\n    const observer = new IntersectionObserver(callback, {\n      root: null,\n      rootMargin: "0px 0px -30% 0px",\n      threshold: 0.2,\n    });\n    sections.forEach((section) => {\n      if (section.id) observer.observe(section);\n    });\n    const initialHash = window.location.hash;\n    if (initialHash) {\n      const targetId = initialHash.substring(1).replace(/\\/$/, "");\n      const targetSection = document.getElementById(targetId);\n      if (targetSection) {\n        setTimeout(() => {\n          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });\n          setActiveNav(targetId);\n        }, 100);\n      }\n    }\n    document.onvisibilitychange = () => {\n      if (document.visibilityState === "hidden") {\n        observer.disconnect();\n      } else {\n        sections.forEach((section) => {\n          if (section.id) observer.observe(section);\n        });\n      }\n    };\n\n    const handleScroll = () => {\n      const scrollY = window.scrollY;\n      if (scrollY > 0) {\n        navbar?.classList.add("nav-scrolled");\n      } else {\n        navbar?.classList.remove("nav-scrolled");\n      }\n    };\n    window.addEventListener("scroll", handleScroll);\n    handleScroll();\n  });\n<\/script> '], ["", '<header id="header" class="header fixed top-0 z-[100] w-full bg-transparent py-2" data-astro-cid-3ef6ksr2> <nav class="mx-auto flex max-w-7xl items-center justify-between px-0 py-4 transition-all duration-300" id="nav" data-astro-cid-3ef6ksr2> <a href="#home" class="logo pb-1.5 text-2xl font-bold transition-transform duration-200 select-none hover:scale-105 md:text-3xl lg:text-4xl" data-astro-cid-3ef6ksr2> ', ' </a> <ul class="hidden items-center justify-center gap-6 transition-all duration-300 md:flex" data-astro-cid-3ef6ksr2> ', ' </ul> <div class="flex items-center justify-end gap-x-2.5" data-astro-cid-3ef6ksr2> ', " ", ' </div> </nav> </header> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const navbar = document.querySelector("nav");\n    const sections = document.querySelectorAll("section");\n    const navItems = document.querySelectorAll("header nav ul li a");\n    const setActiveNav = (id) => {\n      navItems.forEach((item) => {\n        const targetId = item\n          .getAttribute("href")\n          ?.substring(1)\n          .replace(/\\\\/$/, "");\n        if (targetId === id) {\n          item.classList.add("active");\n        } else {\n          item.classList.remove("active");\n        }\n      });\n    };\n    const callback = (entries) => {\n      const visible = entries.filter((entry) => entry.isIntersecting);\n      if (visible.length > 0) {\n        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);\n        setActiveNav(visible[0].target.id);\n      }\n    };\n    const observer = new IntersectionObserver(callback, {\n      root: null,\n      rootMargin: "0px 0px -30% 0px",\n      threshold: 0.2,\n    });\n    sections.forEach((section) => {\n      if (section.id) observer.observe(section);\n    });\n    const initialHash = window.location.hash;\n    if (initialHash) {\n      const targetId = initialHash.substring(1).replace(/\\\\/$/, "");\n      const targetSection = document.getElementById(targetId);\n      if (targetSection) {\n        setTimeout(() => {\n          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });\n          setActiveNav(targetId);\n        }, 100);\n      }\n    }\n    document.onvisibilitychange = () => {\n      if (document.visibilityState === "hidden") {\n        observer.disconnect();\n      } else {\n        sections.forEach((section) => {\n          if (section.id) observer.observe(section);\n        });\n      }\n    };\n\n    const handleScroll = () => {\n      const scrollY = window.scrollY;\n      if (scrollY > 0) {\n        navbar?.classList.add("nav-scrolled");\n      } else {\n        navbar?.classList.remove("nav-scrolled");\n      }\n    };\n    window.addEventListener("scroll", handleScroll);\n    handleScroll();\n  });\n<\/script> '])), maybeRenderHead(), logo, navs.map((nav2) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(nav2.href, "href")}${addAttribute(nav2.label, "aria-label")}${addAttribute(nav2.ariaLabel, "title")} class="text-primary after:bg-foreground relative flex items-center gap-1 text-sm/6 font-semibold after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:text-blue-500 hover:after:w-full hover:after:bg-blue-500" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "nav.icon", nav2.icon, { "class": "transition-all duration-300", "width": "24", "height": "24", "data-astro-cid-3ef6ksr2": true })} <span class="text-sm/6 leading-6 font-semibold text-nowrap transition-all duration-300 md:text-base lg:text-lg" data-astro-cid-3ef6ksr2> ${nav2.name} </span> </a> </li>`), renderComponent($$result, "LanguageToogle", LanguageToogle, { "client:load": true, "currentLang": lang, "client:component-hydration": "load", "client:component-path": "E:/Repositorios/Astro/portfolio.dev/src/components/react/LanguageToogle", "client:component-export": "LanguageToogle", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "MenuToogle", MenuToogle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/Repositorios/Astro/portfolio.dev/src/components/react/MenuToogle", "client:component-export": "MenuToogle", "data-astro-cid-3ef6ksr2": true }));
}, "E:/Repositorios/Astro/portfolio.dev/src/components/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$j = createAstro("http://localhost:4321/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const { title, description, canonicalPathname } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', ">", '<link rel="manifest" href="/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff"><title>', '</title><script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer><\/script>', '</head> <body class="bg-background relative w-screen overflow-x-hidden"> <div class="bg-background absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ', " ", " ", " </body></html>"])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "canonicalPathname": canonicalPathname }), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ScrollUp", ScrollUp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/ScrollUp", "client:component-export": "ScrollUp" }));
}, "E:/Repositorios/Astro/portfolio.dev/src/layouts/Layout.astro", void 0);

const $$Astro$i = createAstro("http://localhost:4321/");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Section;
  const { title, icon: Icon, id, className = "", minHeight = "min-h-screen", order = 1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${id}-label`, "aria-labelledby")}${addAttribute(`relative flex w-full ${minHeight} flex-col items-center justify-start overflow-hidden px-6 pt-24 md:pt-28 lg:pt-32 max-w-7xl mx-auto`, "class")}> <div${addAttribute(`absolute inset-0 ${className}`, "class")}></div> <div class="flex w-full max-w-7xl flex-col gap-6 opacity-0 animate-fade-in"> <div class="flex items-end gap-4"> <h2${addAttribute(`${id}-label`, "id")} class="text-pretty break-words text-3xl font-bold text-white md:text-4xl lg:text-5xl animate-fade-in-up">
0${order}. ${title} </h2> </div> <div class="animate-fade-in-up delay-[300ms] w-full"> ${renderSlot($$result, $$slots["default"])} </div> </div> </section> `;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/Section.astro", void 0);

const baseImagePath = "/skills/";
const experiences = [
  {
    id: 1,
    company: "Softnet SPA",
    link: "https://softnet.cl/",
    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer"
    },
    period: {
      es: "2023 - Presente",
      en: "2023 - Present"
    },
    location: {
      es: "remoto",
      en: "remote"
    },
    description: {
      es: "Contribuyo al desarrollo y soporte del ERP de facturación electrónica mediante la implementación de nuevas funcionalidades, con un enfoque en mejorar la eficiencia operativa y la experiencia del usuario. Trabajo en soluciones robustas y escalables, además de encargarme del mantenimiento continuo del sistema para garantizar su estabilidad y rendimiento.",
      en: "I contribute to the development and support of the electronic invoicing ERP by implementing new features, focusing on improving operational efficiency and user experience. I work on robust and scalable solutions, in addition to handling continuous system maintenance to ensure its stability and performance."
    },
    achievements: [
      {
        es: "Desarrollo e implementación de nuevas funcionalidades que mejoraron la eficiencia en los procesos del ERP de facturación electrónica.",
        en: "Development and implementation of new features that improved efficiency in the electronic invoicing ERP processes."
      },
      {
        es: "Planificación y revisión de módulos clave, contribuyendo a la alineación de los desarrollos técnicos con las necesidades empresariales.",
        en: "Planning and review of key modules, contributing to the alignment of technical developments with business needs."
      },
      {
        es: "Optimización de las diferentes interfaces de usuario, mejorando la accesibilidad y la usabilidad del sistema.",
        en: "Optimization of different user interfaces, improving system accessibility and usability."
      },
      {
        es: "Colaboración en equipos multidisciplinarios para asegurar entregas de alta calidad y cumplimiento de plazos.",
        en: "Collaboration in multidisciplinary teams to ensure high-quality deliveries and meeting deadlines."
      },
      {
        es: "Desarrollo de soluciones robustas y escalables para manejar grandes cantidades de datos y usuarios.",
        en: "Development of robust and scalable solutions to handle large amounts of data and users."
      }
    ],
    skills: [
      {
        id: 1,
        name: "PHP",
        icon: `${baseImagePath}php_dark.svg`
      },
      {
        id: 2,
        name: "Laravel",
        icon: `${baseImagePath}laravel.svg`
      },
      {
        id: 3,
        name: "Javascript",
        icon: `${baseImagePath}javascript.svg`
      },
      {
        id: 4,
        name: "Jquery",
        icon: `${baseImagePath}jquery_dark.svg`
      },
      {
        id: 5,
        name: "HTML5",
        icon: `${baseImagePath}html5.svg`
      },
      {
        id: 6,
        name: "CSS3",
        icon: `${baseImagePath}css.svg`
      },
      {
        id: 7,
        name: "MySQL",
        icon: `${baseImagePath}mysql.svg`
      },
      {
        id: 8,
        name: "Trabajo en equipo",
        icon: `${baseImagePath}team_work.png`
      },
      {
        id: 9,
        name: "Jira Software",
        icon: `${baseImagePath}jira.svg`
      },
      {
        id: 10,
        name: "Git",
        icon: `${baseImagePath}git.svg`
      }
    ]
  }
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};
const ExperienceCard = ({
  experience,
  lang,
  titleAchievements,
  titleSkills
}) => {
  const { id, company, link, role, period, description, achievements, skills } = experience;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);
  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);
  const handleInteraction = () => {
    if (isTouchDevice) {
      setIsActive(!isActive);
    }
    setIsExpanded(!isExpanded);
  };
  const cardVariants = {
    inactive: {
      background: "transparent",
      transition: { duration: 0.3 }
    },
    active: {
      transition: { duration: 0.3 }
    }
  };
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      variants: itemVariants,
      className: "relative mb-8 w-full overflow-hidden rounded-3xl border border-gray-600/20 bg-[#181818] transition-colors duration-300 hover:bg-[#1f1f1f]",
      whileHover: !isTouchDevice ? {
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 20px 20px -2px rgba(0, 0, 0, 0.05)"
      } : {},
      children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "cursor-pointer px-6 py-5 md:px-12 md:py-10",
            onClick: handleInteraction,
            variants: cardVariants,
            initial: "inactive",
            animate: controls,
            whileHover: !isTouchDevice ? "active" : {},
            onHoverStart: () => !isTouchDevice && setIsActive(true),
            onHoverEnd: () => !isTouchDevice && setIsActive(false),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col items-start justify-between md:flex-row", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center transition-colors duration-300", children: [
                    /* @__PURE__ */ jsx(
                      Building2,
                      {
                        className: `mr-2 h-6 w-6 md:h-6 md:w-6 lg:h-7 lg:w-7 ${isActive || isExpanded ? "text-[#2563EB]" : "text-white"}`
                      }
                    ),
                    /* @__PURE__ */ jsx("a", { href: link, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(
                      "h2",
                      {
                        className: `text-3xl font-semibold text-pretty md:text-3xl lg:text-4xl ${isActive || isExpanded ? "text-[#2563EB]" : "text-white"}`,
                        children: company
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: `text-lg font-medium md:text-lg lg:text-xl ${isActive || isExpanded ? "text-stone-400" : "text-[#6E6E6F]"}`,
                      children: role[lang]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `mt-4 flex items-center md:mt-0 ${isActive || isExpanded ? "text-[#2563EB]" : "text-white/75"}`,
                    children: [
                      /* @__PURE__ */ jsx(CalendarDays, { className: "mr-2", size: 16 }),
                      /* @__PURE__ */ jsx("span", { className: "text-base font-medium md:text-base lg:text-lg", children: period[lang] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `text-base leading-relaxed font-medium md:text-base lg:text-lg ${isActive || isExpanded ? "text-white/90" : "text-white/75"} mb-4 text-pretty`,
                  children: description[lang]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: false,
                  animate: {
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                      /* @__PURE__ */ jsxs(
                        "h4",
                        {
                          className: `mb-4 flex items-center text-lg font-semibold ${isActive || isExpanded ? "text-[#2563EB]" : "text-white"}`,
                          children: [
                            /* @__PURE__ */ jsx(Target, { className: "mr-2", size: 20 }),
                            titleAchievements
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 pl-6", children: achievements.map((achievement, i) => /* @__PURE__ */ jsxs(
                        motion.li,
                        {
                          className: "mb-4 flex items-start",
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.5, delay: 0.5 + i * 0.1 },
                          children: [
                            /* @__PURE__ */ jsx(
                              ArrowRight,
                              {
                                className: `mt-1 mr-2 h-5 w-5 ${isActive || isExpanded ? "text-[#2563EB]" : "text-white"} flex-shrink-0`
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "span",
                              {
                                className: `text-base leading-relaxed font-medium md:text-base lg:text-lg ${isActive || isExpanded ? "text-white/90" : "text-white/75"} text-pretty`,
                                children: achievement[lang]
                              }
                            )
                          ]
                        },
                        i
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                      /* @__PURE__ */ jsxs(
                        "h4",
                        {
                          className: `mb-4 flex items-center text-lg font-semibold ${isActive || isExpanded ? "text-[#2563EB]" : "text-white"}`,
                          children: [
                            /* @__PURE__ */ jsx(Sparkles, { className: "mr-2", size: 20 }),
                            titleSkills
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: skills.map(({ id: id2, name, icon }, i) => /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex items-center gap-2 rounded-full bg-black/90 px-4 py-2 shadow-sm transition-colors duration-200",
                          children: [
                            /* @__PURE__ */ jsx("img", { src: icon, alt: name, className: "h-6 w-6" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white/95", children: name })
                          ]
                        },
                        i
                      )) })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "mt-5 flex justify-center",
                  animate: { rotate: isExpanded ? 180 : 0 },
                  transition: { duration: 0.3 },
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: "text-white/75", size: 24 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-green-500",
            initial: { width: "0%" },
            animate: { width: isActive || isExpanded ? "100%" : "0%" },
            transition: { duration: 0.3 }
          }
        )
      ]
    },
    id
  );
};

const $$Astro$h = createAstro("http://localhost:4321/");
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Experience;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const experience = t("experience");
  const title = experience.title;
  const achievements = experience.achievements;
  const skills = experience.skills;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": title, "icon": $$BriefcaseBusiness, "id": "experience", "minHeight": "min-h-max", "order": 1 }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-6 space-y-8 pb-8"> ${experiences.map((experience2) => renderTemplate`${renderComponent($$result2, "ExperienceCard", ExperienceCard, { "experience": experience2, "lang": lang, "titleAchievements": achievements, "titleSkills": skills, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/ExperienceCard", "client:component-export": "ExperienceCard" })}`)} </div> ` })}`;
}, "E:/Repositorios/Astro/portfolio.dev/src/sections/Experience.astro", void 0);

const $$Astro$g = createAstro("http://localhost:4321/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project, lang, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`relative overflow-hidden rounded-xl md:rounded-3xl shadow-lg group ${className} select-none flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-x-4`, "class")}> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="h-full w-full md:w-1/2 rounded-xl md:rounded-3xl object-cover"> <div class="w-full flex flex-col items-center justify-between gap-y-2 p-2 md:p-6 lg:p-8"> <div> <h3 class="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-500 md:text-3xl text-start"> ${project.title} </h3> <p class="mb-6 text-base leading-relaxed font-medium text-white transition-colors md:text-base"> ${project.description[lang]} </p> ${project.skills && project.skills.length > 0 && renderTemplate`<div class="mb-6 flex flex-wrap gap-2"> ${project.skills.map((tag) => renderTemplate`<span${addAttribute(`rounded-lg bg-[#323233] px-3 py-1 text-xs font-medium shadow-sm transition-all duration-200 ${tag.color || "text-gray-200"}`, "class")}> ${tag.name} </span>`)} </div>`} </div> <div class="animate-fade-in-projects mt-auto flex items-center justify-center gap-4"> ${project.repoLink && renderTemplate`<a${addAttribute(project.repoLink, "href")} target="_blank" aria-label="Repositorio de GitHub" rel="noopener noreferrer" class="group relative flex w-max cursor-pointer items-center justify-center space-x-1.5 rounded-lg bg-transparent p-3 transition-all duration-150 md:space-x-2 text-white hover:bg-black hover:text-[#2563EB]"> ${renderComponent($$result, "Github", $$Github, { "className": "text-white", "width": "24", "height": "24" })} <span class="relative text-base font-medium md:text-lg">
Ver Repositorio
<span class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-blue-700 transition-all duration-150 group-hover:w-full"></span> </span> </a>`} ${project.viewLink && renderTemplate`<a${addAttribute(project.viewLink, "href")} target="_blank" aria-label="Ver demo del proyecto" rel="noopener noreferrer" class="group relative flex w-max cursor-pointer items-center justify-center space-x-1.5 rounded-lg bg-transparent p-3 transition-all duration-150 md:space-x-2 text-white hover:bg-black hover:text-[#2563EB]"> <span class="relative text-base font-medium md:text-lg">
Demo
<span class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-blue-700 transition-all duration-150 group-hover:w-full"></span> </span> ${renderComponent($$result, "ExternalLink", ExternalLink, { "width": "24", "height": "24" })} </a>`} </div> </div> </article>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/ProjectCard.astro", void 0);

const $$Astro$f = createAstro("http://localhost:4321/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const porj = t("projects");
  const title = porj.title;
  const viewMore = porj.viewMore;
  const archive = porj.archive;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": title, "icon": $$FolderCode, "id": "projects", "minHeight": "h-max", "order": 2 }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative grid h-full w-full grid-cols-1 gap-6 py-8"> ${projects.slice(0, 3).map((project, idx) => renderTemplate`<div class="relative flex flex-col justify-between overflow-hidden rounded-xl p-0 shadow-xl transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl md:rounded-3xl"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project, "lang": lang })} </div>`)} </div> <div class="mt-8 flex w-full justify-center md:justify-end"> <a href="archive/" class="group inline-flex items-center gap-1.5 text-white transition-all duration-300"> <span class="text-base font-medium md:text-lg lg:text-xl"> ${viewMore} </span> <span class="relative text-base font-semibold text-blue-500 md:text-lg lg:text-xl"> ${archive} <span class="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span> </span> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" })} </a> </div> ` })}`;
}, "E:/Repositorios/Astro/portfolio.dev/src/sections/Projects.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$e = createAstro("http://localhost:4321/");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const cta = t("cta");
  const available = cta.available;
  const idea = cta.idea;
  const makeReal = cta.makeReal;
  const description = cta.description;
  const modern = cta.modern;
  const and = cta.and;
  const scalable = cta.scalable;
  const team = cta.team;
  const contact = cta.contact;
  return renderTemplate(_a || (_a = __template(["", '<div id="meteor-container" class="relative mt-8 flex flex-col items-center justify-center px-4 py-20"> <div class="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8"> <div class="mb-6 flex justify-center"> <div class="flex items-center space-x-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 shadow-md backdrop-blur-md"> ', ' <span class="text-base font-medium md:text-lg">', '</span> </div> </div> <h2 class="flex flex-col items-center justify-center text-4xl font-extrabold md:text-6xl"> <span class="text-white drop-shadow-md">', '</span> <span class="shimmer-text bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">', '</span> </h2> <p class="my-6 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl"> ', '<span class="font-semibold text-blue-400">', "", "</span> ", ' <span class="font-semibold text-purple-400">', '</span>.<br><span class="font-medium text-cyan-300">', '</span> </p> <div class="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"> <a href="https://www.linkedin.com/in/alexvdev/" target="_blank" class="group glow-hover flex items-center space-x-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto"> ', " <span>LinkedIn</span> ", ' </a> <a href="mailto:alexvalverde.dev@gmail.com" class="group glow-hover flex items-center space-x-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto"> ', " <span>", "</span> ", ' </a> </div> </div> </div> <style>\n  #meteor-container {\n    background: radial-gradient(ellipse at bottom, #05080c 0%, #000 80%);\n    overflow: hidden;\n  }\n  .star {\n    position: absolute;\n    background: white;\n    opacity: 0;\n    border-radius: 50%;\n    animation: twinkle 4s infinite ease-in-out;\n  }\n  @keyframes twinkle {\n    0%,\n    100% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0.8;\n    }\n  }\n\n  .meteor {\n    position: absolute;\n    top: -40px;\n    width: 60px;\n    height: 20px;\n    animation: fall linear infinite;\n    pointer-events: none;\n  }\n  @keyframes fall {\n    to {\n      transform: translateY(120vh) translateX(30px) rotate(45deg);\n      opacity: 0;\n    }\n  }\n\n  .explosion {\n    position: absolute;\n    bottom: 0;\n    width: 16px;\n    height: 16px;\n    background: radial-gradient(circle, #93c5fd, transparent);\n    border-radius: 50%;\n    animation: explode 0.5s ease-out forwards;\n    pointer-events: none;\n  }\n  @keyframes explode {\n    from {\n      transform: scale(0.5);\n      opacity: 0.8;\n    }\n    to {\n      transform: scale(4);\n      opacity: 0;\n    }\n  }\n\n  .glow-hover:hover {\n    box-shadow:\n      0 0 12px rgba(255, 255, 255, 0.4),\n      0 0 30px var(--tw-shadow-color);\n  }\n  @keyframes floatPulse {\n    0%,\n    100% {\n      transform: translateY(0);\n    }\n    50% {\n      transform: translateY(-5px);\n    }\n  }\n  .animate-float {\n    animation: floatPulse 3s ease-in-out infinite;\n  }\n  @keyframes shimmer {\n    0% {\n      background-position: -200% center;\n    }\n    100% {\n      background-position: 200% center;\n    }\n  }\n  .shimmer-text {\n    background-size: 400% auto;\n    animation: shimmer 6s linear infinite;\n  }\n</style> <script>\n  const container = document.querySelector("#meteor-container");\n  if (container) {\n    // Estrellas aleatorias\n    for (let i = 0; i < 100; i++) {\n      const star = document.createElement("div");\n      star.className = "star";\n      const size = Math.random() * 2 + 1;\n      star.style.width = star.style.height = `${size}px`;\n      star.style.left = `${Math.random() * 100}vw`;\n      star.style.top = `${Math.random() * 100}vh`;\n      star.style.animationDuration = `${2 + Math.random() * 3}s`;\n      container.appendChild(star);\n    }\n\n    // Meteoritos\n    setInterval(() => {\n      const meteor = document.createElementNS(\n        "http://www.w3.org/2000/svg",\n        "svg"\n      );\n      meteor.classList.add("meteor");\n      meteor.style.left = `${Math.random() * 100}vw`;\n      meteor.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;\n\n      const line = document.createElementNS(\n        "http://www.w3.org/2000/svg",\n        "line"\n      );\n      line.setAttribute("x1", "0");\n      line.setAttribute("y1", "0");\n      line.setAttribute("x2", "60");\n      line.setAttribute("y2", "0");\n      line.setAttribute("stroke", "url(#grad)");\n      line.setAttribute("stroke-width", "4");\n      meteor.appendChild(line);\n\n      const grad = document.createElementNS(\n        "http://www.w3.org/2000/svg",\n        "defs"\n      );\n      grad.innerHTML = `\n        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">\n          <stop offset="0%" stop-color="#3b82f6" />\n          <stop offset="100%" stop-color="transparent" />\n        </linearGradient>`;\n      meteor.appendChild(grad);\n\n      meteor.addEventListener("animationend", () => {\n        const explosion = document.createElement("div");\n        explosion.className = "explosion";\n        explosion.style.left = meteor.style.left;\n        container.appendChild(explosion);\n        setTimeout(() => explosion.remove(), 600);\n        meteor.remove();\n      });\n\n      container.appendChild(meteor);\n    }, 300);\n  }\n<\/script>'], ["", '<div id="meteor-container" class="relative mt-8 flex flex-col items-center justify-center px-4 py-20"> <div class="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8"> <div class="mb-6 flex justify-center"> <div class="flex items-center space-x-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 shadow-md backdrop-blur-md"> ', ' <span class="text-base font-medium md:text-lg">', '</span> </div> </div> <h2 class="flex flex-col items-center justify-center text-4xl font-extrabold md:text-6xl"> <span class="text-white drop-shadow-md">', '</span> <span class="shimmer-text bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">', '</span> </h2> <p class="my-6 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl"> ', '<span class="font-semibold text-blue-400">', "", "</span> ", ' <span class="font-semibold text-purple-400">', '</span>.<br><span class="font-medium text-cyan-300">', '</span> </p> <div class="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"> <a href="https://www.linkedin.com/in/alexvdev/" target="_blank" class="group glow-hover flex items-center space-x-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto"> ', " <span>LinkedIn</span> ", ' </a> <a href="mailto:alexvalverde.dev@gmail.com" class="group glow-hover flex items-center space-x-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto"> ', " <span>", "</span> ", ' </a> </div> </div> </div> <style>\n  #meteor-container {\n    background: radial-gradient(ellipse at bottom, #05080c 0%, #000 80%);\n    overflow: hidden;\n  }\n  .star {\n    position: absolute;\n    background: white;\n    opacity: 0;\n    border-radius: 50%;\n    animation: twinkle 4s infinite ease-in-out;\n  }\n  @keyframes twinkle {\n    0%,\n    100% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0.8;\n    }\n  }\n\n  .meteor {\n    position: absolute;\n    top: -40px;\n    width: 60px;\n    height: 20px;\n    animation: fall linear infinite;\n    pointer-events: none;\n  }\n  @keyframes fall {\n    to {\n      transform: translateY(120vh) translateX(30px) rotate(45deg);\n      opacity: 0;\n    }\n  }\n\n  .explosion {\n    position: absolute;\n    bottom: 0;\n    width: 16px;\n    height: 16px;\n    background: radial-gradient(circle, #93c5fd, transparent);\n    border-radius: 50%;\n    animation: explode 0.5s ease-out forwards;\n    pointer-events: none;\n  }\n  @keyframes explode {\n    from {\n      transform: scale(0.5);\n      opacity: 0.8;\n    }\n    to {\n      transform: scale(4);\n      opacity: 0;\n    }\n  }\n\n  .glow-hover:hover {\n    box-shadow:\n      0 0 12px rgba(255, 255, 255, 0.4),\n      0 0 30px var(--tw-shadow-color);\n  }\n  @keyframes floatPulse {\n    0%,\n    100% {\n      transform: translateY(0);\n    }\n    50% {\n      transform: translateY(-5px);\n    }\n  }\n  .animate-float {\n    animation: floatPulse 3s ease-in-out infinite;\n  }\n  @keyframes shimmer {\n    0% {\n      background-position: -200% center;\n    }\n    100% {\n      background-position: 200% center;\n    }\n  }\n  .shimmer-text {\n    background-size: 400% auto;\n    animation: shimmer 6s linear infinite;\n  }\n</style> <script>\n  const container = document.querySelector("#meteor-container");\n  if (container) {\n    // Estrellas aleatorias\n    for (let i = 0; i < 100; i++) {\n      const star = document.createElement("div");\n      star.className = "star";\n      const size = Math.random() * 2 + 1;\n      star.style.width = star.style.height = \\`\\${size}px\\`;\n      star.style.left = \\`\\${Math.random() * 100}vw\\`;\n      star.style.top = \\`\\${Math.random() * 100}vh\\`;\n      star.style.animationDuration = \\`\\${2 + Math.random() * 3}s\\`;\n      container.appendChild(star);\n    }\n\n    // Meteoritos\n    setInterval(() => {\n      const meteor = document.createElementNS(\n        "http://www.w3.org/2000/svg",\n        "svg"\n      );\n      meteor.classList.add("meteor");\n      meteor.style.left = \\`\\${Math.random() * 100}vw\\`;\n      meteor.style.animationDuration = \\`\\${1.2 + Math.random() * 0.8}s\\`;\n\n      const line = document.createElementNS(\n        "http://www.w3.org/2000/svg",\n        "line"\n      );\n      line.setAttribute("x1", "0");\n      line.setAttribute("y1", "0");\n      line.setAttribute("x2", "60");\n      line.setAttribute("y2", "0");\n      line.setAttribute("stroke", "url(#grad)");\n      line.setAttribute("stroke-width", "4");\n      meteor.appendChild(line);\n\n      const grad = document.createElementNS(\n        "http://www.w3.org/2000/svg",\n        "defs"\n      );\n      grad.innerHTML = \\`\n        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">\n          <stop offset="0%" stop-color="#3b82f6" />\n          <stop offset="100%" stop-color="transparent" />\n        </linearGradient>\\`;\n      meteor.appendChild(grad);\n\n      meteor.addEventListener("animationend", () => {\n        const explosion = document.createElement("div");\n        explosion.className = "explosion";\n        explosion.style.left = meteor.style.left;\n        container.appendChild(explosion);\n        setTimeout(() => explosion.remove(), 600);\n        meteor.remove();\n      });\n\n      container.appendChild(meteor);\n    }, 300);\n  }\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Coffee", Coffee, { "className": "animate-float h-8 w-8 text-amber-400" }), available, idea, makeReal, description, " ", modern, and, scalable, team, renderComponent($$result, "Linkedin", $$Linkedin, { "class": "text-white", "width": "24", "height": "24" }), renderComponent($$result, "ArrowRight", ArrowRight, { "className": "h-5 w-5 transition-transform group-hover:translate-x-1" }), renderComponent($$result, "Mail", $$Mail, { "class": "text-white", "width": "24", "height": "24" }), contact, renderComponent($$result, "ArrowRight", ArrowRight, { "className": "h-5 w-5 transition-transform group-hover:translate-x-1" }));
}, "E:/Repositorios/Astro/portfolio.dev/src/sections/CallToAction.astro", void 0);

const $$Astro$d = createAstro("http://localhost:4321/");
const $$CardProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CardProfile;
  const { name, username, image, status, quote } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card-animate animate-delay-100 relative col-span-1 row-span-1 flex flex-col items-center justify-between rounded-3xl border border-gray-600/20 p-6 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl md:p-7 lg:col-span-1 lg:row-span-1 bg-[#181818] hover:bg-[#1f1f1f]"> <header class="flex h-max w-full items-start justify-between"> <div class="h-auto w-24 overflow-hidden rounded-full border border-green-500 bg-white/80"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="h-full w-full scale-110 bg-transparent object-cover"> </div> <div class="ml-4 flex h-full w-full flex-col items-start justify-center gap-y-1"> <h2 class="text-xl font-medium tracking-wide text-nowrap md:text-xl lg:text-xl text-white"> ${name} </h2> <div class="flex w-full items-center justify-between gap-x-2"> <span class="text-lg font-medium text-[#6E6E6F]"> ${username} </span> <span class="rounded-2xl border border-green-600 bg-green-500 px-3 py-1 text-xs font-light tracking-wide text-white"> ${status} </span> </div> </div> </header> <div class="mt-2 flex h-full w-full items-center justify-center"> <p class="pt-4 text-center text-lg font-medium md:pt-2 md:text-xl text-gray-300"> ${quote} </p> </div> </article>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/CardProfile.astro", void 0);

const $$Astro$c = createAstro("http://localhost:4321/");
const $$CardPersonalSide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CardPersonalSide;
  const { title, paragraphs, icons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group card-hover-effect relative col-span-1 row-span-2 flex flex-col items-center justify-start overflow-hidden rounded-3xl border border-gray-600/20 transition-all duration-300 lg:col-span-2 lg:row-span-3 bg-[#181818] hover:bg-[#1f1f1f]" data-astro-cid-vgem7cmu> <div class="h-full w-full p-6 md:p-6 lg:p-8" data-astro-cid-vgem7cmu> <header class="mb-6 flex h-max w-full items-start" data-astro-cid-vgem7cmu> <h2 class="title-animate text-3xl font-semibold text-pretty md:text-3xl lg:text-4xl text-white" data-astro-cid-vgem7cmu> ${title} </h2> </header> <div class="mb-14 h-max w-full flex-col items-start justify-start" data-astro-cid-vgem7cmu> ${paragraphs.map((text) => renderTemplate`<p class="mb-5 text-base leading-relaxed font-medium text-pretty md:text-base lg:text-lg text-white/75" data-astro-cid-vgem7cmu> ${text} </p>`)} </div> <div class="flex h-max w-full items-center justify-between px-4 lg:px-10" data-astro-cid-vgem7cmu> ${icons.map(({ src, alt }, index) => {
    const iconClass = [
      "icon-animate",
      index === 0 ? "ball-float" : index === 1 ? "dog-float" : index === 2 ? "food-float" : index === 3 ? "joystick-float" : ""
    ].join(" ");
    return renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy"${addAttribute(iconClass + " h-14 w-14 object-contain lg:h-20 lg:w-20", "class")} data-astro-cid-vgem7cmu>`;
  })} </div> </div> </article> `;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/CardPersonalSide.astro", void 0);

const $$Astro$b = createAstro("http://localhost:4321/");
const $$CardSkills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CardSkills;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group card-hover-effect relative col-span-1 row-span-1 flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-600/20 lg:col-span-1 lg:row-span-2 bg-[#181818] hover:bg-[#1f1f1f] transition-all duration-300" data-astro-cid-gjpjkq4o> <div class="flex h-full w-full flex-col items-center justify-center p-6 md:p-6 lg:p-8" data-astro-cid-gjpjkq4o> <header class="mb-6 flex h-max w-full items-start" data-astro-cid-gjpjkq4o> <h2 class="title-animate text-3xl font-semibold text-pretty md:text-3xl lg:text-4xl text-white" data-astro-cid-gjpjkq4o> ${title} </h2> </header> <div class="flex h-full w-full flex-col items-center justify-center" data-astro-cid-gjpjkq4o> <div class="flex h-full w-full flex-wrap items-center justify-center gap-1" data-astro-cid-gjpjkq4o> ${skills.map(
    ({ skill, className = "bg-gray-200 text-gray-800" }, index) => renderTemplate`<div${addAttribute(`flex h-fit w-fit items-center justify-center rounded-xl px-2 py-1 text-base font-medium transition-all duration-300 hover:scale-110 ${className}`, "class")} data-astro-cid-gjpjkq4o> ${skill} </div>`
  )} </div> </div> </div> </article> `;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/CardSkills.astro", void 0);

const $$Astro$a = createAstro("http://localhost:4321/");
const $$CardEducacion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CardEducacion;
  const { title, degree, location, years, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group card-hover-effect relative overflow-hidden flex flex-col items-center justify-stretch col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-1 rounded-3xl border bg-[#181818] hover:bg-[#1f1f1f] transition-all duration-300" data-astro-cid-q6bshino> <div class="p-6 md:p-6 lg:p-8 w-full h-full" data-astro-cid-q6bshino> <header class="w-full h-max flex items-start mb-6" data-astro-cid-q6bshino> <h2 class="title-animate text-3xl md:text-3xl lg:text-4xl font-semibold text-pretty text-white" data-astro-cid-q6bshino> ${title} </h2> </header> <div class="w-full" data-astro-cid-q6bshino> <h3 class="text-xl md:text-2xl text-wrap font-semibold text-white" data-astro-cid-q6bshino> ${degree} </h3> <div class="w-full mt-2 mb-3 flex items-start justify-start" data-astro-cid-q6bshino> <span class="text-nowrap font-semibold text-base md:text-base lg:text-lg text-[#6E6E6F]" data-astro-cid-q6bshino> ${location} </span> <span class="w-px h-4 md:h-5 bg-stone-500 mx-2 my-1" data-astro-cid-q6bshino></span> <span class="text-nowrap font-semibold text-base md:text-base lg:text-lg text-[#6E6E6F]" data-astro-cid-q6bshino> ${years} </span> </div> <p class="text-base md:text-base lg:text-lg text-pretty leading-relaxed font-medium text-white/75" data-astro-cid-q6bshino> ${description} </p> </div> </div> </article> `;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/CardEducacion.astro", void 0);

const $$Astro$9 = createAstro("http://localhost:4321/");
const $$CardWork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CardWork;
  const { title, paragraph1, paragraph2, imageSrc, imageAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group card-hover-effect relative overflow-hidden flex flex-col items-start justify-start col-span-1 row-span-2 md:col-span-2 md:row-span-3 lg:col-span-3 lg:row-span-3 rounded-3xl border border-gray-600/20 bg-[#181818] hover:bg-[#1f1f1f] transition-all duration-300" data-astro-cid-qjtwhs57> <div class="p-6 md:p-6 lg:p-8 w-full h-full pb-56 md:pb-72 lg:pb-80" data-astro-cid-qjtwhs57> <header class="w-full h-max flex items-start mb-6" data-astro-cid-qjtwhs57> <h2 class="title-animate text-3xl md:text-3xl lg:text-4xl font-semibold text-pretty text-white" data-astro-cid-qjtwhs57> ${title} </h2> </header> <div class="w-full h-max flex flex-col items-start justify-start" data-astro-cid-qjtwhs57> <p class="text-base md:text-base lg:text-lg text-pretty leading-relaxed font-medium mb-5 text-white/75" data-astro-cid-qjtwhs57> ${paragraph1} </p> <p class="text-base md:text-base lg:text-lg text-pretty leading-relaxed font-medium text-white/75" data-astro-cid-qjtwhs57> ${paragraph2} </p> </div> <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden w-[85%] md:w-[85%] lg:w-4/5 mx-auto h-auto shadow-2xl shadow-black/20 opacity-95 rounded-t-lg transition-transform duration-500 scale-105 hover:scale-110" style="mask-image: linear-gradient(black 90%, transparent);" data-astro-cid-qjtwhs57> <img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-full object-cover rounded-xl filter contrast-125 brightness-90 saturate-150 transition-all duration-500 hover:contrast-150 hover:brightness-100" loading="lazy" decoding="async" data-astro-cid-qjtwhs57> </div> </div> </article> `;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/CardWork.astro", void 0);

const $$Astro$8 = createAstro("http://localhost:4321/");
const $$CardLocation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CardLocation;
  const {
    location,
    country,
    flagSrc,
    timeDifference,
    hours,
    minutes,
    utcOffset,
    currentDate,
    title
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group card-hover-effect relative col-span-1 row-span-1 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-600/20 transition-all duration-300 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 bg-[#181818]" data-astro-cid-lqxdvzmb> <div class="h-full w-full p-6 md:p-6 lg:p-8" data-astro-cid-lqxdvzmb> <header class="mb-6 flex h-max w-full items-start" data-astro-cid-lqxdvzmb> <h2 class="title-animate text-3xl font-semibold text-pretty md:text-3xl lg:text-4xl text-white" data-astro-cid-lqxdvzmb> ${title} </h2> </header> <div class="h-max w-full" data-astro-cid-lqxdvzmb> <div class="flex h-full w-full flex-col items-center justify-center md:flex-row md:items-center md:justify-center lg:flex-col lg:justify-start" data-astro-cid-lqxdvzmb> <div class="flex w-full flex-col items-center justify-center gap-y-2 lg:pt-4" data-astro-cid-lqxdvzmb> <p class="text-3xl font-bold md:text-4xl text-white" data-astro-cid-lqxdvzmb> ${location}${" "}<span class="bg-gradient-to-r bg-clip-text text-transparent from-red-600 via-white to-red-600" data-astro-cid-lqxdvzmb>Perú</span> </p> <div class="flex items-center gap-x-2" data-astro-cid-lqxdvzmb> <img${addAttribute(flagSrc, "src")}${addAttribute(`Bandera de ${country}`, "alt")} class="h-6 w-6 object-cover" data-astro-cid-lqxdvzmb> <p class="text-xl md:text-2xl text-white/90" data-astro-cid-lqxdvzmb> ${country} </p> </div> <p class="text-center text-lg leading-relaxed text-pretty text-white/75" data-astro-cid-lqxdvzmb> ${timeDifference} </p> </div> <div class="my-2 h-px w-4/5 bg-[#6E6E6F] md:mx-4 md:my-0 md:h-32 md:w-px lg:mx-0 lg:my-2 lg:h-px lg:w-4/5" data-astro-cid-lqxdvzmb></div> <div class="flex w-full flex-col items-center justify-end lg:justify-center" data-astro-cid-lqxdvzmb> <div class="flex h-max w-full items-end justify-center gap-x-2" data-astro-cid-lqxdvzmb> <span class="w-max text-center text-4xl font-bold text-nowrap text-[#2563EB] md:text-5xl" data-astro-cid-lqxdvzmb> ${hours === 0 ? "00" : hours}:${minutes < 10 ? `0${minutes}` : minutes} </span> <span class="mb-0.5 text-center text-base leading-relaxed text-pretty md:text-base lg:text-lg text-white/75" data-astro-cid-lqxdvzmb> ${utcOffset} </span> </div> <p class="mt-2 text-center text-base leading-relaxed text-pretty md:text-base lg:text-lg text-white/75" data-astro-cid-lqxdvzmb> ${currentDate} </p> </div> </div> </div> </div> </article> `;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/CardLocation.astro", void 0);

const skills = [
  {
    skill: "JavaScript",
    className: "text-yellow-500"
  },
  {
    skill: "TypeScript",
    className: "text-blue-500"
  },
  {
    skill: "PHP",
    className: "text-indigo-500"
  },
  {
    skill: "Laravel",
    className: "text-red-500"
  },
  {
    skill: "React.js",
    className: "text-sky-500"
  },
  {
    skill: "Next.js",
    className: "text-gray-800 dark:text-gray-300"
  },
  {
    skill: "Node.js",
    className: "text-green-600"
  },
  {
    skill: "Astro",
    className: "text-orange-400"
  },
  {
    skill: "MySQL",
    className: "text-blue-600"
  },
  {
    skill: "MongoDB",
    className: "text-green-500"
  },
  {
    skill: "PostgreSQL",
    className: "text-sky-700"
  },
  {
    skill: "Redux",
    className: "text-purple-600"
  },
  {
    skill: "Tailwind",
    className: "text-sky-400"
  },
  {
    skill: "Jest",
    className: "text-red-600"
  },
  {
    skill: "PHPUnit",
    className: "text-indigo-500"
  },
  {
    skill: "Git",
    className: "text-orange-500"
  },
  {
    skill: "Docker",
    className: "text-blue-500"
  },
  {
    skill: "AWS",
    className: "text-orange-600"
  },
  {
    skill: "Linux",
    className: "text-gray-800 dark:text-gray-300"
  },
  {
    skill: "Jira",
    className: "text-blue-400"
  }
];

const $$Astro$7 = createAstro("http://localhost:4321/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$About;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const about = t("about");
  const title = about.title;
  const profile = about.profile;
  const personal = about.personal;
  const skillsTitle = about.skills;
  const work = about.work;
  const education = about.education;
  const location = about.location;
  const now = /* @__PURE__ */ new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentDate = now.toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": title, "icon": $$UserRound, "id": "about", "minHeight": "h-max", "order": 3 }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-6 mb-8 grid h-full w-full grid-flow-row grid-cols-1 gap-y-4 p-0 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:grid-rows-6 select-none"> ${renderComponent($$result2, "CardProfile", $$CardProfile, { "name": "Ing. Alexander Valverde", "username": "@aleexvdev", "image": "/about-images/profile.webp", "status": profile.status, "quote": profile.quote })} ${renderComponent($$result2, "CardPersonalSide", $$CardPersonalSide, { "title": personal.title, "paragraphs": personal.paragraphs, "icons": [
    { src: "/about-images/soccer.png", alt: "Soccer" },
    { src: "/about-images/dog.png", alt: "Perrito" },
    { src: "/about-images/pasta.png", alt: "Pasta" },
    { src: "/about-images/joystick.png", alt: "Joystick" }
  ] })} ${renderComponent($$result2, "CardSkills", $$CardSkills, { "title": skillsTitle.title, "skills": skills })} ${renderComponent($$result2, "CardWork", $$CardWork, { "title": work.title, "paragraph1": work.paragraphs[0], "paragraph2": work.paragraphs[1], "imageSrc": "/about-images/method_work.png", "imageAlt": "Mi m\xE9todo de trabajo" })} ${renderComponent($$result2, "CardEducation", $$CardEducacion, { "title": education.title, "degree": education.degree, "location": "Lima, Per\xFA", "years": "2016 - 2021", "description": education.description })} ${renderComponent($$result2, "CardLocation", $$CardLocation, { "location": location.location, "country": "Per\xFA", "flagSrc": "/about-images/bandera.png", "timeDifference": location.timeDifference, "hours": hours, "minutes": minutes, "utcOffset": "UTC-5", "currentDate": currentDate, "title": location.title })} </div> ` })}`;
}, "E:/Repositorios/Astro/portfolio.dev/src/sections/About.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:4321/");
const $$MailCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MailCheck;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-check-icon lucide-mail-check"${spreadAttributes(Astro2.props)}><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/mail-check.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321/");
const $$CardSocialContact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardSocialContact;
  const { method, label, value, color, icon: Icon, labelColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(method.href, "href")}${addAttribute(`relative group w-full flex items-center space-x-5 rounded-xl border border-border bg-background p-2 md:p-5 transition-all duration-300 shadow-sm hover:shadow-xl hover:border-transparent hover:translate-x-1 overflow-hidden`, "class")}> <div${addAttribute(`relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${color} text-white transition-transform duration-500 ease-out group-hover:scale-110`, "class")}> ${renderComponent($$result, "Icon", Icon, { "width": "24", "height": "24", "class": "transition-transform duration-300" })} </div> <div class="relative z-10 flex flex-col"> <h3${addAttribute(`text-base font-semibold transition-colors duration-300 ${labelColor}`, "class")}> ${label} </h3> <p class="text-sm text-muted-foreground transition-opacity duration-300 group-hover:opacity-95"> ${value} </p> </div> <div${addAttribute(`pointer-events-none absolute inset-0 z-0 rounded-xl bg-gradient-to-r ${color} opacity-0 blur-lg transition-opacity duration-700 group-hover:opacity-20`, "class")}></div> </a>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/components/CardSocialContact.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321/");
const $$Discord = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Discord;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 199" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#fff"></path></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/discord.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321/");
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"${spreadAttributes(Astro2.props)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/facebook.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321/");
const $$Gmail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Gmail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" fill="none" stroke="currentColor"${spreadAttributes(Astro2.props)}> <g fill="none" fill-rule="evenodd"> <g fill-rule="nonzero"> <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path> <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path> <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path> </g> <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path> <path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path> </g> </svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/gmail.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321/");
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="instagram"${spreadAttributes(Astro2.props)}> <linearGradient id="a" x1="-37.094" x2="-26.555" y1="-72.719" y2="-84.047" gradientTransform="matrix(0 -1.982 -1.8439 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#fd5"></stop> <stop offset=".5" stop-color="#ff543e"></stop> <stop offset="1" stop-color="#c837ab"></stop> </linearGradient> <path fill="url(#a)" d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 6.336-.158 7.499.602 9.075.635 1.318 1.848 2.308 3.276 2.677 1.144.294 1.904.253 8.1.253 5.194 0 6.81.093 8.157-.255 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.56-.081-.672-.105-3.54-.11-10.173.005-12.403-.448-14.41 1.633z"></path> <path fill="#fff" d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c4.346-.007 7.811-.607 8.006 3.683.072 1.589.072 5.571 0 7.16-.189 4.137-3.339 3.683-7.211 3.683-3.412 0-5.104.121-6.244-1.02-1.157-1.157-1.019-2.811-1.019-6.245 0-4.071-.385-7.026 3.683-7.213.817-.037 1.134-.048 2.785-.05zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c1.631 0 2.953 1.323 2.953 2.954s-1.322 2.954-2.953 2.954-2.953-1.323-2.953-2.954c0-1.632 1.322-2.954 2.953-2.954z"></path> </svg>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/assets/icons/instagram.astro", void 0);

const publicKey = "0x4AAAAAAAxB3NisfwmGnTy7";
const TurnstileWidget = ({ onVerify }) => {
  const turnstileRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    if (window.turnstile && turnstileRef.current) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: String(publicKey),
        callback: onVerify
      });
    }
  }, [onVerify]);
  return /* @__PURE__ */ jsx("div", { ref: turnstileRef, className: "cf-turnstile" });
};

const Toast = ({
  message: initialMessage = "",
  type: initialType = "",
  isVisible: initialIsVisible = false,
  onHide
} = {}) => {
  const [isClient, setIsClient] = useState(false);
  const [message, setMessage] = useState(initialMessage);
  const [type, setType] = useState(initialType);
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    const handleUpdateToast = (event) => {
      const { message: newMessage, type: newType, isVisible: newIsVisible } = event.detail;
      setMessage(newMessage);
      setType(newType);
      setIsVisible(newIsVisible);
    };
    window.addEventListener("updateToast", handleUpdateToast);
    return () => {
      window.removeEventListener("updateToast", handleUpdateToast);
    };
  }, []);
  if (!isClient) {
    return null;
  }
  const icons = {
    success: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-500" }),
    error: /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-500" }),
    loading: /* @__PURE__ */ jsx(Loader2, { className: "w-6 h-6 text-blue-500 animate-spin" })
  };
  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    loading: "bg-blue-50 border-blue-200"
  };
  return ReactDOM.createPortal(
    /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && type !== "" && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100, transition: { duration: 0.2 } },
        className: "fixed bottom-4 left-5 z-50",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            layout: true,
            className: `flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border ${bgColors[type]}`,
            children: [
              icons[type],
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium text-sm md:text-base lg:text-lg", children: message })
            ]
          }
        )
      }
    ) }),
    document.body
  );
};

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  name: yup.string().min(3, "El nombre debe tener al menos 3 caracteres").required("El nombre es obligatorio"),
  subject: yup.string().required("El asunto es obligatorio"),
  message: yup.string().min(10, "El mensaje debe tener al menos 10 caracteres").required("El mensaje es obligatorio")
});

const useToast = () => {
  const [toastState, setToastState] = useState({
    isVisible: false,
    type: "",
    message: ""
  });
  const showToast = (type, message) => {
    setToastState({ isVisible: true, type, message });
    if (type !== "loading" && type !== "") {
      setTimeout(() => {
        setToastState((prev) => ({ ...prev, isVisible: false }));
      }, 3e3);
    }
  };
  return {
    toastState,
    showToast
  };
};

const ContactForm = ({
  translations,
  heading,
  description
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const { toastState, showToast } = useToast();
  const [turnstileToken, setTurnstileToken] = useState("");
  const onSubmit = async (formData) => {
    showToast("loading", "Enviando email...");
    console.log(toastState);
    if (!turnstileToken) {
      showToast("error", "Parece que no eres humano...");
      return;
    }
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        })
      });
      if (response.status === 200) {
        showToast("success", "¡Email enviado!");
        setTimeout(() => {
          reset();
        }, 1e3);
      } else {
        showToast("error", "¡Error! Intente más tarde.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showToast("error", "¡Error! Por favor, inténtelo de nuevo más tarde.");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(motion.div, { className: "group relative mb-8 w-full rounded-2xl border border-white/10 bg-zinc-800/40 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-blue-500/20", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex space-x-2", children: [
        /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-red-500" }),
        /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-yellow-400" }),
        /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-green-500" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-semibold text-pretty text-white md:text-4xl lg:mt-2", children: heading }),
        /* @__PURE__ */ jsx("p", { className: "mt-2.5 w-full text-center text-base leading-relaxed font-medium text-pretty text-white/75 md:text-lg", children: description })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          id: "contact-form",
          className: "space-y-6",
          onSubmit: handleSubmit(onSubmit),
          children: [
            /* @__PURE__ */ jsxs(motion.div, { className: "group relative w-full", children: [
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "email",
                  className: "mb-1 flex items-center gap-2 text-lg font-medium text-gray-300",
                  children: [
                    /* @__PURE__ */ jsx(
                      AtSign,
                      {
                        className: "text-blue-600 transition group-hover:scale-110",
                        width: "20",
                        height: "20"
                      }
                    ),
                    translations.email
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  ...register("email"),
                  required: true,
                  placeholder: translations.emailPlaceholder,
                  className: "mt-2 w-full rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
                }
              ),
              errors.email && /* @__PURE__ */ jsxs(
                motion.p,
                {
                  className: "ml-1.5 flex items-center gap-x-2 py-2 text-sm font-medium text-red-500 lg:text-base",
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: { duration: 0.3 },
                  children: [
                    /* @__PURE__ */ jsx(OctagonX, { className: "h-5 w-5" }),
                    errors.email.message
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(motion.div, { className: "group relative w-full", children: [
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "name",
                  className: "mb-1 flex items-center gap-2 text-lg font-medium text-gray-300",
                  children: [
                    /* @__PURE__ */ jsx(
                      UserCheck,
                      {
                        className: "text-blue-600 transition group-hover:scale-110",
                        width: "20",
                        height: "20"
                      }
                    ),
                    translations.name
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  ...register("name"),
                  required: true,
                  placeholder: translations.namePlaceholder,
                  className: "mt-2 w-full rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
                }
              ),
              errors.name && /* @__PURE__ */ jsxs(
                motion.p,
                {
                  className: "ml-1.5 flex items-center gap-x-2 py-2 text-sm font-medium text-red-500 lg:text-base",
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: { duration: 0.3 },
                  children: [
                    /* @__PURE__ */ jsx(OctagonX, { className: "h-5 w-5" }),
                    errors.name.message
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(motion.div, { className: "group relative w-full", children: [
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "subject",
                  className: "mb-1 flex items-center gap-2 text-lg font-medium text-gray-300",
                  children: [
                    /* @__PURE__ */ jsx(
                      Mail,
                      {
                        className: "text-blue-600 transition group-hover:scale-110",
                        width: "20",
                        height: "20"
                      }
                    ),
                    translations.subject
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "subject",
                  ...register("subject"),
                  required: true,
                  placeholder: translations.subjectPlaceholder,
                  className: "mt-2 w-full rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
                }
              ),
              errors.subject && /* @__PURE__ */ jsxs(
                motion.p,
                {
                  className: "ml-1.5 flex items-center gap-x-2 py-2 text-sm font-medium text-red-500 lg:text-base",
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: { duration: 0.3 },
                  children: [
                    /* @__PURE__ */ jsx(OctagonX, { className: "h-5 w-5" }),
                    errors.subject.message
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(motion.div, { className: "group relative w-full", children: [
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "message",
                  className: "mb-1 flex items-center gap-2 text-lg font-medium text-gray-300",
                  children: [
                    /* @__PURE__ */ jsx(
                      MessagesSquare,
                      {
                        className: "text-blue-600 transition group-hover:scale-110",
                        width: "20",
                        height: "20"
                      }
                    ),
                    translations.message
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  ...register("message"),
                  placeholder: "Déjame saber tus pensamientos, preguntas o ideas...",
                  rows: 5,
                  className: "mt-2 w-full resize-none rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
                }
              ),
              errors.message && /* @__PURE__ */ jsxs(
                motion.p,
                {
                  className: "ml-1.5 flex items-center gap-x-2 py-2 text-sm font-medium text-red-500 lg:text-base",
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: { duration: 0.3 },
                  children: [
                    /* @__PURE__ */ jsx(OctagonX, { className: "h-5 w-5" }),
                    errors.message.message
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsx(TurnstileWidget, { onVerify: setTurnstileToken }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col items-center justify-center gap-2 py-2 text-center md:flex-row md:text-end", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "reset",
                  onClick: () => reset(),
                  className: "flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-gray-500 to-gray-600 px-4 py-2 font-semibold text-white shadow-lg transition hover:from-gray-600 hover:to-gray-700 hover:shadow-xl focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none md:w-full",
                  children: [
                    /* @__PURE__ */ jsx(
                      RefreshCcw,
                      {
                        className: "mr-2 inline-block",
                        width: "20",
                        height: "20"
                      }
                    ),
                    translations.reset
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:w-full",
                  children: isSubmitting ? toastState.type === "loading" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      Loader2,
                      {
                        className: "mr-2 inline-block",
                        width: "20",
                        height: "20"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-base font-medium md:text-lg", children: translations.sending })
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      Send,
                      {
                        className: "mr-2 inline-block",
                        width: "20",
                        height: "20"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-base font-medium md:text-lg", children: translations.submit })
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Send, { className: "mr-2 inline-block", width: "20", height: "20" }),
                    /* @__PURE__ */ jsx("span", { className: "text-base font-medium md:text-lg", children: translations.submit })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-4 text-center text-sm font-semibold text-gray-400", children: /* @__PURE__ */ jsx("span", { children: translations.privacy }) })
    ] }),
    /* @__PURE__ */ jsx(Toast, { ...toastState, onHide: () => setTimeout(() => reset(), 1e3) })
  ] });
};

const $$Astro = createAstro("http://localhost:4321/");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const contact = t("contact");
  const title = contact.title;
  const heading = contact.heading;
  const description = contact.description;
  const form = contact.form;
  const thanks = contact.thanks;
  const connect = contact.connect;
  const equationIdea = contact.equationIdea;
  const equationExperience = contact.equationExperience;
  const equationEquals = contact.equationEquals;
  const contactMethods = [
    {
      icon: $$Gmail,
      label: "Correo electr\xF3nico",
      value: "alexvalverde.dev@gamil.com",
      href: "mailto:alexvalverde.dev@gamil.com",
      color: "from-neutral-700 to-neutral-600",
      labelColor: "text-red-600"
    },
    {
      icon: $$Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alexvdev",
      href: "https://www.linkedin.com/in/alexvdev/",
      color: "from-sky-600 to-sky-700",
      labelColor: "text-sky-700"
    },
    {
      icon: $$Discord,
      label: "Discord",
      value: "alexvdev#6865",
      href: "https://discordapp.com/users/550184376441503744",
      color: "from-indigo-400 to-indigo-600",
      labelColor: "text-indigo-500"
    },
    {
      icon: $$Facebook,
      label: "Facebook",
      value: "facebook.com/alexvalverde666",
      href: "https://www.facebook.com/alexvalverde666",
      color: "from-blue-600 to-blue-700",
      labelColor: "text-blue-700"
    },
    {
      icon: $$Instagram,
      label: "Instagram",
      value: "instagram.com/alexvalverde._",
      href: "https://www.instagram.com/alexvalverde._/",
      color: "from-neutral-700 to-gray-600",
      labelColor: "text-pink-600"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": title, "icon": $$MailCheck, "id": "contact", "order": 4 }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-6 mb-8 flex h-full w-full flex-col items-start justify-between lg:flex-row"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "translations": form, "heading": heading, "description": description, "client:component-hydration": "load", "client:component-path": "@/components/react/ContactForm", "client:component-export": "ContactForm" })} <div class="mt-6 flex h-full w-full flex-col items-center justify-center overflow-hidden transition-all duration-300 md:pl-4 lg:mt-10"> <header class="mb-4 w-full text-center text-3xl font-semibold text-pretty text-white md:text-4xl"> ${thanks} </header> <p class="w-full text-center text-base leading-relaxed font-medium text-pretty text-white/75 md:text-lg"> ${connect} </p> <p class="mb-6 w-full text-center text-base leading-relaxed font-medium text-pretty text-white/75 md:mb-10 md:text-lg"> ${equationIdea}${" "}<span class="text-green-600">+</span>${" "}${equationExperience}${" "}<span class="text-green-600">=</span>${" "}${equationEquals} </p> <div class="mb-8 grid h-full w-full grid-cols-1 items-center space-y-6 px-0 md:px-6"> ${contactMethods.map((method, index) => renderTemplate`${renderComponent($$result2, "CardSocialContact", $$CardSocialContact, { "method": method, "label": method.label, "value": method.value, "color": method.color, "icon": method.icon })}`)} </div> </div> </div> ` })} `;
}, "E:/Repositorios/Astro/portfolio.dev/src/sections/Contact.astro", void 0);

function MousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return mousePosition;
}
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((char) => char + char).join("");
  }
  const hexInt = parseInt(hex, 16);
  const red = hexInt >> 16 & 255;
  const green = hexInt >> 8 & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}
const Particles = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mousePosition = MousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const rafID = useRef(null);
  const resizeTimeout = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        initCanvas();
      }, 200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (rafID.current != null) {
        window.cancelAnimationFrame(rafID.current);
      }
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);
  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y]);
  useEffect(() => {
    initCanvas();
  }, [refresh]);
  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };
  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };
  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    }
  };
  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism
    };
  };
  const rgb = hexToRgb(color);
  const drawCircle = (circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size: size2, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size2, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!update) {
        circles.current.push(circle);
      }
    }
  };
  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
    }
  };
  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };
  const remapValue = (value, start1, end1, start2, end2) => {
    const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };
  const animate = () => {
    clearContext();
    circles.current.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        // distance from left edge
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        // distance from right edge
        circle.y + circle.translateY - circle.size,
        // distance from top edge
        canvasSize.current.h - circle.y - circle.translateY - circle.size
        // distance from bottom edge
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;
      drawCircle(circle, true);
      if (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size || circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size) {
        circles.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      }
    });
    rafID.current = window.requestAnimationFrame(animate);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("absolute pointer-events-none w-screen h-screen overflow-hidden", className),
      ref: canvasContainerRef,
      "aria-hidden": "true",
      ...props,
      children: /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "size-full" })
    }
  );
};

export { $$Layout as $, Particles as P, $$Hero as a, $$Experience as b, $$CallToAction as c, $$Projects as d, $$About as e, $$Contact as f };

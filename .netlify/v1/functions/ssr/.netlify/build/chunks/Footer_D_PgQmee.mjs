import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Languages, ChevronUp } from 'lucide-react';
import { useScroll, useSpring, useAnimation, motion } from 'framer-motion';
import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_Dx6Wyndb.mjs';
import 'kleur/colors';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        navbar: "bg-transparent hover:bg-accent hover:text-accent-foreground dark:border-input dark:hover:bg-input/50 text-base font-medium"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[999] max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

function LanguageToogle({ currentLang }) {
  const toggleLanguage = (lang) => {
    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/^\/en(\/|$)/, "/");
    const newPath = lang === "es" ? basePath : `/en${basePath}`;
    window.location.href = newPath;
  };
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "navbar", className: "cursor-pointer border-none hover:scale-105 transition-all duration-300 outline-none", children: [
      /* @__PURE__ */ jsx(Languages, { className: "w-10 h-10" }),
      /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 uppercase", children: currentLang })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => toggleLanguage("es"), disabled: currentLang === "es", children: /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300", children: "Español" }) }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => toggleLanguage("en"), disabled: currentLang === "en", children: /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300", children: "English" }) })
    ] })
  ] });
}

const baseImagePath = "/projects/";
const projects = [
  {
    image: `${baseImagePath}CodeRender.png`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "A web application that creates and shares stunning images of your code. CodeRender is a web tool that lets you transform your code snippets into elegant, customizable images, ready to share on social media, blogs, or in your documentation.",
      es: "Una aplicación web que crea y comparte imágenes de tu código con un aspecto increíble. CodeRender es una herramienta web que te permite transformar tus fragmentos de código en imágenes elegantes y personalizables, listas para compartir en redes sociales, blogs o en tu documentación."
    },
    title: "Secure Auth",
    repoLink: "https://github.com/aleexvdev/secure-auth/",
    viewLink: "https://secureauth-alexvdev.netlify.app/"
  },
  {
    image: `${baseImagePath}SecureAuth.png`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "SecureAuth is a robust, full-stack application designed to provide a secure and feature-rich foundation for user authentication and management. It features a modern Next.js frontend and a powerful Express.js backend, incorporating best practices for security and user experience.",
      es: "SecureAuth es una aplicación robusta de pila completa diseñada para ofrecer una base segura y con muchas funciones para la autenticación y gestión de usuarios. Cuenta con un frontend moderno en Next.js y un backend potente en Express.js, incorporando las mejores prácticas en seguridad y experiencia del usuario."
    },
    title: "Secure Auth",
    repoLink: "https://github.com/aleexvdev/secure-auth/",
    viewLink: "https://secureauth-alexvdev.netlify.app/"
  },
  {
    image: `${baseImagePath}Weather.png`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "A weather web application using the OpenWeather API provides users with real-time weather information such as temperature, humidity, and forecasts. Allows searching conditions anywhere and customizing favorite cities, ideal for staying informed about the weather.",
      es: "Una aplicación web de clima que usa la API de OpenWeather ofrece a los usuarios información meteorológica en tiempo real, como temperatura, humedad y pronósticos. Permite buscar condiciones en cualquier lugar y personalizar ciudades favoritas, ideal para mantenerse informado sobre el clima."
    },
    title: "Weather App",
    repoLink: "https://github.com/aleexvdev/weather-app/",
    viewLink: "https://weatherapp-alexvdev.netlify.app/"
  },
  {
    image: `${baseImagePath}FoodRecipes.png`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Node.js", color: "text-green-400", icon: `${baseImagePath}nodejs.svg` },
      { name: "Express.js", color: "text-pink-400", icon: `${baseImagePath}expressjs_dark.svg` },
      { name: "MongoDB", color: "text-green-500", icon: `${baseImagePath}mongodb.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` }
    ],
    description: {
      en: "This web application allows users to search and explore food recipes using the Edamam API. Users can save their favorite recipes, share them across different platforms, and leave comments on a blog.",
      es: "Esta aplicación web permite a los usuarios buscar y explorar recetas de comida utilizando la API de Edamam. Los usuarios pueden guardar sus recetas favoritas, compartirlas a través de diferentes plataformas y dejar comentarios en un blog."
    },
    title: "Food Recipes",
    repoLink: "https://github.com/aleexvdev/food-recipes/",
    viewLink: "https://foodrecipes-alexvdev.netlify.app/"
  },
  {
    image: `${baseImagePath}TodoList.png`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "A task management web application that allows users to create, edit and delete tasks, as well as view their progress and prioritize them. Provides an intuitive and easy-to-use interface, and allows customization of appearance and functionality according to user needs.",
      es: "Una aplicación web de gestión de tareas que permite a los usuarios crear, editar y eliminar tareas, así como ver su progreso y priorizarlas. Proporciona una interfaz intuitiva y fácil de usar, y permite personalizar la apariencia y funcionalidad según las necesidades del usuario."
    },
    title: "ToDo App",
    repoLink: "https://github.com/aleexvdev/app-todolist/",
    viewLink: "https://alexvdev-todolist.netlify.app/"
  }
];

const defaultLang = "es";
const ui = {
  es: {
    nav: {
      home: {
        title: "Inicio",
        label: "home",
        ariaLabel: "Ir a la página de inicio",
        href: "#home"
      },
      experience: {
        title: "Experiencia",
        label: "experience",
        ariaLabel: "Ir a la sección de experiencia",
        href: "#experience"
      },
      projects: {
        title: "Proyectos",
        label: "projects",
        ariaLabel: "Ir a la sección de proyectos",
        href: "#projects"
      },
      about: {
        title: "Sobre mi",
        label: "about",
        ariaLabel: "Ir a la sección de sobre mi",
        href: "#about"
      },
      contact: {
        title: "Contacto",
        label: "contact",
        ariaLabel: "Ir a la sección de contacto",
        href: "#contact"
      }
    },
    hero: {
      title: "Bienvenido a mi portafolio",
      profession: "Desarrollador Full Stack",
      disponibility: "Disponible para trabajar"
    },
    experience: {
      title: "¿Dónde he trabajado?",
      current: "Presente",
      remote: "remoto",
      achievements: "Logros destacados",
      skills: "Habilidades Clave"
    },
    cta: {
      available: "¡Disponible para nuevos proyectos!",
      idea: "¿Tienes una idea?",
      makeReal: "Hagámosla realidad",
      description: "Como desarrollador full stack, me especializo en transformar ideas en aplicaciones web",
      modern: "modernas",
      and: "y",
      scalable: "escalables",
      team: "¡Hagamos equipo!",
      contact: "Contáctame"
    },
    projects: {
      title: "Algunos de mis proyectos",
      viewMore: "Ver más de mis proyectos en",
      archive: "el archivo",
      archiveTitle: "Archivo de proyectos",
      achiveDescripction: "Aquí presento una lista de proyectos que considero destacables. Échale un vistazo!",
      backHome: "Volver al inicio"
    },
    about: {
      title: "Un poco sobre mí",
      profile: {
        status: "En línea",
        quote: '"Construyo soluciones completas, del backend al pixel final."'
      },
      personal: {
        title: "Mi lado personal",
        paragraphs: [
          "Me considero una persona resiliente, responsable y optimista. No importa cuán complejo sea el desafío que enfrente, siempre encuentro una manera de superarlo, manteniendo una perspectiva positiva y una fuerte independencia en mis decisiones y acciones. Además de ser resiliente, me considero una persona comprometida y enfocada en mis metas.",
          "Siempre busco mejorar y aprender de cada experiencia, lo que me permite crecer tanto personal como profesionalmente. Estoy convencido de que cada reto es una oportunidad para evolucionar y que con determinación y una actitud positiva, todo es posible."
        ]
      },
      skills: {
        title: "Habilidades"
      },
      work: {
        title: "En el trabajo",
        paragraphs: [
          "Con casi 3 años de experiencia en desarrollo web, me especializo en crear aplicaciones escalables y adaptadas a las necesidades del cliente. Mi enfoque combina un entendimiento profundo de los requisitos con la capacidad de trabajar eficazmente en equipos multidisciplinarios o de manera independiente. Soy adaptable y proactivo, siempre buscando mejorar procesos y contribuir al éxito de cada proyecto.",
          "Estoy continuamente explorando nuevas tecnologías y metodologías para mantenerme actualizado con las mejores prácticas en el campo, lo que me permite contribuir de manera significativa a los proyectos en los que trabajo."
        ]
      },
      education: {
        title: "Educación",
        degree: "Bachiller en Ingeniería Informática",
        description: "Graduado por la Universidad Nacional José Faustino Sánchez Carrión en Ingeniería Informática, donde desarrollé una base sólida en áreas clave como la gestión de tecnologías de la información, desarrollo de software, y la seguridad informática. Mi formación me preparó para alinear estrategias empresariales con soluciones tecnológicas avanzadas, garantizando la eficiencia y seguridad en los sistemas de información."
      },
      location: {
        title: "Mi ubicación",
        location: "Sede en",
        timeDifference: "horas por detrás de tu ubicación actual",
        utcOffset: "UTC-5"
      }
    },
    contact: {
      title: "Envíame un mensaje",
      heading: "¡Contáctame cuando quieras!",
      description: "Tu próximo gran proyecto podría estar a un email de distancia. Ya sea para resolver dudas, explorar colaboraciones o simplemente intercambiar ideas.",
      form: {
        email: "Correo electrónico",
        emailPlaceholder: "goku.ss2@capsulecorp.com",
        name: "Tu nombre",
        namePlaceholder: "Son Gokú",
        subject: "Asunto",
        subjectPlaceholder: "Colaboración intergaláctica",
        message: "Mensaje",
        messagePlaceholder: "Hola, estoy interesado en tu trabajo...",
        submit: "Enviar mensaje",
        reset: "Limpiar",
        sending: "Enviando...",
        privacy: "No conservo ni comparto ninguno de tus datos personales."
      },
      thanks: "¡Muchas gracias por tu tiempo!",
      connect: "Conéctate conmigo en las redes y descubre cómo podemos colaborar en proyectos emocionantes.",
      equationIdea: "Tu idea",
      equationExperience: "mi experiencia",
      equationEquals: "= posibilidades infinitas!"
    },
    footer: {
      madeWith: "Hecho con",
      andLotsOf: "y mucho"
    }
  },
  en: {
    nav: {
      home: {
        title: "Home",
        label: "home",
        ariaLabel: "Go to home page",
        href: "#home"
      },
      experience: {
        title: "Experience",
        label: "experience",
        ariaLabel: "Go to experience section",
        href: "#experience"
      },
      projects: {
        title: "Projects",
        label: "projects",
        ariaLabel: "Go to projects section",
        href: "#projects"
      },
      about: {
        title: "About",
        label: "about",
        ariaLabel: "Go to about section",
        href: "#about"
      },
      contact: {
        title: "Contact",
        label: "contact",
        ariaLabel: "Go to contact section",
        href: "#contact"
      }
    },
    hero: {
      title: "Welcome to my portfolio",
      profession: "Full Stack Developer",
      disponibility: "Available to work"
    },
    experience: {
      title: "Where have I worked?",
      current: "Present",
      remote: "remote",
      achievements: "Highlighted achievements",
      skills: "Key Skills"
    },
    cta: {
      available: "Available for new projects!",
      idea: "Got an idea?",
      makeReal: "Let's make it real",
      description: "As a full stack developer, I specialize in turning ideas into",
      modern: "modern",
      and: "and",
      scalable: "scalable",
      team: "Let's team up!",
      contact: "Contact me"
    },
    projects: {
      title: "Some of my projects",
      viewMore: "View more projects in the",
      archive: "archive",
      archiveTitle: "Projects archive",
      achiveDescripction: "Here you can find a list of projects that I consider worthy of attention. Take a look!",
      backHome: "Back to home"
    },
    about: {
      title: "A little about me",
      profile: {
        status: "Online",
        quote: '"I build complete solutions, from backend to the final pixel."'
      },
      personal: {
        title: "My personal side",
        paragraphs: [
          "I consider myself a resilient, responsible, and optimistic person. No matter how complex the challenge I face, I always find a way to overcome it, maintaining a positive perspective and strong independence in my decisions and actions. Beyond being resilient, I see myself as a committed person focused on my goals.",
          "I constantly seek to improve and learn from every experience, which allows me to grow both personally and professionally. I'm convinced that every challenge is an opportunity to evolve and that with determination and a positive attitude, anything is possible."
        ]
      },
      skills: {
        title: "Skills"
      },
      work: {
        title: "At work",
        paragraphs: [
          "With nearly 3 years of web development experience, I specialize in creating scalable applications tailored to client needs. My approach combines a deep understanding of requirements with the ability to work effectively in multidisciplinary teams or independently. I'm adaptable and proactive, always looking to improve processes and contribute to each project's success.",
          "I'm continuously exploring new technologies and methodologies to stay updated with best practices in the field, allowing me to make meaningful contributions to the projects I work on."
        ]
      },
      education: {
        title: "Education",
        degree: "Bachelor's in Computer Engineering",
        description: "Graduated from Universidad Nacional José Faustino Sánchez Carrión in Computer Engineering, where I developed a solid foundation in key areas like IT management, software development, and cybersecurity. My training prepared me to align business strategies with advanced technological solutions, ensuring efficiency and security in information systems."
      },
      location: {
        title: "My location",
        location: "Living in",
        timeDifference: "hours behind your current location",
        utcOffset: "UTC-5"
      }
    },
    contact: {
      title: "Send me a message",
      heading: "Contact me anytime!",
      description: "Your next big project could be just an email away. Whether to answer questions, explore collaborations or simply exchange ideas.",
      form: {
        email: "Email address",
        emailPlaceholder: "goku.ss2@capsulecorp.com",
        name: "Your name",
        namePlaceholder: "Son Goku",
        subject: "Subject",
        subjectPlaceholder: "Intergalactic collaboration",
        message: "Message",
        messagePlaceholder: "Hello, I'm interested in your work...",
        submit: "Send message",
        reset: "Reset",
        sending: "Sending...",
        privacy: "I do not keep or share any of your personal data."
      },
      thanks: "Thank you for your time!",
      connect: "Connect with me on social media and discover how we can collaborate on exciting projects.",
      equationIdea: "Your idea",
      equationExperience: "my experience",
      equationEquals: "infinite possibilities!"
    },
    footer: {
      madeWith: "Made with",
      andLotsOf: "and lots of"
    }
  }
};
function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  const controls = useAnimation();
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    const interval = setInterval(() => {
      if (isVisible) {
        controls.start({
          y: [0, -10, 0],
          transition: { duration: 1, ease: "easeInOut" }
        });
      }
    }, 5e3);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearInterval(interval);
    };
  }, [isVisible, controls]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: `fixed bottom-3 right-3 md:bottom-3 md:right-3 lg:bottom-8 lg:right-8 z-50 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`,
      initial: { scale: 0, rotate: -180 },
      animate: { scale: isVisible ? 1 : 0, rotate: isVisible ? 0 : -180 },
      transition: { duration: 0.5, ease: "easeInOut" },
      children: /* @__PURE__ */ jsx(
        motion.button,
        {
          className: `bg-[#323233] cursor-pointer bg-opacity-20 backdrop-blur-md rounded-full p-3 ${isVisible ? "shadow-2xl" : "shadow-xl"} text-[#d2d2d2] border border-[#1f1f1f] border-opacity-30 hover:bg-opacity-30 transition-colors duration-300`,
          onClick: scrollToTop,
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 },
          animate: controls,
          children: /* @__PURE__ */ jsx(ChevronUp, { className: "w-6 h-6" })
        }
      )
    }
  );
};

const $$Astro = createAstro("http://localhost:4321/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const footer = t("footer");
  const madeWith = footer.madeWith;
  const andLotsOf = footer.andLotsOf;
  return renderTemplate`${maybeRenderHead()}<footer class="h-24 w-full bg-transparent transition-transform duration-300 select-none"> <div class="flex h-full w-full items-center justify-center"> <a href="https://www.linkedin.com/in/alexvalverde/" target="_blank" class="flex h-max w-max items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"> <span class="text-sm font-semibold text-[#2563EB] md:text-base lg:text-lg">@alexvdev.</span> <span class="text-sm font-semibold md:text-base lg:text-lg text-white">${madeWith}${" "}<span class="animate-pulse opacity-100">❤️</span>${" "}${andLotsOf}${" "}☕.
</span> </a> </div> </footer>`;
}, "E:/Repositorios/Astro/portfolio.dev/src/sections/Footer.astro", void 0);

export { $$Footer as $, Button as B, LanguageToogle as L, ScrollUp as S, cn as c, getLangFromUrl as g, projects as p, useTranslations as u };

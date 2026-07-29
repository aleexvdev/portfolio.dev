import type { Project } from "@/types/projects";

const baseImagePath = "/projects/";
export const projects: Project[] = [
  {
    image: `${baseImagePath}CodeRender`,
    skills: [
      { name: "Next.js", color: "text-white", icon: `${baseImagePath}nextjs.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` },
    ],
    description: {
      en: "Ever had a snippet that looks great in the editor but falls apart when you share it? CodeRender turns your code into polished images ready for social posts, docs, or that thread you want to look sharp. Customize themes, typography, and spacing, then export — with your presets saved between sessions.",
      es: "¿Te ha pasado que un snippet se ve genial en el editor pero al compartirlo pierde todo el estilo? CodeRender nace de ahí: convierte tu código en imágenes con buena pinta, listas para redes, documentación o ese hilo que quieres que se vea prolijo. Ajusta temas, tipografía y espaciado, exporta al toque y retoma justo donde lo dejaste — sin empezar de cero cada vez."
    },
    title: "CodeRender",
    repoLink: "https://github.com/aleexvdev/coderender",
    viewLink: "https://coderender.vercel.app/",
  },
  {
    image: `${baseImagePath}SecureAuth`,
    skills: [
      { name: "Next.js", color: "text-white", icon: `${baseImagePath}nextjs.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Express.js", color: "text-pink-400", icon: `${baseImagePath}expressjs_dark.svg` },
      { name: "PostgreSQL", color: "text-sky-700", icon: `${baseImagePath}postgresql.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` },
    ],
    description: {
      en: "Authentication shouldn't be a headache on every new project. SecureAuth is the reusable foundation I built for that: email verification, reliable sessions, two-factor when you need it, and routes that stay locked without permission — so you can focus on what your app actually does.",
      es: "Montar un login seguro en cada proyecto nuevo cansa, y encima suele salir a medias. SecureAuth es la base que armé para evitar eso: registro con verificación por correo, sesiones que no se pierden a mitad de camino, doble factor cuando lo necesitas y rutas que solo abren si tienes permiso. Pensado para reutilizar, no para reinventar la rueda una y otra vez."
    },
    title: "Secure Auth",
    repoLink: "https://github.com/aleexvdev/secureauth-next",
    viewLink: "https://secure-auth-v1.netlify.app/",
  },
  {
    image: `${baseImagePath}Weather`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "A quick glance at the weather for your city — or the one you're planning to visit. Search, save favorites, and get forecasts without the clutter.",
      es: "Antes de salir, un vistazo al clima de tu ciudad — o de la que estás planeando visitar. Buscas, guardas tus favoritas y el pronóstico te acompaña sin tantas vueltas. Simple, directo, hecho para el día a día."
    },
    title: "Weather App",
    repoLink: "https://github.com/aleexvdev/app-weather",
    viewLink: "https://app-weather-v2.vercel.app/",
  },
  {
    image: `${baseImagePath}FoodRecipes`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Node.js", color: "text-green-400", icon: `${baseImagePath}nodejs.svg` },
      { name: "Express.js", color: "text-pink-400", icon: `${baseImagePath}expressjs_dark.svg` },
      { name: "MongoDB", color: "text-green-500", icon: `${baseImagePath}mongodb.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
    ],
    description: {
      en: "What's for dinner? Browse recipes, save the ones you love, and come back to them when hunger actually strikes — your favorites stay put, ready for the next craving.",
      es: "¿Qué cocino hoy? La pregunta del millón, y esta app intenta responderla sin estrés. Exploras recetas, guardas las que te tientan y las tienes a la mano cuando el hambre aprieta de verdad — sin perder tus favoritas entre visita y visita."
    },
    title: "Food Recipes",
    repoLink: "https://github.com/aleexvdev/food-recipes",
    viewLink: "https://foodrecipes-alexvdev.netlify.app/",
  },
  {
    image: `${baseImagePath}TodoList`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-white", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "Organizing your day doesn't have to feel dull. Prioritize what matters, filter what can't wait, and enjoy smooth transitions that make staying on top of things almost enjoyable.",
      es: "Organizar el día no tiene por qué sentirse aburrido. Priorizas lo importante, filtras lo que urge y todo fluye con transiciones que hacen que usarla sea casi entretenido — orden sin perderse en menús ni complicarse la vida."
    },
    title: "ToDo App",
    repoLink: "https://github.com/aleexvdev/app-todolist/",
    viewLink: "https://alexvdev-todolist.netlify.app/",
  },
];

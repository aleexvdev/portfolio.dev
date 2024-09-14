import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    image: {
      urlLarge: {
        url: "./images/projects/project_foody_desktop.png",
        style: "left-[60%] scale-90"
      },
      urlMedium: {
        url: "./images/projects/project_foody_tablet.png",
        style: "left-[55%] top-5 rotate-6 scale-90"
      },
      urlSmall: {
        url: "./images/projects/project_foody_mobile.png",
        style: "left-[45%] rotate-6 top-28 scale-125"
      },
    },
    skills: [
      { name: "React", color: "text-cyan-500", icon: "./images/skills/react.svg" },
      { name: "TypeScript", color: "text-blue-400", icon: "./images/skills/typescript.svg" },
      { name: "Tailwind CSS", color: "text-teal-400", icon: "./images/skills/tailwindcss.svg" }
    ],
    description: "Una aplicación web de clima que usa la API de OpenWeather ofrece a los usuarios información meteorológica en tiempo real, como temperatura, humedad y pronósticos. Permite buscar condiciones en cualquier lugar y personalizar ciudades favoritas, ideal para mantenerse informado sobre el clima.",
    title: "Weather App",
    repoLink: "https://github.com/aleexvdev/weather-app/",
    viewLink: "https://weatherapp-alexvdev.netlify.app/",
    iconUrl: "./images/projects/weather.png"
  },
  {
    image: {
      urlLarge: {
        url: "./images/projects/project_foody_desktop.png",
        style: "left-[60%] scale-90"
      },
      urlMedium: {
        url: "./images/projects/project_foody_tablet.png",
        style: "left-[55%] top-5 rotate-6 scale-90"
      },
      urlSmall: {
        url: "./images/projects/project_foody_mobile.png",
        style: "left-[45%] rotate-6 top-28 scale-125"
      },
    },
    skills: [
      { name: "React", color: "text-cyan-500", icon: "./images/skills/react.svg" },
      { name: "TypeScript", color: "text-blue-400", icon: "./images/skills/typescript.svg" },
      { name: "Tailwind CSS", color: "text-teal-400", icon: "./images/skills/tailwindcss.svg" }
    ],
    description: "Una aplicación web de gestión de tareas que permite a los usuarios crear, editar y eliminar tareas, así como ver su progreso y priorizarlas. Proporciona una interfaz intuitiva y fácil de usar, y permite personalizar la apariencia y funcionalidad según las necesidades del usuario.",
    title: "ToDo App",
    repoLink: "https://github.com/aleexvdev/app-todolist/",
    viewLink: "https://alexvdev-todolist.netlify.app/",
    iconUrl: "./images/projects/todolist.png"
  },
  {
    image: {
      urlLarge: {
        url: "./images/projects/project_foody_desktop.png",
        style: "left-[60%] scale-90"
      },
      urlMedium: {
        url: "./images/projects/project_foody_tablet.png",
        style: "left-[55%] top-5 rotate-6 scale-90"
      },
      urlSmall: {
        url: "./images/projects/project_foody_mobile.png",
        style: "left-[45%] rotate-6 top-28 scale-125"
      },
    },
    skills: [
      { name: "React", color: "text-cyan-500", icon: "./images/skills/react.svg" },
      { name: "TypeScript", color: "text-blue-400", icon: "./images/skills/typescript.svg" },
      { name: "Tailwind CSS", color: "text-teal-400", icon: "./images/skills/tailwindcss.svg" },
      { name: "Node.js", color: "text-green-400", icon: "./images/skills/nodejs.svg" },
      { name: "Express.js", color: "text-pink-400", icon: "./images/skills/expressjs_dark.svg" },
      { name: "MongoDB", color: "text-green-500", icon: "./images/skills/mongodb.svg" }
    ],
    description: "Esta aplicación web que permite a los usuarios buscar y explorar recetas de comida utilizando la API de Edamam. Los usuarios pueden guardar sus recetas favoritas, compartirlas a través de diferentes plataformas y dejar comentarios en un blog.",
    title: "Food Recipes",
    repoLink: "https://github.com/aleexvdev/food-recipes/",
    viewLink: "https://foodrecipes-alexvdev.netlify.app/",
    iconUrl: "./images/projects/food-recipes.png"
  },
];

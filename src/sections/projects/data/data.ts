import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    projectName: "Weather App",
    description: "Una aplicación web de clima que usa la API de OpenWeather ofrece a los usuarios información meteorológica en tiempo real, como temperatura, humedad y pronósticos. Permite buscar condiciones en cualquier lugar y personalizar ciudades favoritas, ideal para mantenerse informado sobre el clima.",
    image: "./images/projects/project_1.png",
    liveDemo: "https://weatherapp-alexvdev.netlify.app/",
    github: "https://github.com/aleexvdev/weather-app/",
    tags: [
      {
        id: 1,
        name: "React",
        icon: "./images/skills/react.svg"
      },
      {
        id: 2,
        name: "TypeScript",
        icon: "./images/skills/typescript.svg"
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: "./images/skills/tailwindcss.svg"
      }
    ]
  },
  {
    id: 2,
    projectName: "ToDo App",
    description: "Una aplicación web de gestión de tareas que permite a los usuarios crear, editar y eliminar tareas, así como ver su progreso y priorizarlas. Proporciona una interfaz intuitiva y fácil de usar, y permite personalizar la apariencia y funcionalidad según las necesidades del usuario.",
    image: "./images/projects/project_1.png",
    liveDemo: "https://alexvdev-todolist.netlify.app/",
    github: "https://github.com/aleexvdev/app-todolist/",
    tags: [
      {
        id: 1,
        name: "React",
        icon: "./images/skills/react.svg"
      },
      {
        id: 2,
        name: "TypeScript",
        icon: "./images/skills/typescript.svg"
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: "./images/skills/tailwindcss.svg"
      }
    ]
  },
  {
    id: 3,
    projectName: "Food Recipes",
    description: "Esta aplicación web que permite a los usuarios buscar y explorar recetas de comida utilizando la API de Edamam. Los usuarios pueden guardar sus recetas favoritas, compartirlas a través de diferentes plataformas y dejar comentarios en un blog.",
    image: "./images/projects/project_1.png",
    liveDemo: "https://foodrecipes-alexvdev.netlify.app/",
    github: "https://github.com/aleexvdev/food-recipes/",
    tags: [
      {
        id: 1,
        name: "React",
        icon: "./images/skills/react.svg"
      },
      {
        id: 2,
        name: "TypeScript",
        icon: "./images/skills/typescript.svg"
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: "./images/skills/tailwindcss.svg"
      },
      {
        id: 4,
        name: "Node.js",
        icon: "./images/skills/nodejs.svg"
      },
      {
        id: 5,
        name: "Express.js",
        icon: "./images/skills/expressjs_dark.svg"
      },
      {
        id: 6,
        name: "MongoDB",
        icon: "./images/skills/mongodb.svg"
      },
      {
        id: 7,
        name: "React Router",
        icon: "./images/skills/reactrouter.svg"
      }
    ]
  }

];
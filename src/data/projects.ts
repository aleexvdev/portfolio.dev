import type { Project } from "@/types/projects";

const baseImagePath = "/projects/";
export const projects: Project[] = [
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
    viewLink: "https://secureauth-alexvdev.netlify.app/",
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
    viewLink: "https://secureauth-alexvdev.netlify.app/",
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
    viewLink: "https://weatherapp-alexvdev.netlify.app/",
  },
  {
    image: `${baseImagePath}FoodRecipes.png`,
    skills: [
      { name: "React", color: "text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Node.js", color: "text-green-400", icon: `${baseImagePath}nodejs.svg` },
      { name: "Express.js", color: "text-pink-400", icon: `${baseImagePath}expressjs_dark.svg` },
      { name: "MongoDB", color: "text-green-500", icon: `${baseImagePath}mongodb.svg` },
      { name: "Tailwind CSS", color: "text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
    ],
    description: {
      en: "This web application allows users to search and explore food recipes using the Edamam API. Users can save their favorite recipes, share them across different platforms, and leave comments on a blog.",
      es: "Esta aplicación web permite a los usuarios buscar y explorar recetas de comida utilizando la API de Edamam. Los usuarios pueden guardar sus recetas favoritas, compartirlas a través de diferentes plataformas y dejar comentarios en un blog."
    },
    title: "Food Recipes",
    repoLink: "https://github.com/aleexvdev/food-recipes/",
    viewLink: "https://foodrecipes-alexvdev.netlify.app/",
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
    viewLink: "https://alexvdev-todolist.netlify.app/",
  },
];
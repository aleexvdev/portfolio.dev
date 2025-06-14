import type { Project } from "@/types/projects";

const baseImagePath = "/projects/";
export const projects: Project[] = [
  {
    image: `${baseImagePath}CodeRender.png`,
    skills: [
      { name: "React", color: "text-cyan-600 dark:text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-600 dark:text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-500 dark:text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-gray-800 dark:text-gray-400", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-600 dark:text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "A secure authentication web application that allows users to register and log in to their accounts. Provides an intuitive and easy-to-use interface, and allows customization of appearance and functionality according to user needs.",
      es: "Una aplicación web de autenticación segura que permite a los usuarios registrarse y iniciar sesión en sus cuentas. Proporciona una interfaz intuitiva y fácil de usar, y permite personalizar la apariencia y funcionalidad según las necesidades del usuario."
    },
    title: "Secure Auth",
    repoLink: "https://github.com/aleexvdev/secure-auth/",
    viewLink: "https://secureauth-alexvdev.netlify.app/",
  },
  {
    image: `${baseImagePath}SecureAuth.png`,
    skills: [
      { name: "React", color: "text-cyan-600 dark:text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-600 dark:text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-500 dark:text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-gray-800 dark:text-gray-400", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-600 dark:text-pink-400", icon: `${baseImagePath}vitejs.svg` }
    ],
    description: {
      en: "A secure authentication web application that allows users to register and log in to their accounts. Provides an intuitive and easy-to-use interface, and allows customization of appearance and functionality according to user needs.",
      es: "Una aplicación web de autenticación segura que permite a los usuarios registrarse y iniciar sesión en sus cuentas. Proporciona una interfaz intuitiva y fácil de usar, y permite personalizar la apariencia y funcionalidad según las necesidades del usuario."
    },
    title: "Secure Auth",
    repoLink: "https://github.com/aleexvdev/secure-auth/",
    viewLink: "https://secureauth-alexvdev.netlify.app/",
  },
  {
    image: `${baseImagePath}Weather.png`,
    skills: [
      { name: "React", color: "text-cyan-600 dark:text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-600 dark:text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-500 dark:text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-gray-800 dark:text-gray-400", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-600 dark:text-pink-400", icon: `${baseImagePath}vitejs.svg` }
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
      { name: "React", color: "text-cyan-600 dark:text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-600 dark:text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Node.js", color: "text-green-600 dark:text-green-400", icon: `${baseImagePath}nodejs.svg` },
      { name: "Express.js", color: "text-pink-600 dark:text-pink-400", icon: `${baseImagePath}expressjs_dark.svg` },
      { name: "MongoDB", color: "text-green-700 dark:text-green-500", icon: `${baseImagePath}mongodb.svg` },
      { name: "Tailwind CSS", color: "text-teal-600 dark:text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
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
      { name: "React", color: "text-cyan-600 dark:text-cyan-500", icon: `${baseImagePath}react.svg` },
      { name: "TypeScript", color: "text-blue-600 dark:text-blue-400", icon: `${baseImagePath}typescript.svg` },
      { name: "Tailwind CSS", color: "text-teal-500 dark:text-teal-400", icon: `${baseImagePath}tailwindcss.svg` },
      { name: "Framer Motion", color: "text-gray-800 dark:text-gray-400", icon: `${baseImagePath}framer_dark.svg` },
      { name: "Vite", color: "text-pink-600 dark:text-pink-400", icon: `${baseImagePath}vitejs.svg` }
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
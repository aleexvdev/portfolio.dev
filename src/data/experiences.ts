import type { Experience } from "@/types/experience";

const baseImagePath = "/skills/";
export const experiences: Experience[] = [
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
      },
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
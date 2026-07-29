import type { Experience } from "@/types/experience";

const baseImagePath = "/skills/";
export const experiences: Experience[] = [
  {
    id: 2,
    company: "Freelance",
    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    period: {
      es: "2024 - Presente",
      en: "2024 - Present",
    },
    location: {
      es: "remoto",
      en: "remote",
    },
    description: {
      es: "Desarrollo soluciones de software para clientes, participando en todo el ciclo del proyecto: análisis de requerimientos, diseño técnico, desarrollo, despliegue y soporte. He trabajado en aplicaciones web, sistemas a medida, landing pages y sitios web administrables, adaptando cada solución a los objetivos de negocio de cada cliente.",
      en: "I build software solutions for clients across the full project lifecycle: requirements analysis, technical design, development, deployment, and support. I've delivered web applications, custom systems, landing pages, and manageable websites, tailoring each solution to each client's business goals.",
    },
    achievements: [
      {
        es: "Diseño e implemento aplicaciones web y sistemas a medida con arquitecturas full stack.",
        en: "Design and build web applications and custom systems with full stack architectures.",
      },
      {
        es: "Desarrollo landing pages y sitios web administrables con foco en rendimiento, experiencia de usuario y facilidad de gestión.",
        en: "Build landing pages and manageable websites focused on performance, user experience, and ease of content management.",
      },
      {
        es: "Defino soluciones técnicas, implemento APIs, lógica de negocio, bases de datos e interfaces de usuario.",
        en: "Define technical solutions and implement APIs, business logic, databases, and user interfaces.",
      },
      {
        es: "Gestiono la relación con el cliente durante todo el proyecto, desde la definición del alcance hasta la entrega y puesta en producción.",
        en: "Manage client relationships throughout the project, from scope definition through delivery and production rollout.",
      },
      {
        es: "Entrego soluciones listas para producción, priorizando mantenibilidad, escalabilidad y calidad del código.",
        en: "Ship production-ready solutions, prioritizing maintainability, scalability, and code quality.",
      },
    ],
    skills: [
      { id: 11, name: "Laravel", icon: `${baseImagePath}laravel.svg` },
      { id: 12, name: "Node.js", icon: `${baseImagePath}nodejs.svg` },
      { id: 13, name: "Express", icon: `${baseImagePath}express.svg` },
      { id: 14, name: "MySQL", icon: `${baseImagePath}mysql.svg` },
      { id: 15, name: "MongoDB", icon: `${baseImagePath}mongodb.svg` },
      { id: 16, name: "PostgreSQL", icon: `${baseImagePath}postgresql.svg` },
      { id: 17, name: "TypeScript", icon: `${baseImagePath}typescript.svg` },
      { id: 18, name: "React", icon: `${baseImagePath}react.svg` },
      { id: 19, name: "Next.js", icon: `${baseImagePath}nextjs.svg` },
      { id: 20, name: "Angular", icon: `${baseImagePath}angular.svg` },
      { id: 21, name: "Astro", icon: `${baseImagePath}astro.svg` },
      { id: 22, name: "Tailwind", icon: `${baseImagePath}tailwind.svg` },
      { id: 23, name: "Docker", icon: `${baseImagePath}docker.svg` },
      { id: 24, name: "Git", icon: `${baseImagePath}git.svg` },
      { id: 25, name: "Jira", icon: `${baseImagePath}jira.svg` },
    ],
  },
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
      es: "Contribuyo al desarrollo y soporte del ERP de facturación electrónica: implementación de nuevas funcionalidades, integraciones con entidades externas, automatización de flujos comerciales y de cobranza, y estabilidad en producción. Mi trabajo abarca módulos transaccionales y soluciones de reportería que permiten a las áreas comercial y gerencial monitorear indicadores clave.",
      en: "I contribute to the development and support of the electronic invoicing ERP: implementing new features, external integrations, commercial and collections workflow automation, and production stability. My work spans transactional modules and reporting solutions that enable commercial and management teams to monitor key indicators."
    },
    achievements: [
      {
        es: "Integré un flujo bancario automatizado para obtener y conciliar pagos con documentos emitidos, registrando el cobro sin intervención manual de tesorería.",
        en: "Integrated an automated banking flow to retrieve and reconcile payments against issued documents, recording collections without manual treasury intervention.",
      },
      {
        es: "Automatizé el ciclo de revisión de pago, aprobación de cotización y emisión de nota de venta, cerrando el flujo comercial sin reprocesos.",
        en: "Automated the payment review, quotation approval, and sales note issuance cycle, closing the commercial workflow without reprocessing."
      },
      {
        es: "Diseñé e implementé un visualizador de datos empresariales con tableros interactivos de ventas, compras, márgenes e inventario, consolidando información operativa para apoyar la toma de decisiones gerencial.",
        en: "Designed and implemented a business data visualizer with interactive dashboards for sales, purchases, margins, and inventory, consolidating operational data to support management decision-making."
      },
      {
        es: "Rediseñé interfaces clave del ERP, simplificando formularios de alto tráfico y mejorando la navegación para usuarios de operación y back-office.",
        en: "Redesigned key ERP interfaces, simplifying high-traffic forms and improving navigation for operations and back-office users."
      },
      {
        es: "Automatizé validaciones y flujos de emisión de documentos tributarios, reduciendo errores en ciclos de facturación y carga de soporte post-release.",
        en: "Automated validations and tax document issuance workflows, reducing errors in billing cycles and post-release support load."
      },
      {
        es: "Optimicé consultas y servicios en módulos de alto volumen transaccional, mejorando tiempos de respuesta en operaciones masivas de facturación y consulta.",
        en: "Optimized queries and services in high-transaction modules, improving response times during bulk invoicing and lookup operations."
      },
    ],
    skills: [
      { id: 1, name: "PHP", icon: `${baseImagePath}php_dark.svg` },
      { id: 2, name: "Laravel", icon: `${baseImagePath}laravel.svg` },
      { id: 3, name: "MySQL", icon: `${baseImagePath}mysql.svg` },
      { id: 4, name: "Javascript", icon: `${baseImagePath}javascript.svg` },
      { id: 5, name: "Jquery", icon: `${baseImagePath}jquery_dark.svg` },
      { id: 6, name: "React", icon: `${baseImagePath}react.svg` },
      { id: 7, name: "Bootstrap", icon: `${baseImagePath}bootstrap.svg` },
      { id: 8, name: "HTML5", icon: `${baseImagePath}html5.svg` },
      { id: 9, name: "CSS3", icon: `${baseImagePath}css.svg` },
      { id: 10, name: "Docker", icon: `${baseImagePath}docker.svg` },
      { id: 11, name: "Git", icon: `${baseImagePath}git.svg` },
      { id: 12, name: "Jira", icon: `${baseImagePath}jira.svg` },
    ],
  }
]; 
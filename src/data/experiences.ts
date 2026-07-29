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
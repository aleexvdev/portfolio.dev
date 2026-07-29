export const languages = {
  es: "Español",
  en: "English",
}

export const defaultLang = "es"

type UILang = {
  nav: {
    home: {
      title: string;
      label: string;
      ariaLabel: string;
      href: string;
    };
    experience: {
      title: string;
      label: string;
      ariaLabel: string;
      href: string;
    };
    projects: {
      title: string;
      label: string;
      ariaLabel: string;
      href: string;
    };
    about: {
      title: string;
      label: string;
      ariaLabel: string;
      href: string;
    };
    contact: {
      title: string;
      label: string;
      ariaLabel: string;
      href: string;
    };
  };
  hero: {
    title: string;
    profession: string;
    disponibility: string;
    socialListAriaLabel: string;
    linkedinAriaLabel: string;
    githubAriaLabel: string;
    cvAriaLabel: string;
    emailAriaLabel: string;
  };
  experience: {
    title: string;
    current: string;
    remote: string;
    achievements: string;
    responsibilities: string;
    skills: string;
  };
  cta: {
    available: string;
    idea: string;
    makeReal: string;
    description: string;
    closing: string;
    linkedin: string;
    contact: string;
  };
  projects: {
    title: string;
    viewMore: string;
    archive: string;
    archiveTitle: string;
    achiveDescripction: string;
    backHome: string;
    viewRepo: string;
    demo: string;
    repoAriaLabel: string;
    demoAriaLabel: string;
  };
  about: {
    title: string;
    profile: {
      status: string;
      quote: string;
    };
    personal: {
      title: string;
      paragraphs: ReadonlyArray<string>;
    };
    skills: {
      title: string;
    };
    work: {
      title: string;
      paragraphs: ReadonlyArray<string>;
    };
    education: {
      title: string;
      degree: string;
      description: string;
    };
    location: {
      title: string;
      location: string;
      timeDifference: string;
      utcOffset: string;
      flagAlt: string;
    };
  };
  contact: {
    title: string;
    heading: string;
    description: string;
    form: {
      email: string;
      emailPlaceholder: string;
      name: string;
      namePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      reset: string;
      sending: string;
      privacy: string;
    };
    thanks: string;
    connect: string;
    equationIdea: string;
    equationExperience: string;
    equationEquals: string;
  };
  footer: {
    madeWith: string;
    andLotsOf: string;
  };
};

export const ui = {
  es: {
    nav: {
      home: {
        title: "Inicio",
        label: "inicio",
        ariaLabel: "Ir a la página de inicio",
        href: "#home",
      },
      experience: {
        title: "Experiencia",
        label: "experiencia",
        ariaLabel: "Ir a la sección de experiencia",
        href: "#experience",
      },
      projects: {
        title: "Proyectos",
        label: "proyectos",
        ariaLabel: "Ir a la sección de proyectos",
        href: "#projects",
      },
      about: {
        title: "Sobre mi",
        label: "sobre mí",
        ariaLabel: "Ir a la sección de sobre mi",
        href: "#about",
      },
      contact: {
        title: "Contacto",
        label: "contacto",
        ariaLabel: "Ir a la sección de contacto",
        href: "#contact",
      },
    },
    hero: {
      title: "Bienvenido a mi portafolio",
      profession: "Desarrollador Full Stack",
      disponibility: "Disponible para trabajar",
      socialListAriaLabel: "Redes sociales y contacto",
      linkedinAriaLabel: "Visitar perfil de LinkedIn",
      githubAriaLabel: "Visitar perfil de GitHub",
      cvAriaLabel: "Descargar curriculum vitae",
      emailAriaLabel: "Enviar correo electrónico",
    },
    experience: {
      title: "¿Dónde he trabajado?",
      current: "Presente",
      remote: "remoto",
      achievements: "Logros destacados",
      responsibilities: "Responsabilidades",
      skills: "Habilidades Clave",
    },
    cta: {
      available: "¡Disponible para nuevos proyectos!",
      idea: "¿Listo para crear",
      makeReal: "tu próximo proyecto?",
      description:
        "Convierte tu idea en una solución digital. Yo me encargo de desarrollar el software que necesitas.",
      closing: "Cuéntame tu idea. Estaré encantado de conversar contigo.",
      linkedin: "LinkedIn",
      contact: "Hablemos",
    },
    projects: {
      title: "Algunos de mis proyectos",
      viewMore: "Ver más de mis proyectos en",
      archive: "el archivo",
      archiveTitle: "Archivo de proyectos",
      achiveDescripction: "Aquí presento una lista de proyectos que considero destacables. Échale un vistazo!",
      backHome: "Volver al inicio",
      viewRepo: "Ver Repositorio",
      demo: "Demo",
      repoAriaLabel: "Repositorio de GitHub",
      demoAriaLabel: "Ver demo del proyecto",
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
          "Con casi 4 años de experiencia en desarrollo web, me especializo en crear aplicaciones escalables y adaptadas a las necesidades del cliente. Mi enfoque combina un entendimiento profundo de los requisitos con la capacidad de trabajar eficazmente en equipos multidisciplinarios o de manera independiente. Soy adaptable y proactivo, siempre buscando mejorar procesos y contribuir al éxito de cada proyecto.",
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
        utcOffset: "UTC-5",
        flagAlt: "Bandera de {country}",
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
      andLotsOf: "y mucho",
    }
  },
  en: {
    nav: {
      home: {
        title: "Home",
        label: "home",
        ariaLabel: "Go to home page",
        href: "#home",
      },
      experience: {
        title: "Experience",
        label: "experience",
        ariaLabel: "Go to experience section",
        href: "#experience",
      },
      projects: {
        title: "Projects",
        label: "projects",
        ariaLabel: "Go to projects section",
        href: "#projects",
      },
      about: {
        title: "About",
        label: "about",
        ariaLabel: "Go to about section",
        href: "#about",
      },
      contact: {
        title: "Contact",
        label: "contact",
        ariaLabel: "Go to contact section",
        href: "#contact",
      },
    },
    hero: {
      title: "Welcome to my portfolio",
      profession: "Full Stack Developer",
      disponibility: "Available to work",
      socialListAriaLabel: "Social media and contact",
      linkedinAriaLabel: "Visit LinkedIn profile",
      githubAriaLabel: "Visit GitHub profile",
      cvAriaLabel: "Download resume",
      emailAriaLabel: "Send email",
    },
    experience: {
      title: "Where have I worked?",
      current: "Present",
      remote: "remote",
      achievements: "Highlighted achievements",
      responsibilities: "Responsibilities",
      skills: "Key Skills",
    },
    cta: {
      available: "Available for new projects!",
      idea: "Ready to build",
      makeReal: "your next project?",
      description:
        "Turn your idea into a digital solution. I'll take care of developing the software you need.",
      closing: "Tell me your idea. I'd be happy to talk with you.",
      linkedin: "LinkedIn",
      contact: "Let's talk",
    },
    projects: {
      title: "Some of my projects",
      viewMore: "View more projects in the",
      archive: "archive",
      archiveTitle: "Projects archive",
      achiveDescripction: "Here you can find a list of projects that I consider worthy of attention. Take a look!",
      backHome: "Back to home",
      viewRepo: "View Repository",
      demo: "Demo",
      repoAriaLabel: "GitHub repository",
      demoAriaLabel: "View project demo",
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
          "With nearly 4 years of web development experience, I specialize in creating scalable applications tailored to client needs. My approach combines a deep understanding of requirements with the ability to work effectively in multidisciplinary teams or independently. I'm adaptable and proactive, always looking to improve processes and contribute to each project's success.",
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
        utcOffset: "UTC-5",
        flagAlt: "Flag of {country}",
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
      andLotsOf: "and lots of",
    }
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/")
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t<K extends keyof UILang>(key: K): UILang[K] {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
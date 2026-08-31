import type { CvData } from "./types";

const cvFrontend: CvData = {
  title: "Máximo Valfré | Frontend Developer",
  role: "Frontend Developer",
  contact: {
    email: "maximovalfre170@gmail.com",
    phone: "+54 (3385) 433320",
    location: "Argentina (remoto)",
    linkedin: "linkedin.com/in/maxivalfre",
    github: "github.com/MaxiValfre",
    website: "maxivalfreportfolio.netlify.app",
  },
  profile: [
    "Desarrollador frontend con 3 años de experiencia construyendo interfaces de aplicaciones de gestión en producción. Trabajo con React, Next.js y TypeScript, con foco en componentes reutilizables, estructura modular y consumo de APIs REST. Vengo de un rol full stack, así que entiendo el backend con el que dialoga la interfaz y no dependo de terceros para desbloquearme.",
  ],
  experience: [
    {
      role: "Full Stack Developer",
      org: "Fundación Educativa Saberes",
      period: "2024 – Actualidad · Remoto, Argentina",
      intro: "Responsable del frontend de la plataforma interna y de la API que lo alimenta.",
      bullets: [
        "<strong>Interfaz de gestión de pagos.</strong> Aplicación en Next.js + Tailwind CSS + shadcn/ui: flujos de carga de comprobantes, visualización de esquemas de cuotas y un backoffice administrativo de conciliación con tablas, filtros y estados. Componentes organizados por dominio para poder sumar módulos sin tocar los existentes.",
        "<strong>Módulo de gestión de gastos.</strong> Formularios con imputación multinivel (empresa, organización, comisión, persona), validación en cliente y servidor, y vistas de reporte.",
        "<strong>Integración con backend.</strong> Consumo de APIs REST propias (Node.js/Express) y de endpoints serverless en AWS Lambda, con manejo de estados de carga, error y autenticación.",
        "<strong>Portfolio y sitios estáticos.</strong> Desarrollo con Astro y Tailwind, con foco en performance y HTML semántico.",
      ],
    },
    {
      role: "Freelance Developer",
      org: "Aplicación de citas",
      period: "2023",
      bullets: [
        "Interfaz completa en HTML, CSS y JavaScript con Firebase como backend: perfiles, sistema de likes y presencia en tiempo real.",
        "Integración de checkout con Mercado Pago.",
        "Empaquetado con Capacitor y publicación en Play Store.",
      ],
    },
  ],
  skills: [
    { heading: "Core", items: "JavaScript, TypeScript, HTML5, CSS3" },
    { heading: "Frameworks", items: "React, Next.js, Astro, Angular" },
    { heading: "Estilos", items: "Tailwind CSS, shadcn/ui, diseño responsive" },
    { heading: "Integración", items: "APIs REST, autenticación, manejo de estado" },
    { heading: "Backend (complemento)", items: "Node.js, Express, Python, AWS Lambda, SQL Server" },
    { heading: "Herramientas", items: "Git, Docker, CI/CD, agentes de desarrollo" },
  ],
  education: [
    "<strong>Tecnicatura en Desarrollo Web</strong> · Instituto Superior de Calamuchita <em>(en curso)</em>",
    "<strong>Técnico en Electrónica</strong> · ENET, Laboulaye",
    "<strong>Inglés Técnico B2</strong> · CESSI",
    "<strong>Simulación Laboral</strong> · NoCountry",
  ],
  idiomas: "Español (nativo) · Inglés técnico (B2)",
};

export default cvFrontend;

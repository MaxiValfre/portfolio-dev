import type { CvData } from "./types";

const cvBase: CvData = {
  title: "Máximo Valfré | Full Stack Developer",
  contact: {
    email: "maximovalfre170@gmail.com",
    phone: "+54 (3385) 433320",
    location: "Argentina (remoto)",
    linkedin: "linkedin.com/in/maxivalfre",
    github: "github.com/MaxiValfre",
    website: "maxivalfreportfolio.netlify.app",
  },
  profile: [
    "Desarrollador Full Stack con 3 años de experiencia construyendo y manteniendo sistemas en producción. Trabajo end-to-end: frontend con Next.js y React, backend en Node.js y Python, y despliegue sobre AWS, integrando modelos de lenguaje donde aportan valor real.",
    "Mi foco es la <strong>automatización de procesos</strong>: detectar el trabajo manual y repetitivo que le consume horas al equipo y reemplazarlo por servicios que corren solos, con trazabilidad, control de errores y escalación a revisión humana cuando hace falta.",
  ],
  experience: [
    {
      role: "Full Stack Developer",
      org: "Fundación Educativa Saberes",
      period: "2024 – Actualidad",
      intro: "Responsable del desarrollo y mantenimiento de la plataforma interna y sus servicios de soporte.",
      bullets: [
        "<strong>Plataforma de pagos y gastos.</strong> Sistema de cuotas para estudiantes con carga de comprobantes y backoffice de conciliación bancaria, más un módulo de gastos con imputación multinivel. Frontend en <strong>Next.js + Tailwind</strong>, API REST con <strong>Node.js, Express y Sequelize</strong> sobre <strong>SQL Server</strong>, y funciones serverless en <strong>AWS Lambda, API Gateway y S3</strong>.",
        "<strong>Automatización de la conciliación de pagos.</strong> Reemplacé un cruce manual entre la base de datos y las planillas del área administrativa por un pipeline en <strong>Python</strong> que resuelve automáticamente los casos claros y escala a revisión humana solo los ambiguos, apoyándose en <strong>GPT-4o</strong>. Diseñado en capas separadas para poder cambiar el modelo o la fuente de datos sin tocar el resto.",
        "<strong>Microservicios de soporte.</strong> Monorepo en <strong>Node.js</strong> con deploy automatizado: verificación OCR de comprobantes bancarios con <strong>OpenAI</strong> que valida montos, fechas y datos fiscales contra la base; envío masivo de emails con control de cuota; y sincronización periódica de <strong>SQL Server → Google Sheets</strong>.",
        "<strong>Mensajería automática.</strong> Flujos de <strong>WhatsApp Business API</strong> para onboarding y notificaciones por evento, conectados por webhooks a los eventos de la plataforma.",
      ],
    },
    {
      role: "Freelance Developer",
      org: "Aplicación de citas",
      period: "2023",
      bullets: [
        "Aplicación web con <strong>Firebase</strong> (Authentication, Firestore, Realtime Database, Storage): gestión de perfiles, sistema de likes y presencia en tiempo real.",
        "Integración de pagos con <strong>Mercado Pago</strong> mediante webhooks.",
        "Empaquetado con <strong>Capacitor</strong> y publicación en <strong>Play Store</strong>.",
      ],
    },
  ],
  skills: [
    {
      heading: "Frontend",
      items: "React, Next.js, Astro, Angular, TypeScript, JavaScript, Tailwind CSS, HTML/CSS",
    },
    {
      heading: "Backend",
      items: "Node.js, Express, Python, FastAPI, APIs REST",
    },
    {
      heading: "Cloud, Datos & DevOps",
      items: "AWS (Lambda, API Gateway, S3), SQL Server, SQLite, Sequelize, Firebase, Docker, Git, CI/CD",
    },
    {
      heading: "IA & Automatización",
      items: "OpenAI API, Claude, agentes de desarrollo, Make, WhatsApp Business API, webhooks",
    },
  ],
  skillsNote: "Uso agentes de desarrollo como parte del flujo diario, con metodologías de planificación estructurada para cambios grandes.",
  education: [
    "<strong>Tecnicatura en Desarrollo Web</strong> · Instituto Superior de Calamuchita (en curso)",
    "<strong>Técnico en Electrónica</strong> · ENET, Laboulaye",
    "<strong>Simulación Laboral</strong> · NoCountry",
    "<strong>Inglés Técnico B2</strong> · CESSI",
  ],
};

export default cvBase;

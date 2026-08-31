import type { CvData } from "./types";

const cvIa: CvData = {
  title: "Máximo Valfré | Desarrollador · Automatización de Procesos e IA Aplicada",
  role: "Desarrollador · Automatización de Procesos e IA Aplicada",
  contact: {
    email: "maximovalfre170@gmail.com",
    phone: "+54 (3385) 433320",
    location: "Argentina (remoto)",
    linkedin: "linkedin.com/in/maxivalfre",
    github: "github.com/MaxiValfre",
    website: "maxivalfreportfolio.netlify.app",
  },
  profile: [
    "Desarrollador con 3 años de experiencia automatizando procesos internos en producción. Mi trabajo es detectar el trabajo manual y repetitivo que le consume horas al equipo y reemplazarlo por servicios que corren solos, con trazabilidad, control de errores y escalación a revisión humana cuando hace falta.",
    "Integro modelos de lenguaje donde aportan valor real y no donde suenan bien: resuelvo por reglas todo lo que se puede resolver por reglas, y consulto al modelo solo los casos ambiguos. Esa decisión es de costo y de control, no de moda.",
    "Vengo de un rol full stack, así que además de diseñar la automatización la construyo entera: relevamiento, integración con los sistemas existentes, API, interfaz de administración y puesta en producción.",
  ],
  experience: [
    {
      role: "Full Stack Developer",
      org: "Fundación Educativa Saberes",
      period: "2024 – Actualidad · Remoto, Argentina",
      intro: "Responsable de la plataforma interna y de los servicios que automatizan la operación administrativa.",
      bullets: [
        "<strong>Automatización de la conciliación de pagos.</strong> El área administrativa cruzaba a mano la base de datos contra sus planillas. Lo reemplacé por un pipeline en Python que resuelve automáticamente los casos claros y escala a revisión humana solo los ambiguos, apoyándose en GPT-4o con salida estructurada. Diseñado en capas separadas (conectores, reglas, comparación, decisión, escritura) para poder cambiar cada parte sin romper el resto.",
        "<strong>Verificación documental con IA.</strong> Servicio de lectura OCR de comprobantes bancarios con OpenAI: extrae y valida montos, fechas y datos fiscales, y define qué se aprueba solo y qué pasa a revisión. Eliminó la validación visual comprobante por comprobante.",
        "<strong>Integraciones y flujos entre sistemas.</strong> Monorepo de microservicios en Node.js sobre VPS con deploy automatizado: envío masivo de emails con control de cuota diaria y sincronización periódica de SQL Server hacia Google Sheets, para que el área administrativa siga trabajando en la herramienta que ya usa.",
        "<strong>Mensajería automática por evento.</strong> Flujos de WhatsApp Business API para onboarding y notificaciones, conectados por webhooks a los eventos de la plataforma. Sin intervención manual en el ciclo.",
        "<strong>Plataforma de pagos y gastos.</strong> La base sobre la que corre todo lo anterior: sistema de cuotas con carga de comprobantes, backoffice de conciliación y módulo de gastos con imputación multinivel. Frontend en Next.js + Tailwind, API REST en Node.js/Express sobre SQL Server y funciones serverless en AWS Lambda + API Gateway + S3.",
      ],
    },
    {
      role: "Freelance Developer",
      org: "Aplicación de citas",
      period: "2023",
      bullets: [
        "App web con Firebase (Authentication, Firestore, Realtime Database, Storage): perfiles, sistema de likes y presencia en tiempo real.",
        "Integración de pagos con Mercado Pago vía webhooks.",
        "Empaquetado con Capacitor y publicación en Play Store.",
      ],
    },
  ],
  skills: [
    { heading: "IA aplicada", items: "OpenAI API (GPT-4o), Claude, salida estructurada, OCR documental, escalación a revisión humana" },
    { heading: "Automatización e integración", items: "Webhooks, WhatsApp Business API, Make, APIs REST, sincronización entre sistemas, procesos programados" },
    { heading: "Backend", items: "Python, Node.js, Express, FastAPI" },
    { heading: "Datos", items: "SQL Server, SQLite, Sequelize, Google Sheets API, Firebase" },
    { heading: "Cloud & DevOps", items: "AWS (Lambda, API Gateway, S3), Docker, VPS, Git, CI/CD" },
    { heading: "Frontend", items: "React, Next.js, TypeScript, Astro, Angular, Tailwind CSS" },
  ],
  skillsNote: "Uso agentes de desarrollo como parte del flujo diario, con metodologías de planificación estructurada para cambios grandes.",
  comoTrabajo: [
    {
      title: "Primero el proceso, después la herramienta.",
      description: "Antes de automatizar relevo qué se hace hoy, cuánto cuesta y dónde se rompe. Automatizar un proceso malo solo lo hace fallar más rápido.",
    },
    {
      title: "Trazabilidad y manejo de errores desde el diseño.",
      description: "Reintentos, control de cuota y estados explícitos. Una automatización sin registro de lo que hizo no es confiable.",
    },
    {
      title: "Escalación a humano donde corresponde.",
      description: "No todo tiene que resolverse solo. Lo importante es que lo que quede para revisión sea poco y esté bien identificado.",
    },
  ],
  education: [
    "<strong>Tecnicatura en Desarrollo Web</strong> · Instituto Superior de Calamuchita <em>(en curso)</em>",
    "<strong>Técnico en Electrónica</strong> · ENET, Laboulaye",
    "<strong>Inglés Técnico B2</strong> · CESSI",
    "<strong>Simulación Laboral</strong> · NoCountry",
  ],
  idiomas: "Español (nativo) · Inglés técnico (B2)",
};

export default cvIa;

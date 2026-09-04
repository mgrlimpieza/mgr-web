import { Users, ShieldCheck, Clock, MapPin, Headphones, Award, type LucideIcon } from "lucide-react";

export type Highlight = {
  icon: LucideIcon;
  title: string;
  description?: string;
};

/** Barra inferior navy de Inicio (/). */
export const homeHighlights: Highlight[] = [
  { icon: Users, title: "Personal capacitado" },
  { icon: ShieldCheck, title: "Confianza y compromiso" },
  { icon: Clock, title: "Respuesta rápida 24h" },
  { icon: MapPin, title: "Cobertura en Montevideo y Área Metropolitana" },
];

/** Barra inferior navy de Servicios (/servicios). */
export const servicesHighlights: Highlight[] = [
  {
    icon: Headphones,
    title: "Atención personalizada",
    description: "Soluciones adaptadas a cada cliente",
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    description: "Estamos cuando nos necesitas",
  },
  {
    icon: MapPin,
    title: "Cobertura en Montevideo",
    description: "y Área Metropolitana",
  },
  {
    icon: Award,
    title: "Calidad garantizada",
    description: "Compromiso en cada servicio",
  },
];

/** Sección "Un servicio diseñado para adaptarse a su empresa" de Inicio. */
export const homeApproach = {
  title: "Un servicio diseñado para adaptarse a su empresa.",
  description:
    "Cada empresa tiene necesidades diferentes. Por eso diseñamos un plan de trabajo personalizado que garantiza un servicio eficiente, organizado y acorde a cada espacio.",
  items: [
    {
      icon: "clipboard" as const,
      title: "Planificación personalizada",
      description:
        "Analizamos cada instalación para definir horarios, frecuencia, cantidad de personal y materiales necesarios según las características de su empresa y su necesidad.",
    },
    {
      icon: "chat" as const,
      title: "Comunicación permanente",
      description:
        "Mantenemos una comunicación permanente para responder rápidamente ante cualquier necesidad y mejorar continuamente el servicio.",
    },
    {
      icon: "shield" as const,
      title: "Supervisión constante",
      description:
        "Nuestro equipo realiza controles periódicos para garantizar que cada tarea se ejecute con los estándares de calidad establecidos.",
    },
  ],
};

export const heroChecklist = [
  "Personal seleccionado y capacitado",
  "Supervisión permanente del servicio",
  "Planes adaptados a cada empresa",
  "Presupuesto sin costo",
];

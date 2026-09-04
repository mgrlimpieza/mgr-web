import {
  ShieldCheck,
  MessageCircle,
  Handshake,
  Award,
  Users,
  UserCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type CompanyValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const companyValues: CompanyValue[] = [
  {
    icon: ShieldCheck,
    title: "Compromiso",
    description: "Cumplimos con cada servicio de forma responsable y puntual.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación",
    description:
      "Mantenemos un contacto cercano y permanente con nuestros clientes, respondiendo de forma ágil ante consultas, solicitudes o imprevistos para garantizar un servicio eficiente y sin interrupciones.",
  },
  {
    icon: Handshake,
    title: "Confianza",
    description:
      "Construimos relaciones duraderas basadas en la transparencia y el cumplimiento.",
  },
  {
    icon: Award,
    title: "Calidad",
    description:
      "Buscamos la excelencia en cada detalle mediante procesos de supervisión y mejora continua.",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description:
      "Creemos que un equipo capacitado y comprometido es la base de un servicio de calidad.",
  },
  {
    icon: UserCheck,
    title: "Atención personalizada",
    description:
      "Cada cliente recibe una propuesta adaptada a sus necesidades y requerimientos.",
  },
  {
    icon: TrendingUp,
    title: "Mejora continua",
    description:
      "Evolucionamos constantemente para ofrecer un servicio cada vez más eficiente.",
  },
];

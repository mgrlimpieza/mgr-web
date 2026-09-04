import {
  Users,
  SprayCan,
  Truck,
  ShieldCheck,
  ClipboardList,
  Building2,
  Sparkles,
  PartyPopper,
  CalendarClock,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export type ServiceFeature = {
  icon: LucideIcon;
  label: string;
};

export type ServiceBullet = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  paragraphs: string[];
  /** Lista simple de items (ej. rubros a los que aplica). */
  list?: string[];
  /** Sub-bloques con título + descripción (ej. etapas de un evento). */
  bullets?: ServiceBullet[];
  features?: ServiceFeature[];
  /** Placeholder de imagen: TODO reemplazar por foto real del servicio. */
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "higiene-integral",
    number: 1,
    icon: Users,
    title: "Servicio de Higiene Integral",
    subtitle: "Un servicio completo para que usted solo se ocupe de su negocio.",
    paragraphs: [
      "Nuestro servicio de Higiene Integral está pensado para empresas que buscan delegar completamente la gestión de la limpieza en un proveedor confiable y profesional.",
      "Nos encargamos de todo el proceso: personal capacitado, productos de limpieza, insumos, maquinaria profesional, elementos de seguridad y supervisión permanente, garantizando un servicio eficiente y de calidad.",
      "Antes de comenzar, realizamos una visita técnica para conocer las características de sus instalaciones y elaborar una propuesta personalizada. A partir de ese relevamiento, diseñamos un plan de trabajo adaptado a sus necesidades, definiendo horarios, frecuencia del servicio, cantidad de personal y recursos necesarios para asegurar el normal funcionamiento de su empresa sin interrupciones.",
    ],
    features: [
      { icon: Users, label: "Personal capacitado" },
      { icon: SprayCan, label: "Productos e insumos incluidos" },
      { icon: Truck, label: "Maquinaria profesional" },
      { icon: ShieldCheck, label: "Supervisión permanente" },
      { icon: ClipboardList, label: "Plan de trabajo personalizado" },
    ],
    // TODO: reemplazar por foto real del servicio
    image: "/images/menuprincipal.jpeg",
    imageAlt: "Personal de MGR realizando limpieza de oficina",
  },
  {
    slug: "limpieza-final-de-obra",
    number: 2,
    icon: Building2,
    title: "Limpieza Final de Obra",
    subtitle: "La etapa final merece un resultado impecable.",
    paragraphs: [
      "Realizamos limpiezas finales de obra para constructoras, desarrolladores, empresas y particulares, dejando cada espacio listo para su entrega o puesta en funcionamiento.",
      "Nuestro equipo se encarga de eliminar restos de obra, polvo fino, residuos de construcción, manchas y suciedad acumulada, utilizando técnicas, productos y maquinaria adecuada para cada superficie.",
    ],
    list: [
      "Edificios corporativos",
      "Complejos habitacionales",
      "Oficinas",
      "Hoteles",
      "Locales comerciales",
      "Instituciones educativas",
      "Centros de salud",
      "Galpones y depósitos",
      "Viviendas particulares",
    ],
    // TODO: reemplazar por foto real del servicio
    image: "/images/cotizaciones.jpeg",
    imageAlt: "Limpieza final de obra en edificio en construcción",
  },
  {
    slug: "limpieza-profunda",
    number: 3,
    icon: Sparkles,
    title: "Limpieza Profunda",
    subtitle: "Recuperamos cada espacio con una limpieza intensiva y profesional.",
    paragraphs: [
      "La limpieza profunda está orientada a empresas, comercios, industrias y viviendas que requieren una intervención integral para devolver a sus instalaciones las mejores condiciones de higiene.",
      "Este servicio puede realizarse de forma puntual o periódica, según las necesidades de cada cliente, y contempla una limpieza exhaustiva de todas las áreas con personal especializado y equipamiento profesional.",
      "También ofrecemos limpiezas profundas en viviendas antes o después de una mudanza, reformas o cambios de ocupación.",
    ],
    // TODO: reemplazar por foto real del servicio
    image: "/images/menuprincipal.jpeg",
    imageAlt: "Limpieza profunda de superficies de vidrio en oficina",
  },
  {
    slug: "limpieza-de-eventos",
    number: 4,
    icon: PartyPopper,
    title: "Limpieza de Eventos",
    subtitle: "Nos ocupamos de la limpieza para que usted disfrute del evento.",
    paragraphs: [
      "La organización de un evento requiere coordinación en cada detalle, y la limpieza es un aspecto fundamental para brindar una excelente experiencia a los asistentes.",
      "En MGR ofrecemos un servicio integral de limpieza para eventos corporativos, conferencias, ferias, bodas y todo tipo de reuniones sociales o empresariales.",
      "De esta manera, usted puede concentrarse en el éxito del evento mientras nosotros nos ocupamos del resto.",
    ],
    bullets: [
      {
        title: "Antes del evento",
        description:
          "Preparamos cada espacio para que se encuentre en perfectas condiciones antes del ingreso de los invitados.",
      },
      {
        title: "Durante el evento",
        description:
          "Mantenemos limpios los baños, áreas comunes, cocina y demás sectores, asegurando una excelente imagen durante toda la jornada.",
      },
      {
        title: "Después del evento",
        description:
          "Realizamos la limpieza final del establecimiento, dejando las instalaciones en óptimas condiciones.",
      },
    ],
    // TODO: reemplazar por foto real del servicio
    image: "/images/cotizaciones.jpeg",
    imageAlt: "Salón preparado tras un servicio de limpieza de eventos",
  },
];

export const serviceBulletIcons: Record<string, LucideIcon> = {
  "Antes del evento": CalendarClock,
  "Durante el evento": ShieldCheck,
  "Después del evento": CheckCircle2,
};

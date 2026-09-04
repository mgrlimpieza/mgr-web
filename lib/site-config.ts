export const siteConfig = {
  name: "MGR Servicios Integrales",
  shortName: "MGR",
  tagline: "Servicios de limpieza y portería",
  description:
    "Empresa uruguaya de servicios de limpieza profesional y portería, con 12 años de trayectoria. Cobertura en Montevideo y Área Metropolitana.",
  // TODO: reemplazar por la URL definitiva de producción antes del deploy
  url: "https://www.mgrlimpieza.com.uy",
  contactEmail: "contacto@mgrlimpieza.com.uy",
  businessHours: "Lunes a viernes de 8 a 18hs",
  serviceArea: "Montevideo y Área Metropolitana, Uruguay",
  yearsOfExperience: 12,
  social: {
    instagram: "https://www.instagram.com/mgr.serviciosintegrales/",
    // TODO: agregar link real de Facebook si la empresa lo confirma
    facebook: null as string | null,
  },
} as const;

/** Número de WhatsApp en formato internacional sin "+" ni espacios, ej: 59899123456. */
export function getWhatsappNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "598XXXXXXXX";
}

export function buildWhatsappLink(message: string) {
  const number = getWhatsappNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

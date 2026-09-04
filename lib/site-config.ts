export const siteConfig = {
  name: "MGR Servicios Integrales",
  shortName: "MGR",
  tagline: "Servicios de limpieza y portería",
  description:
    "Empresa uruguaya de servicios de limpieza profesional y portería, con 12 años de trayectoria. Cobertura en Montevideo y Área Metropolitana.",
  // TODO: reemplazar por la URL definitiva de producción antes del deploy
  url: "https://www.mgrlimpieza.com.uy",
  // Email público del negocio: se muestra en el footer y en el schema.org (LocalBusiness).
  contactEmail: "contacto@mgrlimpieza.com.uy",
  // Casilla real donde Resend entrega los formularios mientras contactEmail
  // (el dominio propio) no está activa. No se muestra en ningún lado del sitio.
  // TODO: unificar con contactEmail cuando esa casilla esté lista.
  notificationEmail: "mgr.limpieza@gmail.com",
  // Formato: código país + 9 + área + número, sin "+" ni espacios, ej: 5491155099149.
  whatsappNumber: "5491155099149",
  businessHours: "Lunes a viernes de 8 a 18hs",
  serviceArea: "Montevideo y Área Metropolitana, Uruguay",
  yearsOfExperience: 12,
  social: {
    instagram: "https://www.instagram.com/mgr.serviciosintegrales/",
    // TODO: agregar link real de Facebook si la empresa lo confirma
    facebook: null as string | null,
  },
} as const;

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

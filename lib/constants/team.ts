export type TeamMember = {
  name: string;
  role: string;
  /** Ruta de la foto en /public. null = usar avatar placeholder con iniciales. */
  photo: string | null;
};

// TODO: reemplazar avatares placeholder por fotos reales del equipo cuando estén disponibles.
// TODO: confirmar nombre real para "Servicio técnico" y "Contador".
export const teamMembers: TeamMember[] = [
  { name: "Mathias Galizzi", role: "Director y gerente general", photo: null },
  { name: "Rodrigo Leal", role: "Supervisión general", photo: null },
  { name: "Carmen Rivero", role: "Administración y personas", photo: null },
  { name: "Pendiente", role: "Servicio técnico", photo: null },
  { name: "Pendiente", role: "Contador", photo: null },
  { name: "Maximiliano Rodríguez", role: "Marketing y redes sociales", photo: null },
];

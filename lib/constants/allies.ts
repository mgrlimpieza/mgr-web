export type Ally = {
  name: string;
  logo: string;
};

// Logos placeholder (empresas ficticias) hasta contar con los logos reales
// de los clientes de MGR. Ver public/images/logos-empresas/.
export const allies: Ally[] = [
  { name: "Hotel Plaza", logo: "/images/logos-empresas/hotel-plaza.svg" },
  { name: "Café Andina", logo: "/images/logos-empresas/cafe-andina.svg" },
  { name: "Constructora Sur", logo: "/images/logos-empresas/constructora-sur.svg" },
  { name: "Grupo Lumen", logo: "/images/logos-empresas/grupo-lumen.svg" },
  { name: "Edificio Norte", logo: "/images/logos-empresas/edificio-norte.svg" },
  { name: "Estudio Vega", logo: "/images/logos-empresas/estudio-vega.svg" },
];

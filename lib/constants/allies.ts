export type Ally = {
  name: string;
  logo: string;
};

// Logos placeholder (empresas ficticias) hasta contar con los logos reales
// de los clientes de MGR. Ver public/images/allies/.
export const allies: Ally[] = [
  { name: "Hotel Plaza", logo: "/images/allies/hotel-plaza.svg" },
  { name: "Café Andina", logo: "/images/allies/cafe-andina.svg" },
  { name: "Constructora Sur", logo: "/images/allies/constructora-sur.svg" },
  { name: "Grupo Lumen", logo: "/images/allies/grupo-lumen.svg" },
  { name: "Edificio Norte", logo: "/images/allies/edificio-norte.svg" },
  { name: "Estudio Vega", logo: "/images/allies/estudio-vega.svg" },
];

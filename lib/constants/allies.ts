export type Ally = {
  name: string;
  logo: string;
  /**
   * Dimensiones intrínsecas reales del archivo (en SVG: width/height del <svg>).
   * Tienen que coincidir con el archivo: el carrusel reserva el ancho de cada logo
   * con esta proporción, y si no coincide, el logo cambia de ancho al cargar y el
   * carrusel pega un salto.
   */
  width: number;
  height: number;
};

// Logos placeholder (empresas ficticias) hasta contar con los logos reales
// de los clientes de MGR. Ver public/images/allies/.
export const allies: Ally[] = [
  { name: "Hotel Plaza", logo: "/images/allies/hotel-plaza.svg", width: 520, height: 160 },
  { name: "Café Andina", logo: "/images/allies/cafe-andina.svg", width: 520, height: 160 },
  { name: "Constructora Sur", logo: "/images/allies/constructora-sur.svg", width: 520, height: 160 },
  { name: "Grupo Lumen", logo: "/images/allies/grupo-lumen.svg", width: 520, height: 160 },
  { name: "Edificio Norte", logo: "/images/allies/edificio-norte.svg", width: 520, height: 160 },
  { name: "Estudio Vega", logo: "/images/allies/estudio-vega.svg", width: 520, height: 160 },
];

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNav: NavLink[] = [
  ...mainNav,
  { label: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
];

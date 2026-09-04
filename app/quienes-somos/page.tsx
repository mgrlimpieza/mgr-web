import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ValuesGrid } from "@/components/sections/values-grid";
import { TeamSection } from "@/components/sections/team-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: `Conocé a MGR Servicios Integrales: ${siteConfig.yearsOfExperience} años brindando servicios de limpieza profesional y portería en Montevideo y Área Metropolitana.`,
  alternates: { canonical: "/quienes-somos" },
};

export default function QuienesSomosPage() {
  return (
    <>
      <Hero
        variant="full-bleed"
        eyebrow="Quiénes somos"
        title={`Somos MGR Limpieza con ${siteConfig.yearsOfExperience} años de trayectoria.`}
        description="Desde nuestros inicios trabajamos con un objetivo claro: brindar servicios de limpieza profesional que permitan a nuestros clientes enfocarse en su negocio mientras nosotros nos ocupamos del mantenimiento y la higiene de sus instalaciones."
        image={{
          // TODO: reemplazar por foto real del hero de Quiénes somos
          src: "/images/cotizaciones.jpeg",
          alt: "Personal de MGR en las oficinas de un cliente",
          width: 1536,
          height: 1024,
        }}
      >
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          <p>
            Nos especializamos en la limpieza de oficinas, edificios, hoteles, finales de
            obra, locales comerciales y otros espacios corporativos, ofreciendo soluciones
            adaptadas a las necesidades de cada cliente.
          </p>
          <p>
            Creemos que un buen servicio no consiste únicamente en limpiar un espacio, sino
            en brindar tranquilidad, confianza y un estándar de calidad constante. Por eso
            trabajamos con personal capacitado, supervisión permanente y un compromiso
            diario con la mejora continua.
          </p>
          <p>
            En MGR entendemos que cada empresa es diferente. Por eso diseñamos planes de
            trabajo personalizados, utilizando los productos, equipos y recursos adecuados
            para garantizar un servicio eficiente, seguro y de alta calidad.
          </p>
        </div>
      </Hero>

      <ValuesGrid />
      <TeamSection />
    </>
  );
}

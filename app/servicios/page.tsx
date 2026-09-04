import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServiceBlock } from "@/components/sections/service-block";
import { BottomBar } from "@/components/sections/bottom-bar";
import { services } from "@/lib/constants/services";
import { servicesHighlights } from "@/lib/constants/highlights";

export const metadata: Metadata = {
  title: "Servicios de limpieza profesional",
  description:
    "Higiene integral, limpieza final de obra, limpieza profunda y limpieza de eventos. Soluciones profesionales de limpieza adaptadas a cada necesidad en Montevideo.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <Hero
        variant="full-bleed"
        eyebrow="Nuestros servicios"
        title="Nuestros servicios"
        description="Soluciones profesionales de limpieza adaptadas a cada necesidad. Calidad, compromiso y confianza en cada servicio que brindamos."
        image={{
          src: "/images/menuprincipal.jpeg",
          alt: "Personal de MGR limpiando una oficina",
          width: 1127,
          height: 1395,
        }}
      />

      <div className="bg-white">
        {services.map((service, index) => (
          <ServiceBlock key={service.slug} service={service} reverse={index % 2 === 1} />
        ))}
      </div>

      <BottomBar items={servicesHighlights} />
    </>
  );
}

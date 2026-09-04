import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { FeatureChecklist } from "@/components/sections/feature-checklist";
import { AdaptSection } from "@/components/sections/adapt-section";
import { AlliesSection } from "@/components/sections/allies-section";
import { BottomBar } from "@/components/sections/bottom-bar";
import { heroChecklist } from "@/lib/constants/highlights";
import { homeHighlights } from "@/lib/constants/highlights";

export const metadata: Metadata = {
  title: "Servicios de limpieza profesional en Montevideo",
  description:
    "MGR Servicios Integrales ofrece limpieza profesional para oficinas, edificios, hoteles y finales de obra en Montevideo y Área Metropolitana. Presupuesto sin costo.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        variant="full-bleed"
        eyebrow="Servicios de limpieza profesional"
        title="Limpieza profesional diseñado para que usted no tenga que preocuparse"
        description="Nos especializamos en oficinas, edificios, hoteles y finales de obra, ofreciendo un servicio confiable, supervisado y adaptado a las necesidades de cada cliente en Montevideo y Área Metropolitana."
        image={{
          src: "/images/menuprincipal.jpeg",
          alt: "Personal de MGR realizando limpieza profesional en oficina",
          width: 1127,
          height: 1395,
        }}
      >
        <FeatureChecklist items={[...heroChecklist]} />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-lg bg-brand-blue px-6 text-base text-white hover:bg-brand-blue/90"
            nativeButton={false}
            render={<Link href="/contacto" />}
          >
            Solicitar cotización
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-lg border-brand-blue px-6 text-base text-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue"
            nativeButton={false}
            render={<Link href="/servicios" />}
          >
            Conocer nuestros servicios
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Hero>

      <AdaptSection />
      <AlliesSection />
      <BottomBar items={homeHighlights} />
    </>
  );
}

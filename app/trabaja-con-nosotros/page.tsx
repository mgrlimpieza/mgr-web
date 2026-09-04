import type { Metadata } from "next";
import { ApplicationForm } from "@/components/forms/application-form";
import { Hero } from "@/components/sections/hero";
import { FormCard } from "@/components/sections/form-card";
import { WhatsappCta } from "@/components/sections/whatsapp-cta";

export const metadata: Metadata = {
  title: "Trabaja con nosotros",
  description:
    "Sumate al equipo de MGR Servicios Integrales. Contanos sobre vos y adjuntá tu CV para formar parte de nuestro equipo de limpieza profesional.",
  alternates: { canonical: "/trabaja-con-nosotros" },
};

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <Hero
        variant="full-bleed"
        eyebrow="Trabaja con nosotros"
        title="Sumate al equipo MGR"
        description="Buscamos personas comprometidas, responsables y con ganas de crecer. Contanos sobre vos y adjuntá tu CV: te contactaremos ante nuevas oportunidades."
        image={{
          src: "/images/menuprincipal.jpeg",
          alt: "Integrante del equipo de MGR realizando su trabajo",
          width: 1127,
          height: 1395,
        }}
        className="pb-20 sm:pb-28 lg:pb-32"
      />

      <FormCard maxWidth="max-w-4xl" className="flex flex-col gap-8">
        <ApplicationForm />

        <div className="border-t border-black/5 pt-8">
          <p className="mb-4 text-center text-sm text-slate-500">
            ¿Preferís consultarnos antes de postularte?
          </p>
          <WhatsappCta
            title="Escribinos por WhatsApp"
            description="Consultanos sobre oportunidades disponibles, sin necesidad de adjuntar tu CV."
            message="Hola MGR, quisiera consultar sobre oportunidades para trabajar en el equipo."
          />
        </div>
      </FormCard>

      <div className="h-16 sm:h-20" />
    </>
  );
}

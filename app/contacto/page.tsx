import type { Metadata } from "next";
import { Headset, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FormCard } from "@/components/sections/form-card";
import { QuoteForm } from "@/components/forms/quote-form";
import { InfoSideCard } from "@/components/sections/info-side-card";
import { WhatsappCta } from "@/components/sections/whatsapp-cta";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JoinTeamBanner } from "@/components/sections/join-team-banner";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Solicitar cotización",
  description:
    "Completá el formulario y nos pondremos en contacto para brindarte una propuesta personalizada de limpieza para tu empresa. Presupuesto sin costo.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Hero
        variant="full-bleed"
        eyebrow="Cotización"
        title="Solicitar cotización"
        description="Completá el formulario y nos pondremos en contacto para brindarte una propuesta personalizada."
        image={{
          src: "/images/cotizaciones.jpeg",
          alt: "Personal de MGR desinfectando un escritorio de oficina",
          width: 1536,
          height: 1024,
        }}
        className="pb-20 sm:pb-28 lg:pb-32"
      />

      <FormCard className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <QuoteForm />

        <div className="flex flex-col gap-8 lg:pl-4">
          <InfoSideCard
            icon={Headset}
            title="Te asesoramos sin compromiso"
            description="Nuestro equipo evaluará tu solicitud y te contactará a la brevedad para brindarte la mejor solución para tu empresa."
          />
          <Separator />
          <InfoSideCard
            icon={ShieldCheck}
            title="Confidencialidad garantizada"
            description="Toda la información que compartas será tratada con absoluta confidencialidad."
          />
          <Separator />
          <WhatsappCta message="Hola MGR, quisiera hacer una consulta sobre sus servicios de limpieza." />
        </div>
      </FormCard>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion />
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <JoinTeamBanner />
      </div>
    </>
  );
}

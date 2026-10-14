import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/constants/services";

export function ServiceBlock({
  service,
  tinted = false,
}: {
  service: Service;
  /** Fondo celeste claro, para alternar secciones y marcar el ritmo de la página. */
  tinted?: boolean;
}) {
  const Icon = service.icon;

  return (
    <section
      id={service.slug}
      className={cn("scroll-mt-28 overflow-hidden py-14 sm:py-16 lg:py-20", tinted && "bg-brand-lightbg")}
    >
      {/* La imagen siempre va a la izquierda (sin alternar): las fotos traen el logo
          y un banner de texto de ese lado, así que solo se puede fundir el borde derecho. */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:items-center lg:gap-0">
        <FadeIn direction="right">
          {/* Ancho/alto intrínsecos (sin `fill` ni object-cover): la foto se muestra
              entera en su proporción 3:2, nunca se recorta. Desde lg llega al borde
              izquierdo real del viewport (full bleed, mismo criterio que el hero). */}
          <Image
            src={service.image}
            alt={service.imageAlt}
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="mask-fade-service h-auto w-full"
          />
        </FadeIn>

        {/* Padding derecho calculado para que el texto quede alineado con el borde
            del contenedor max-w-7xl del resto del sitio. */}
        <FadeIn
          direction="left"
          className="flex flex-col gap-5 px-4 sm:px-6 lg:py-2 lg:pr-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] lg:pl-4"
        >
          <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase">
            <span className="h-px w-6 bg-brand-blue" />
            Servicio {String(service.number).padStart(2, "0")}
          </span>

          <div className="flex items-start gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-navy">
              <Icon className="size-6 text-white" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-1 text-sm font-semibold text-brand-blue sm:text-base">
                {service.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {service.list && (
            <>
              <p className="text-sm font-semibold text-brand-navy">
                Brindamos soluciones para:
              </p>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-slate-600 sm:grid-cols-2">
                {service.list.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {service.bullets && (
            <div className="flex flex-col gap-4">
              {service.bullets.map((bullet) => (
                <div key={bullet.title}>
                  <p className="text-sm font-bold text-brand-navy">{bullet.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {bullet.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {service.features && (
            <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-black/5 pt-5">
              {service.features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2">
                  <feature.icon className="size-5 shrink-0 text-brand-blue" strokeWidth={1.75} />
                  <span className="text-xs font-medium text-slate-600 sm:text-sm">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

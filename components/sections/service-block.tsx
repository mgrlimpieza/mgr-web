import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/constants/services";

export function ServiceBlock({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  const Icon = service.icon;

  return (
    <section
      id={service.slug}
      className="scroll-mt-28 border-b border-black/5 py-14 last:border-b-0 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <FadeIn
            direction={reverse ? "right" : "left"}
            className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-lg"
          >
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>

          <FadeIn direction={reverse ? "left" : "right"} className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-navy">
                <Icon className="size-6 text-white" strokeWidth={1.75} />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                  {service.number}. {service.title}
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
      </div>
    </section>
  );
}

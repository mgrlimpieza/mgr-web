import Image from "next/image";
import { allies } from "@/lib/constants/allies";
import { FadeIn } from "@/components/motion/fade-in";

// Segundos de recorrido por logo: a más logos, el loop dura más pero la
// velocidad (px/seg) se mantiene constante y no se nota un salto.
const SECONDS_PER_ITEM = 6;

/**
 * Empresas con las que trabajamos.
 * TODO: reemplazar los logos placeholder (ficticios) por los logos reales
 * de las empresas aliadas de MGR, manteniendo las specs de public/images/logos-empresas/.
 */
export function AlliesSection() {
  // Se duplica el array para que el loop de -50% sea imperceptible.
  const track = [...allies, ...allies];
  const duration = allies.length * SECONDS_PER_ITEM;

  return (
    <section className="border-y border-black/5 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
            Empresas con las que trabajamos
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 overflow-hidden mask-fade-x">
          {/* Sin pausa en hover: el carrusel siempre está en movimiento (decisión del cliente). */}
          <div
            className="animate-marquee flex w-max items-center gap-16 sm:gap-20"
            style={{ animationDuration: `${duration}s` }}
          >
            {track.map((ally, index) => (
              <div
                key={`${ally.name}-${index}`}
                aria-hidden={index >= allies.length}
                className="flex h-16 shrink-0 items-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20"
              >
                <Image
                  src={ally.logo}
                  alt={ally.name}
                  width={400}
                  height={160}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import Image from "next/image";
import { allies, type Ally } from "@/lib/constants/allies";
import { FadeIn } from "@/components/motion/fade-in";

// Segundos de recorrido por logo: a más logos, el loop dura más pero la
// velocidad (px/seg) se mantiene constante y no se nota un salto.
const SECONDS_PER_ITEM = 6;

// Mínimo de logos por grupo: cada grupo tiene que ser más ancho que el contenedor
// (hasta 1216px en desktop), si no, al final de cada vuelta queda un hueco en blanco.
// Si hay pocos logos reales, se repiten dentro del grupo.
const MIN_ITEMS_PER_GROUP = 8;

function buildGroup(items: Ally[]) {
  const repeats = Math.max(1, Math.ceil(MIN_ITEMS_PER_GROUP / items.length));
  return Array.from({ length: repeats }, () => items).flat();
}

/**
 * Empresas con las que trabajamos.
 * TODO: reemplazar los logos placeholder (ficticios) por los logos reales
 * de las empresas aliadas de MGR, manteniendo las specs de public/images/allies/.
 */
export function AlliesSection() {
  const group = buildGroup(allies);
  const duration = group.length * SECONDS_PER_ITEM;

  return (
    <section className="border-y border-black/5 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
            Empresas con las que trabajamos
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 overflow-hidden mask-fade-x">
          {/* Sin pausa en hover: el carrusel siempre está en movimiento (decisión del cliente).
              Dos grupos idénticos uno detrás del otro: la animación corre -50% (exactamente
              un grupo) y vuelve a 0 sin que se note. El espacio entre logos es padding a la
              derecha de cada uno (no `gap`), para que ambos grupos midan exactamente lo mismo
              y el empalme no tenga saltos. */}
          <div
            className="animate-marquee flex w-max"
            style={{ animationDuration: `${duration}s` }}
          >
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {group.map((ally, index) => (
                  <li
                    key={`${ally.name}-${index}`}
                    className="flex h-16 shrink-0 items-center pr-16 opacity-70 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20 sm:pr-20"
                  >
                    {/* eager: con lazy, el navegador no carga los logos recortados por el
                        overflow-hidden hasta que entran en pantalla, y en mobile se ve
                        un hueco en blanco mientras cargan. */}
                    <Image
                      src={ally.logo}
                      alt={copy === 0 && index < allies.length ? ally.name : ""}
                      width={ally.width}
                      height={ally.height}
                      loading="eager"
                      className="h-full w-auto object-contain"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

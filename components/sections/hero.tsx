import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: HeroImage;
  children?: ReactNode;
  /**
   * "full-bleed": la imagen ocupa todo el borde derecho (Inicio).
   * "contained": la imagen queda en un recuadro con bordes redondeados (resto de páginas).
   */
  variant?: "full-bleed" | "contained";
  className?: string;
  /** Object-position de la imagen full-bleed: ajustar por foto si el encuadre por defecto no queda bien. */
  imagePosition?: string;
  /** Oculta la imagen en mobile (solo se muestra desde lg). */
  hideImageOnMobile?: boolean;
};

export function Hero({
  eyebrow,
  title,
  description,
  image,
  children,
  variant = "contained",
  className,
  imagePosition = "object-[center_12%]",
  hideImageOnMobile = false,
}: HeroProps) {
  const isFullBleed = variant === "full-bleed";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-brand-lightbg to-white",
        className
      )}
    >
      {/* `relative`: ancla propia para la imagen full-bleed (inset-y-0), independiente
          de cualquier padding extra que la página agregue en el `<section>` (por ej.
          el espacio inferior que usa /contacto para que la card del formulario flote
          encima del hero) — así ese padding no estira ni recorta la imagen. */}
      <div
        className={cn(
          "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10",
          isFullBleed
            ? // Sin max-w a partir de lg: si no, el contenedor centrado deja un
              // hueco enorme a la izquierda del texto en pantallas anchas mientras
              // la imagen (full bleed) sí llega al borde real derecho.
              "lg:max-w-none lg:grid-cols-[2fr_3fr] lg:gap-0"
            : "lg:grid-cols-2 lg:gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-6",
            isFullBleed &&
              cn(
                "px-4 sm:px-6 lg:px-12 lg:py-14",
                // Sin imagen en mobile el hero queda solo con texto: menos aire arriba
                // para que no se vea un bloque vacío antes del título.
                hideImageOnMobile ? "pt-8 pb-10 sm:pt-10 sm:pb-12" : "py-14 sm:py-16"
              )
          )}
        >
          {/* Sin eyebrow no se renderiza nada: si no, el elemento vacío igual ocupa
              un hueco del gap y empuja el título hacia abajo. */}
          {eyebrow && (
            <FadeIn>
              <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase">
                <span className="h-px w-6 bg-brand-blue" />
                {eyebrow}
              </span>
            </FadeIn>
          )}

          <FadeIn delay={0.05}>
            <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-brand-navy sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </FadeIn>

          {children && (
            <FadeIn delay={0.15} className="flex flex-col gap-6">
              {children}
            </FadeIn>
          )}
        </div>

        <FadeIn
          direction="right"
          delay={0.1}
          className={cn(
            "relative aspect-4/5 w-full",
            hideImageOnMobile && "hidden lg:block",
            isFullBleed
              ? // A partir de lg, la imagen se saca del flujo del grid y se ancla al
                // borde derecho real del viewport (full bleed), ocupando ~60% del ancho.
                // El contenedor `<section>` (position: relative, full width) es el
                // ancestro posicionado más cercano, por eso `right-0` llega hasta el
                // borde de la pantalla sin importar el max-w-7xl del grid que lo contiene.
                "lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[60%]"
              : "overflow-hidden rounded-3xl shadow-xl lg:aspect-[6/5] lg:h-full lg:min-h-[420px]"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes={isFullBleed ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
            className={cn(
              "object-cover",
              // Full bleed real: sin border-radius en ninguna esquina. object-top
              // prioriza que no se corte la cabeza al recortar con object-cover.
              isFullBleed ? cn("mask-fade-left", imagePosition) : "rounded-3xl"
            )}
          />
        </FadeIn>
      </div>

      {/* Sin imagen en mobile, una línea sutil marca dónde termina el hero y empieza
          el contenido (desde lg la imagen ya cumple ese rol). */}
      {hideImageOnMobile && (
        <div
          aria-hidden
          className="mx-4 h-px bg-gradient-to-r from-transparent via-brand-navy/15 to-transparent sm:mx-6 lg:hidden"
        />
      )}
    </section>
  );
}

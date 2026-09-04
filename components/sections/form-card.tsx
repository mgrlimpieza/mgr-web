import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card blanca que "flota" sobre el padding inferior del Hero (offset negativo),
 * compartida por /contacto y /trabaja-con-nosotros.
 *
 * `relative` es necesario acá (no solo estético): el Hero tiene `position:
 * relative` para poder anclar su imagen full-bleed, y al no tener z-index
 * explícito, cualquier contenido no posicionado que se solape con su caja
 * (como esta card, que sube con margin negativo hacia el padding del Hero)
 * queda pintado DEBAJO del Hero pese a venir después en el DOM, tapando el
 * primer campo del formulario. Al posicionar la card también, gana el orden
 * de DOM dentro del mismo nivel de stacking y se pinta arriba, como corresponde.
 */
export function FormCard({
  children,
  maxWidth = "max-w-7xl",
  className,
}: {
  children: ReactNode;
  maxWidth?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto -mt-10 px-4 sm:-mt-16 sm:px-6 lg:-mt-20 lg:px-8",
        maxWidth
      )}
    >
      <div
        className={cn(
          "rounded-3xl bg-white p-6 pt-8 shadow-xl ring-1 ring-black/5 sm:p-10 lg:p-12",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

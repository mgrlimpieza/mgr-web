import Image from "next/image";
import Link from "next/link";
import { Mail, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/icons/social-icons";
import { footerNav } from "@/lib/constants/nav";
import { services } from "@/lib/constants/services";
import { siteConfig } from "@/lib/site-config";

// Título de la columna de links de navegación del footer. Aislado en una constante
// para que sea fácil de encontrar y ajustar más adelante si se quiere otra palabra.
const EXPLORE_COLUMN_TITLE = "Explora";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {/* TODO: reemplazar por el logo en PNG transparente / SVG cuando esté disponible */}
            <div className="flex size-12 items-center justify-center rounded-lg bg-white p-1.5">
              <Image
                src="/images/logo.jpeg"
                alt="MGR Servicios Integrales"
                width={1025}
                height={1024}
                // Ver comentario en components/layout/logo.tsx: mitiga artefactos de compresión.
                quality={100}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <span className="text-lg font-extrabold tracking-tight">MGR</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Brindamos soluciones de limpieza profesionales y confiables para empresas en
            Montevideo y Área Metropolitana.
          </p>

          <div className="mt-2 flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguinos en Instagram"
              // Reposo (desktop): círculo blanco, borde brand-blue, glifo negro (contraste
              // sobre el footer navy). Hover (desktop): degradado ya implementado, sin tocar.
              // Mobile (sin hover táctil real): se muestra siempre con el tratamiento de hover.
              className="group flex size-10 items-center justify-center rounded-full border border-transparent bg-gradient-to-tr from-amber-400 via-pink-600 to-purple-600 text-white transition-all duration-300 sm:border-brand-blue sm:bg-none sm:bg-white sm:text-black sm:hover:-translate-y-0.5 sm:hover:border-transparent sm:hover:bg-gradient-to-tr sm:hover:from-amber-400 sm:hover:via-pink-600 sm:hover:to-purple-600 sm:hover:text-white"
            >
              <InstagramIcon className="size-5 transition-transform group-hover:scale-110" />
            </a>
            {/* TODO: descomentar y agregar el link real de Facebook cuando esté disponible
            <a
              href={siteConfig.social.facebook ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguinos en Facebook"
              className="group flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-blue-600"
            >
              <FacebookIcon className="size-5 transition-transform group-hover:scale-110" />
            </a>
            */}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
            {EXPLORE_COLUMN_TITLE}
          </h3>
          <ul className="flex flex-col gap-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
            Servicios
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios#${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0" />
                {siteConfig.contactEmail}
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-white/70">
              <Clock className="mt-0.5 size-4 shrink-0" />
              {siteConfig.businessHours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:px-6 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>Montevideo, Uruguay</p>
        </div>
      </div>
    </footer>
  );
}

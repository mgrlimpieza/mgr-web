import { WhatsappIcon } from "@/components/icons/social-icons";
import { buildWhatsappLink } from "@/lib/site-config";

export function WhatsappCta({
  title = "¿Preferís escribirnos directo?",
  description = "Chateá con nosotros por WhatsApp y te respondemos a la brevedad.",
  message = "Hola MGR, quisiera hacer una consulta.",
}: {
  title?: string;
  description?: string;
  message?: string;
}) {
  return (
    <a
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-50 p-5 transition-colors hover:bg-emerald-100"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white transition-transform group-hover:scale-105">
        <WhatsappIcon className="size-6" />
      </span>
      <div>
        <p className="text-sm font-bold text-emerald-900 sm:text-base">{title}</p>
        <p className="mt-0.5 text-xs text-emerald-700 sm:text-sm">{description}</p>
      </div>
    </a>
  );
}

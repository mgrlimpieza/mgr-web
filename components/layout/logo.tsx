import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Version compacta del logo (icono + "MGR", sin tagline) — pensada para espacios
// chicos como el header. El logo completo (logo.jpeg) se reserva para lugares con
// mas espacio disponible (ver AGENTS.md).
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center shrink-0", className)}>
      <Image
        src="/images/logo-compacto.svg"
        alt="MGR Servicios Integrales"
        width={240}
        height={64}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}

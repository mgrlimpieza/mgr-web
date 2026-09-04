import Image from "next/image";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/constants/team";

const AVATAR_PALETTE = [
  "bg-brand-navy",
  "bg-brand-blue",
  "bg-brand-logo",
  "bg-slate-500",
  "bg-slate-600",
  "bg-blue-800",
];

function getInitials(name: string) {
  if (name === "Pendiente") return null;
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function paletteIndex(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i)) % AVATAR_PALETTE.length;
  return hash;
}

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = getInitials(member.name);
  const bg = AVATAR_PALETTE[paletteIndex(member.name)];

  return (
    <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className={`relative flex aspect-square items-center justify-center ${bg}`}>
        {/* TODO: reemplazar por foto real del equipo — ver lib/constants/team.ts */}
        {member.photo ? (
          <Image src={member.photo} alt={member.name} fill className="object-cover" />
        ) : initials ? (
          <span className="text-4xl font-bold text-white/90">{initials}</span>
        ) : (
          <User className="size-14 text-white/70" strokeWidth={1.5} />
        )}
      </div>
      <div className="px-4 py-4 text-center">
        <p className="text-sm font-bold text-brand-navy">
          {member.name === "Pendiente" ? "A confirmar" : member.name}
        </p>
        <p className="mt-1 text-xs text-slate-500 italic">{member.role}</p>
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";

export function InfoSideCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-lightbg">
        <Icon className="size-7 text-brand-blue" strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}

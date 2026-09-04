import { CheckCircle2 } from "lucide-react";

export function FeatureChecklist({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <CheckCircle2 className="size-5 shrink-0 fill-brand-blue text-white" />
          <span className="text-sm font-medium text-brand-navy sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

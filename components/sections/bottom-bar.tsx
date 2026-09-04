import type { Highlight } from "@/lib/constants/highlights";
import { FadeIn } from "@/components/motion/fade-in";

export function BottomBar({ items }: { items: Highlight[] }) {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05} className="flex items-center gap-3">
            <item.icon className="size-9 shrink-0 text-white/90" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">{item.title}</span>
              {item.description && (
                <span className="text-xs text-white/60">{item.description}</span>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

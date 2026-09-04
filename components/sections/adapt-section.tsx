import { ClipboardCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { homeApproach } from "@/lib/constants/highlights";
import { FadeIn } from "@/components/motion/fade-in";

const iconMap = {
  clipboard: ClipboardCheck,
  chat: MessagesSquare,
  shield: ShieldCheck,
};

export function AdaptSection() {
  return (
    <section className="bg-brand-lightbg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl lg:whitespace-nowrap xl:text-4xl">
            {homeApproach.title}
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-brand-blue" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {homeApproach.description}
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeApproach.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn
                key={item.title}
                delay={index * 0.08}
                className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5"
              >
                <span className="flex size-20 items-center justify-center rounded-full bg-brand-lightbg">
                  <Icon className="size-9 text-brand-blue" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-brand-navy">{item.title}</h3>
                <span className="mx-auto mt-2.5 mb-2.5 block h-1 w-10 rounded-full bg-brand-blue" />
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

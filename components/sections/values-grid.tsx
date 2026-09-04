import { companyValues } from "@/lib/constants/values";
import { FadeIn } from "@/components/motion/fade-in";

export function ValuesGrid() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Nuestros valores
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-brand-blue" />
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value, index) => (
            <FadeIn
              key={value.title}
              delay={index * 0.05}
              className="flex flex-col items-center rounded-2xl bg-brand-lightbg p-8 text-center"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                <value.icon className="size-7 text-brand-blue" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants/faq";
import { FadeIn } from "@/components/motion/fade-in";

export function FaqAccordion() {
  return (
    <div>
      <FadeIn>
        <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          Resolvemos las dudas más comunes sobre nuestros servicios.
        </p>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-8">
        <Accordion className="flex flex-col gap-3">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="rounded-xl border border-black/5 bg-white px-5"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-brand-navy hover:no-underline sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  );
}

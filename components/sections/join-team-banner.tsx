import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function JoinTeamBanner() {
  return (
    <FadeIn className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-brand-lightbg p-6 sm:flex-row sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-blue">
            <Users className="size-6 text-white" strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-base font-bold text-brand-navy sm:text-lg">
              ¿Te gustaría formar parte de nuestro equipo?
            </p>
            <p className="mt-0.5 text-sm text-slate-600">
              Buscamos personas comprometidas, responsables y con ganas de crecer.
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="w-full shrink-0 rounded-lg border-brand-blue bg-white text-brand-blue hover:bg-brand-blue/5 sm:w-auto"
          nativeButton={false}
          render={<Link href="/trabaja-con-nosotros" />}
        >
          Trabaja con nosotros
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </FadeIn>
  );
}

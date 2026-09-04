import { teamMembers } from "@/lib/constants/team";
import { TeamCard } from "@/components/sections/team-card";
import { FadeIn } from "@/components/motion/fade-in";

export function TeamSection() {
  return (
    <section className="bg-brand-lightbg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Nuestro equipo
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-brand-blue" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
            Presentamos a nuestro equipo de profesionales, quienes día a día trabajan
            haciéndonos crecer y ser mejores.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <FadeIn key={`${member.name}-${member.role}`} delay={index * 0.05}>
              <TeamCard member={member} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

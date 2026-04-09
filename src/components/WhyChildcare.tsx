import { PartyPopper, Users, Clock, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: PartyPopper,
    title: "Parents Actually Enjoy the Wedding",
    description:
      "When parents know their kids are safe and having fun, they can fully celebrate with you.",
  },
  {
    icon: Users,
    title: "More RSVPs, Fewer Regrets",
    description:
      "Offering childcare means families who might skip your wedding can say yes.",
  },
  {
    icon: Clock,
    title: "Fewer Interruptions, Smoother Timeline",
    description:
      "No mid-ceremony meltdowns or reception-time bedtime battles. Your day flows as planned.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Supervised, Stress-Free",
    description:
      "Kids are entertained with age-appropriate activities in a dedicated space at your venue.",
  },
];

export default function WhyChildcare() {
  return (
    <section className="py-16 sm:py-24 bg-sage-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blush-500 font-semibold text-sm tracking-wide uppercase mb-2 font-[family-name:var(--font-lato)]">
            Why Wedding Childcare
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            A Better Day for Everyone
          </h2>
          <p className="max-w-2xl mx-auto text-sage-600 font-[family-name:var(--font-lato)]">
            Wedding childcare isn&apos;t just a nice perk — it transforms the experience
            for couples, parents, and kids alike.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 p-6 bg-white rounded-2xl border border-sage-100"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-cream-100 text-cream-700">
                <reason.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sage-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-sage-600 text-sm font-[family-name:var(--font-lato)]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

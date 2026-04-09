import { ShieldCheck, Eye, CalendarHeart, MessageCircleHeart } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Screened Caregivers",
    description:
      "Every team member goes through a thorough screening process so you can trust who's watching your little guests.",
  },
  {
    icon: Eye,
    title: "Active Supervision",
    description:
      "We maintain appropriate caregiver-to-child ratios and keep eyes on every child at all times. Safety is never compromised.",
  },
  {
    icon: CalendarHeart,
    title: "Planned Around Your Event",
    description:
      "We coordinate with your timeline, venue, and guest count to create a childcare plan that fits your day perfectly.",
  },
  {
    icon: MessageCircleHeart,
    title: "Open Communication",
    description:
      "Parents can check in anytime. We keep the line open so everyone feels comfortable throughout the celebration.",
  },
];

export default function TrustSafety() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blush-500 font-semibold text-sm tracking-wide uppercase mb-2 font-[family-name:var(--font-lato)]">
            Trust & Safety
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Your Kids Are in Good Hands
          </h2>
          <p className="max-w-2xl mx-auto text-sage-600 font-[family-name:var(--font-lato)]">
            We take the safety and happiness of every child seriously. Here&apos;s how
            we make sure parents feel confident on the big day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-5 p-6 rounded-2xl bg-cream-50/50 border border-cream-100"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                <point.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sage-900 mb-1">
                  {point.title}
                </h3>
                <p className="text-sage-600 text-sm font-[family-name:var(--font-lato)]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-sage-500 font-[family-name:var(--font-lato)]">
            Have specific questions about our safety practices?{" "}
            <a href="#inquiry" className="text-blush-500 hover:text-blush-600 underline">
              Ask us anything
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import {
  ShieldCheck,
  Eye,
  CalendarHeart,
  MessageCircleHeart,
  Backpack,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Screened, CPR-Ready Caregivers",
    description:
      "Every team member is background-checked and trained in pediatric CPR and first aid before they work an event.",
  },
  {
    icon: Eye,
    title: "Low Caregiver Ratios",
    description:
      "We staff at least 1 caregiver for every 5 children, and tighten the ratio to 1:3 for kids under 3 so every child stays in sight.",
  },
  {
    icon: CalendarHeart,
    title: "Planned Around Your Event",
    description:
      "We walk the venue ahead of time, coordinate with your planner, and build a timeline that matches ceremony, dinner, and dance flow.",
  },
  {
    icon: MessageCircleHeart,
    title: "Open Communication",
    description:
      "Parents get a text-friendly point of contact for the day and a sign-in/sign-out sheet so it's always clear who's with whom.",
  },
];

const kit = [
  "Sanitized age-appropriate toys",
  "Crafts, coloring, and quiet-time supplies",
  "First aid kit & basic allergy-safe snacks",
  "Floor mats, soft seating, and changing supplies",
  "Tablet + family-friendly movies for wind-down",
  "Backup activities for indoor or outdoor venues",
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

        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-sage-50/60 border border-sage-100 p-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Backpack size={20} className="text-sage-600" />
            <h3 className="text-lg font-bold text-sage-900">
              What We Bring on the Day
            </h3>
          </div>
          <p className="text-center text-sm text-sage-600 mb-6 font-[family-name:var(--font-lato)]">
            Every booking arrives fully stocked. You don&apos;t need to provide
            anything beyond a space to set up.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-[family-name:var(--font-lato)]">
            {kit.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-sage-700"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blush-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
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

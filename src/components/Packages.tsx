import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Sweet & Simple",
    tagline: "Ceremony or reception coverage",
    features: [
      "Up to 3 hours of care",
      "1-2 caregivers",
      "Basic activity setup",
      "Coloring & quiet games",
      "Snack-friendly zone",
      "Up to 10 kids",
    ],
    highlight: false,
  },
  {
    name: "The Full Celebration",
    tagline: "Our most popular package",
    features: [
      "Up to 6 hours of care",
      "2-3 caregivers",
      "Full activity station setup",
      "Crafts, games & movie corner",
      "Dedicated kids area design",
      "Up to 20 kids",
    ],
    highlight: true,
  },
  {
    name: "The Grand Party",
    tagline: "The ultimate kids experience",
    features: [
      "Full-day coverage (8+ hours)",
      "3-4 caregivers",
      "Premium activity stations",
      "Bounce house included",
      "Custom themed setup",
      "20+ kids welcome",
    ],
    highlight: false,
  },
];

const addOns = [
  "Bounce House",
  "Craft Table",
  "Coloring Station",
  "Outdoor Games",
  "Quiet / Rest Area",
  "Movie Corner",
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blush-500 font-semibold text-sm tracking-wide uppercase mb-2 font-[family-name:var(--font-lato)]">
            Packages & Add-Ons
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Pick a Package, Make It Yours
          </h2>
          <p className="max-w-2xl mx-auto text-sage-600 font-[family-name:var(--font-lato)]">
            Every wedding is different. Choose a starting package and customize
            it with add-ons, or request a fully custom quote.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 bg-blush-50 text-blush-700 text-sm font-medium rounded-full font-[family-name:var(--font-lato)]">
            <Sparkles size={14} className="text-blush-500" />
            Founding-season 2026 pricing &mdash; lock in your date early
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 rounded-2xl border-2 transition-all ${
                pkg.highlight
                  ? "border-blush-300 bg-blush-50/30 shadow-lg shadow-blush-100/50"
                  : "border-sage-100 bg-cream-50/50 hover:border-sage-200"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 bg-blush-500 text-white text-xs font-semibold rounded-full">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-sage-900 mb-1">
                {pkg.name}
              </h3>
              <p className="text-sm text-sage-500 mb-6 font-[family-name:var(--font-lato)]">
                {pkg.tagline}
              </p>
              <ul className="space-y-3 mb-8 flex-1 font-[family-name:var(--font-lato)]">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-sage-700"
                  >
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        pkg.highlight ? "text-blush-500" : "text-sage-400"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className={`inline-flex items-center justify-center py-3 rounded-full font-semibold text-sm transition-colors font-[family-name:var(--font-lato)] ${
                  pkg.highlight
                    ? "bg-blush-500 text-white hover:bg-blush-600"
                    : "bg-sage-100 text-sage-700 hover:bg-sage-200"
                }`}
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-sage-900 mb-2">
            Optional Add-Ons
          </h3>
          <p className="text-sage-600 text-sm mb-6 font-[family-name:var(--font-lato)]">
            Mix and match to create the perfect setup for your wedding
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {addOns.map((addon) => (
              <span
                key={addon}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream-100 text-cream-800 text-sm font-medium rounded-full font-[family-name:var(--font-lato)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                {addon}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-sage-500 font-[family-name:var(--font-lato)]">
            Need something different?{" "}
            <a href="#inquiry" className="text-blush-500 hover:text-blush-600 underline">
              Request a custom package
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import { Baby, Palette, Castle } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "On-Site Babysitting",
    description:
      "Experienced caregivers supervise children at your venue so parents can relax and enjoy the ceremony and reception without worry.",
    features: [
      "Ceremony & reception coverage",
      "Age-appropriate supervision",
      "Flexible scheduling",
      "Indoor or outdoor setups",
    ],
  },
  {
    icon: Palette,
    title: "Kids Activities & Entertainment",
    description:
      "We bring engaging, hands-on activities that keep kids happy and entertained throughout the event — from crafts to games to movie corners.",
    features: [
      "Craft & coloring stations",
      "Games & group activities",
      "Quiet rest & movie area",
      "Custom themes available",
    ],
  },
  {
    icon: Castle,
    title: "Bounce House Add-Ons",
    description:
      "Make the wedding unforgettable for little guests with a bounce house. Perfect for outdoor receptions, backyard weddings, and venue lawns.",
    features: [
      "Setup & takedown included",
      "Safety-supervised bouncing",
      "Perfect for outdoor events",
      "Multiple size options",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blush-500 font-semibold text-sm tracking-wide uppercase mb-2 font-[family-name:var(--font-lato)]">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Everything Your Wedding Needs for Happy Kids
          </h2>
          <p className="max-w-2xl mx-auto text-sage-600 font-[family-name:var(--font-lato)]">
            From dedicated babysitting to full-blown kids entertainment zones,
            we customize every setup to match your wedding style and venue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-sage-100 bg-cream-50/50 hover:shadow-lg hover:shadow-sage-100/50 transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sage-100 text-sage-600 group-hover:bg-blush-100 group-hover:text-blush-600 transition-colors mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sage-600 mb-5 font-[family-name:var(--font-lato)]">
                {service.description}
              </p>
              <ul className="space-y-2 font-[family-name:var(--font-lato)]">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-sage-600"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blush-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Supported formats */}
        <div className="mt-14 text-center">
          <p className="text-sm text-sage-500 mb-4 font-[family-name:var(--font-lato)]">Works for any format:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Reception Childcare",
              "Ceremony Coverage",
              "Kids Play Area",
              "Backyard Weddings",
              "Venue Kids Zone",
            ].map((format) => (
              <span
                key={format}
                className="px-4 py-1.5 text-sm text-sage-600 bg-sage-50 rounded-full font-[family-name:var(--font-lato)]"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

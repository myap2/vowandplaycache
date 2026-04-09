import { MapPin } from "lucide-react";

const cities = [
  "Logan",
  "North Logan",
  "Hyde Park",
  "Smithfield",
  "Providence",
  "Hyrum",
  "Nibley",
  "River Heights",
  "Wellsville",
  "Mendon",
  "Richmond",
  "Lewiston",
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="py-16 sm:py-24 bg-white scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-sage-50 to-cream-50 rounded-3xl p-8 sm:p-12 border border-sage-100">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 text-sage-600 mb-4">
              <MapPin size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
              Proudly Serving Cache Valley
            </h2>
            <p className="text-sage-600 max-w-xl mx-auto font-[family-name:var(--font-lato)]">
              We provide wedding childcare services throughout Cache Valley and
              surrounding areas. If your venue is nearby, we can be there.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-sage-700 text-sm font-medium rounded-full shadow-sm font-[family-name:var(--font-lato)]"
              >
                <MapPin size={12} className="text-blush-400" />
                {city}
              </span>
            ))}
          </div>

          <p className="text-center text-sm text-sage-500 font-[family-name:var(--font-lato)]">
            Planning a wedding outside these areas?{" "}
            <a href="#inquiry" className="text-blush-500 hover:text-blush-600 underline">
              Reach out anyway
            </a>{" "}
            — we may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}

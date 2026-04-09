const steps = [
  {
    number: "01",
    title: "Tell Us About Your Day",
    description:
      "Fill out our quick inquiry form with your wedding date, venue, and number of kids. We'll get back to you within 24 hours.",
  },
  {
    number: "02",
    title: "We Plan the Perfect Setup",
    description:
      "We'll work with you to choose the right package, activities, and add-ons. We customize everything to your venue and event style.",
  },
  {
    number: "03",
    title: "We Show Up & Handle It All",
    description:
      "On your wedding day, our team arrives early to set up the kids area. Parents drop off, we take care of the rest — you celebrate.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 bg-sage-50/50 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blush-500 font-semibold text-sm tracking-wide uppercase mb-2 font-[family-name:var(--font-lato)]">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Simple as &ldquo;I Do&rdquo;
          </h2>
          <p className="max-w-2xl mx-auto text-sage-600 font-[family-name:var(--font-lato)]">
            Three easy steps from inquiry to wedding-day childcare bliss.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-sage-200" />
              )}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-sage-200 text-sage-800 text-2xl font-bold mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-sage-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sage-600 text-sm font-[family-name:var(--font-lato)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#inquiry"
            className="inline-flex items-center px-8 py-3.5 bg-blush-500 text-white text-lg font-semibold rounded-full hover:bg-blush-600 transition-colors"
          >
            Start Planning
          </a>
        </div>
      </div>
    </section>
  );
}

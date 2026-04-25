import { Heart, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blush-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sage-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sage-100 text-sage-700 text-sm font-medium rounded-full mb-6">
          <Heart size={14} className="text-blush-500" />
          Now Booking 2026 Weddings in Cache Valley
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sage-900 leading-tight mb-6">
          Let the Kids Play
          <br />
          <span className="text-blush-500">While You Celebrate</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-sage-600 mb-10 font-[family-name:var(--font-lato)]">
          On-site babysitting, kids activities, and bounce house fun for your
          wedding day. We keep little ones entertained so every guest can enjoy
          the celebration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blush-500 text-white text-lg font-semibold rounded-full shadow-lg shadow-blush-200 hover:bg-blush-600 hover:shadow-xl hover:shadow-blush-200 transition-all"
          >
            <Sparkles size={18} />
            Check Availability
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-8 py-3.5 bg-white text-sage-700 text-lg font-semibold rounded-full border-2 border-sage-200 hover:border-sage-300 hover:bg-sage-50 transition-all"
          >
            See Our Services
          </a>
        </div>

        <p className="mt-5 text-sm text-sage-500 font-[family-name:var(--font-lato)]">
          Founding season &mdash; only a few 2026 dates remain
        </p>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-sage-500 font-[family-name:var(--font-lato)]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage-400" />
            Locally owned in Cache Valley
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage-400" />
            Supervised & age-appropriate
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage-400" />
            Custom setup for every event
          </div>
        </div>
      </div>
    </section>
  );
}

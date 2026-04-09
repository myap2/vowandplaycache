"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  weddingDate: z.string().min(1, "Wedding date is required"),
  venue: z.string().min(1, "Venue or location is required"),
  numChildren: z.string().optional(),
  ageRanges: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  bounceHouse: z.string().optional(),
  notes: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const serviceTypes = [
  "On-Site Babysitting",
  "Kids Activities & Entertainment",
  "Full Package (Babysitting + Activities)",
  "Bounce House Only",
  "Custom Package",
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    setSubmitError("");
    try {
      const res = await fetch("https://formspree.io/f/xojpzerl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email us directly."
      );
    }
  };

  if (submitted) {
    return (
      <section id="inquiry" className="py-16 sm:py-24 bg-cream-50 scroll-mt-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 text-sage-600 mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-3xl font-bold text-sage-900 mb-4">
            We Got Your Inquiry!
          </h2>
          <p className="text-sage-600 font-[family-name:var(--font-lato)]">
            Thanks for reaching out! We&apos;ll review your details and get back
            to you within 24 hours. We can&apos;t wait to help make your wedding
            day special for every guest — big and small.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-cream-50 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-blush-500 font-semibold text-sm tracking-wide uppercase mb-2 font-[family-name:var(--font-lato)]">
            Get a Quote
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Request Wedding Childcare
          </h2>
          <p className="text-sage-600 font-[family-name:var(--font-lato)]">
            Tell us about your big day and we&apos;ll put together a custom
            quote. No commitment — just info to get started.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl border border-sage-100 shadow-lg shadow-sage-100/30 p-6 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Your Name <span className="text-blush-500">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="First & last name"
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-blush-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Email <span className="text-blush-500">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-blush-600">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
              />
            </div>

            {/* Wedding Date */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Wedding Date <span className="text-blush-500">*</span>
              </label>
              <input
                {...register("weddingDate")}
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
              />
              {errors.weddingDate && (
                <p className="mt-1 text-xs text-blush-600">{errors.weddingDate.message}</p>
              )}
            </div>

            {/* Venue */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Venue Name or Location <span className="text-blush-500">*</span>
              </label>
              <input
                {...register("venue")}
                type="text"
                placeholder="e.g., The Barn at Spring Creek, Logan"
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
              />
              {errors.venue && (
                <p className="mt-1 text-xs text-blush-600">{errors.venue.message}</p>
              )}
            </div>

            {/* Number of Children */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Estimated Number of Children
              </label>
              <input
                {...register("numChildren")}
                type="text"
                placeholder="e.g., 8-12"
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
              />
            </div>

            {/* Age Ranges */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Children&apos;s Age Ranges
              </label>
              <input
                {...register("ageRanges")}
                type="text"
                placeholder="e.g., 2-5 and 6-10"
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Service Type <span className="text-blush-500">*</span>
              </label>
              <select
                {...register("serviceType")}
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="mt-1 text-xs text-blush-600">{errors.serviceType.message}</p>
              )}
            </div>

            {/* Bounce House Interest */}
            <div>
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Interested in Bounce House?
              </label>
              <select
                {...register("bounceHouse")}
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition font-[family-name:var(--font-lato)]"
                defaultValue=""
              >
                <option value="">Not sure yet</option>
                <option value="yes">Yes, definitely!</option>
                <option value="maybe">Maybe — tell me more</option>
                <option value="no">No thanks</option>
              </select>
            </div>

            {/* Notes */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-sage-800 mb-1.5 font-[family-name:var(--font-lato)]">
                Anything Else We Should Know?
              </label>
              <textarea
                {...register("notes")}
                rows={4}
                placeholder="Special needs, allergies, timing preferences, questions..."
                className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50/50 text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition resize-none font-[family-name:var(--font-lato)]"
              />
            </div>
          </div>

          {submitError && (
            <div className="mt-4 p-3 bg-blush-50 text-blush-700 text-sm rounded-xl font-[family-name:var(--font-lato)]">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blush-500 text-white text-lg font-semibold rounded-full hover:bg-blush-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Inquiry
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-sage-400 font-[family-name:var(--font-lato)]">
            We&apos;ll respond within 24 hours. No spam, no sharing your info.
          </p>
        </form>
      </div>
    </section>
  );
}

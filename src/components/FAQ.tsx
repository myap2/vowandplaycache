"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking as soon as you have your wedding date and venue. Popular weekends in Cache Valley fill up fast, especially during summer and early fall. We suggest reaching out at least 2-3 months ahead.",
  },
  {
    question: "What ages do you accommodate?",
    answer:
      "We typically care for children ages 6 months to 12 years. Our activities are planned for different age groups so every child has something fun and appropriate. Let us know the ages in your group and we'll tailor the setup.",
  },
  {
    question: "Where does the childcare happen?",
    answer:
      "Right at your venue! We set up a dedicated kids area in a separate room, tent, or space at your location. We bring all the supplies and activities — you just point us to the spot.",
  },
  {
    question: "Are your caregivers background checked?",
    answer:
      "Yes. All of our caregivers go through a screening process. We are committed to providing a safe, trustworthy experience for every family.",
  },
  {
    question: "Can parents check on their kids during the event?",
    answer:
      "Absolutely. Parents are welcome to stop by anytime. We find that once kids are settled in and having fun, most parents are happy to enjoy the celebration knowing their children are in good hands.",
  },
  {
    question: "Do you provide snacks or meals for the kids?",
    answer:
      "We can work with your caterer or venue to coordinate kid-friendly snacks and meals. Alternatively, we can set up a snack station. Just let us know any allergies or dietary needs.",
  },
  {
    question: "What if my venue doesn't allow bounce houses?",
    answer:
      "No problem! Bounce houses are just one add-on option. We have plenty of indoor activities — craft tables, games, movie corners, and more — that work in any venue space.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the number of children, hours of service, and add-ons you choose. Fill out our inquiry form and we'll send you a detailed quote within 24 hours. We work with a range of budgets.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-sage-50/50 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blush-500 font-semibold text-sm tracking-wide uppercase mb-2 font-[family-name:var(--font-lato)]">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Common Questions
          </h2>
          <p className="text-sage-600 font-[family-name:var(--font-lato)]">
            Everything you need to know about wedding childcare with Vow & Play.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-sage-100 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-sage-50/50 transition-colors"
              >
                <span className="font-semibold text-sage-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-sage-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sage-600 text-sm leading-relaxed font-[family-name:var(--font-lato)]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

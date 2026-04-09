"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#service-area", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-sage-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sage-800">
            Vow <span className="text-blush-500">&</span> Play
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sage-700 hover:text-sage-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              className="inline-flex items-center px-5 py-2 bg-blush-500 text-white text-sm font-semibold rounded-full hover:bg-blush-600 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-sage-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-sage-100">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sage-700 hover:text-sage-900 hover:bg-sage-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#inquiry"
                onClick={() => setOpen(false)}
                className="mx-3 mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-blush-500 text-white font-semibold rounded-full hover:bg-blush-600 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

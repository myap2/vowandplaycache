import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
              Vow <span className="text-blush-400">&</span> Play
            </p>
            <p className="text-sage-300 text-sm font-[family-name:var(--font-lato)]">
              Wedding childcare services in Cache Valley, Utah. On-site
              babysitting, kids activities, and bounce house rentals for your
              special day.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <div className="space-y-2 font-[family-name:var(--font-lato)]">
              <a href="#services" className="block text-sm text-sage-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#packages" className="block text-sm text-sage-300 hover:text-white transition-colors">
                Packages
              </a>
              <a href="#how-it-works" className="block text-sm text-sage-300 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#faq" className="block text-sm text-sage-300 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#inquiry" className="block text-sm text-sage-300 hover:text-white transition-colors">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-sage-300 font-[family-name:var(--font-lato)]">
              <p>Cache Valley, Utah</p>
              <a href="mailto:hello@vowandplay.com" className="block hover:text-white transition-colors">
                hello@vowandplay.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage-400 font-[family-name:var(--font-lato)]">
            &copy; {new Date().getFullYear()} Vow & Play. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-sage-400 font-[family-name:var(--font-lato)]">
            Made with <Heart size={12} className="text-blush-400" /> in Cache Valley
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import {
  Truck,
  BadgeDollarSign,
  ShieldCheck,
  Gem,
  Gift,
  Headphones,
  Crown,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Quality",
    text: "Finely crafted jewelry made from the purest materials.",
  },
  {
    icon: BadgeDollarSign,
    title: "100% Certified",
    text: "Not in love? Return it within 30 days — no questions asked.",
  },
  {
    icon: Crown,
    title: "Handcrafted Gold Jewellery",
    text: "Experience timeless elegance with artisanal designs made from pure gold.",
  },
];

function Feature() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-white to-[#fff8e7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#b8860b] tracking-wide">
            Why Choose Benaka Jewels
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Experience the elegance, trust, and craftsmanship we’re known for.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex items-start gap-4 rounded-xl border border-[#f2e2a2] bg-white/70 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-white"
            >
              <div className="flex-shrink-0 rounded-full bg-[#fff3cd] p-3 transition-all duration-300 group-hover:bg-[#ffd700]/90">
                <Icon className="h-6 w-6 text-[#b8860b]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-[#b8860b]">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;

import React from "react";
import { Gem, Star, HeartHandshake, ShieldCheck, Award } from "lucide-react";

function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#fffdf8] to-[#fff3d9] text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-[#b8860b] mb-4">
          About Benaka Gold
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#b8860b]">Benaka Gold</span>, we
          believe that jewelry isn’t just an accessory — it’s a story of
          tradition, trust, and timeless beauty. Our mission is to deliver
          purity, perfection, and passion in every piece we craft.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#b8860b] mb-10">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-[#fff9ed] hover:shadow-lg transition">
              <ShieldCheck className="h-10 w-10 text-[#b8860b] mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                100% Certified Purity
              </h3>
              <p className="text-sm text-gray-600">
                Every piece is hallmarked and verified for authenticity and
                trust.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-[#fff9ed] hover:shadow-lg transition">
              <Award className="h-10 w-10 text-[#b8860b] mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Exquisite Craftsmanship
              </h3>
              <p className="text-sm text-gray-600">
                Our artisans bring generations of skill and artistry to every
                design.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-[#fff9ed] hover:shadow-lg transition">
              <Star className="h-10 w-10 text-[#b8860b] mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-sm text-gray-600">
                Trusted by thousands of happy customers who choose Benaka Gold
                for life’s moments.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-[#fff9ed] hover:shadow-lg transition">
              <HeartHandshake className="h-10 w-10 text-[#b8860b] mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Trusted Relationships
              </h3>
              <p className="text-sm text-gray-600">
                We build lifelong bonds based on trust, transparency, and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Gem className="h-12 w-12 mx-auto text-[#b8860b] mb-4" />
          <h2 className="text-3xl font-semibold text-[#b8860b] mb-4">
            Our Purpose
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our purpose goes beyond jewelry — we aim to celebrate life’s
            milestones with pieces that reflect elegance, tradition, and
            emotion.
            <br />
            We are committed to ethical sourcing, sustainable craftsmanship, and
            unmatched quality.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

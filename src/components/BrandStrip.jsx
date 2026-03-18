
import React from "react";
import "./BrandStrip.css"; // Create this CSS file

function BrandStrip() {
  const brands = [
    { name: "AURELIA", color: "#d4af37" },
    { name: "ZIVA", color: "#e1c16e" },
    { name: "DIVINE", color: "#f5d76e" },
    { name: "KORA", color: "#ffd700" },
    { name: "NORD", color: "#c5a143" },
    { name: "AMARA", color: "#e6be8a" },
    { name: "BEAU", color: "#bfa76f" },
    { name: "MAG", color: "#e4b169" },
  ];

  return (
    <section className="brand-strip py-12 bg-gradient-to-r from-[#fff8f0] via-[#fff3e0] to-[#fff8f0] overflow-hidden">
      {/* Background shimmer overlay */}
      <div className="background-overlay">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/gold-scale.png')",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-[#b8860b] tracking-wide mb-10">
          Trusted by Premium Jewelry Brands
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="brand-card group relative rounded-xl bg-white bg-opacity-60 backdrop-blur-md border border-[#f5deb3] shadow-md py-6 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4
                className="text-2xl md:text-3xl font-serif font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${brand.color}, #e9c46a, #b8860b)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {brand.name}
              </h4>

              <div className="brand-underline absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-yellow-500 to-yellow-700 transition-all duration-300 group-hover:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandStrip;
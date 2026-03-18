import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Banner1Desktop from "../assets/Images/2.png";
import Banner1Mobile from "../assets/Images/mobile1.png";
import Banner2Desktop from "../assets/Images/1.png";
import Banner2Mobile from "../assets/Images/mobile2.png";
import Banner3Desktop from "../assets/Images/3.webp";
import Banner3Mobile from "../assets/Images/3.png";

const banners = [
  {
    imgDesktop: Banner1Desktop,
    imgMobile: Banner1Mobile,
    title: "Timeless Beauty",
    subtitle: "Since 1988",
    desc: "Elegant craftsmanship. The best quality jewelry.",
    link: "/collections/timeless-beauty",
  },
  {
    imgDesktop: Banner2Desktop,
    imgMobile: Banner2Mobile,
    title: "Modern Collection",
    subtitle: "New Arrival",
    desc: "Discover the latest trends in jewelry fashion.",
    link: "/collections/modern",
  },
  {
    imgDesktop: Banner3Desktop,
    imgMobile: Banner3Mobile,
    title: "Luxury Defined",
    subtitle: "Exclusive Range",
    desc: "Shine brighter with our premium collection.",
    link: "/collections/luxury",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const length = banners.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);

    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="relative w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
      {/* Slides Container */}
      <div
        className="relative flex transition-transform duration-700 ease-in-out cursor-pointer"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onClick={() => (window.location.href = banners[current].link)}
      >
        {banners.map((banner, index) => (
          <div key={index} className="min-w-full relative">
            {/* Mobile Image */}
            <img
              src={banner.imgMobile}
              alt={banner.title}
              className="block sm:hidden w-full h-[300px] object-cover"
            />

            {/* Desktop Image */}
            <img
              src={banner.imgDesktop}
              alt={banner.title}
              className="hidden sm:block w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-pink-100 transition-all duration-200"
      >
        <ChevronLeft className="h-5 w-5 text-pink-600" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-pink-100 transition-all duration-200"
      >
        <ChevronRight className="h-5 w-5 text-pink-600" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={
              "h-3 w-3 rounded-full transition-all duration-300 " +
              (index === current
                ? "bg-yellow-700 scale-125"
                : "bg-gray-300 hover:bg-gray-400")
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

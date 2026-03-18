import React from "react";
import Logo from "../assets/Images/big_logo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#3d0801] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column - Fixed Alignment */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <img
              src={Logo}
              alt="Benaka Jewellers"
              className="h-20 w-20 md:h-24 md:w-24 mb-4 object-contain"
            />
            <p className="text-[#ffffff] leading-relaxed mb-6 max-w-md">
              Creating timeless jewelry pieces with exceptional craftsmanship
              and trust for over four decades.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 w-full">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#f8b500] mt-1 flex-shrink-0" />
                <span className="text-[#ffffff] text-sm">
                  Bazaar Road, Devanahalli
                  <br />
                  Bengaluru Rural Dist, Karnataka
                  <br />
                  562110
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#f8b500] flex-shrink-0" />
                <a
                  href="tel:+919731773777"
                  className="text-[#ffffff] hover:text-[#f8b500] text-sm"
                >
                  +91 97317 73777
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#f8b500] flex-shrink-0" />
                <a
                  href="mailto:benakajs@gmail.com"
                  className="text-[#ffffff] hover:text-[#f8b500] text-sm"
                >
                  benakajs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-[#f8b500] flex-shrink-0" />
                <a
                  href="https://benakajewellers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] hover:text-[#f8b500] text-sm"
                >
                  benakajewellers.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold text-[#f8b500] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", page: "Home" },
                { name: "About Us", page: "About" },
                // { name: "Collections", page: "Home" },
                // { name: "Bridal Jewelry", page: "Home" },
                // { name: "Custom Design", page: "Home" },
                { name: "Contact Us", page: "Contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-[#ffffff] hover:text-[#f8b500] text-sm text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col items-start text-left">
            {/* <h4 className="text-lg font-semibold text-[#f8b500] mb-4">
              Customer Care
            </h4> */}
            {/* <ul className="space-y-2">
              {[
                "Help Center",
                "Shipping Info",
                "Returns & Exchange",
                "Size Guide",
                "Jewelry Care",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#ffffff] hover:text-[#f8b500] text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul> */}

            {/* Social Media */}
            <div className="mt-6 w-full">
              <h5 className="text-[#f8b500] text-sm font-semibold mb-3">
                Follow Us
              </h5>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 rounded-lg bg-white/10 hover:bg-[#f8b500] transition-colors"
                  >
                    <Icon className="h-4 w-4 text-[#ffffff]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#3a140a] py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <div className="text-[#ffffff] text-sm">
              © {new Date().getFullYear()} Benaka Jewellers. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
  <button
    onClick={() => onNavigate("Privacy")}
    className="hover:text-[#f8b500]"
  >
    Privacy Policy
  </button>

  <button
    onClick={() => onNavigate("Terms")}
    className="hover:text-[#f8b500]"
  >
    Terms of Service
  </button>

  <button
    onClick={() => onNavigate("ReturnPolicy")}
    className="hover:text-[#f8b500]"
  >
    Return policy

  </button>

    <button
    onClick={() => onNavigate("Shipping")}
    className="hover:text-[#f8b500]"
  >
    Shipping

  </button>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
}



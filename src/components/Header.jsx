import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Logo from "../assets/Images/LOGO-header.webp";

export default function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const desktopNavItems = ["Home", "About", "Blog", "Contact","Category"];
  const mobileNavItems = ["Home", "About", "Blog", "Contact","Category"];

  const handleNavClick = (item) => {
    setOpen(false);
    if (onNavigate) onNavigate(item);
  };

  return (
    <header className="w-full border-b border-yellow-500/40 bg-gradient-to-r from-white via-[#fffdf8] to-[#fff3d9] backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Logo + Mobile Button */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gray-800 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <a href="#" className="flex items-center gap-4">
            <img
              src={Logo}
              alt="Benaka Logo"
              className="h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {desktopNavItems.map((item) => (
            <span
              key={item}
              onClick={() => handleNavClick(item)}
              className="relative cursor-pointer text-sm text-gray-700 tracking-wide transition-all duration-200 hover:text-yellow-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-700 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </span>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-yellow-500/30 bg-white py-4 px-4 flex flex-col gap-3 shadow-md">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-3 text-sm focus:ring-1 focus:ring-yellow-700 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-2 mt-3">
            {mobileNavItems.map((item) => (
              <span
                key={item}
                onClick={() => handleNavClick(item)}
                className="w-full rounded-md px-4 py-2 text-sm font-medium text-gray-800 hover:text-yellow-700 hover:bg-yellow-50 active:bg-yellow-100 cursor-pointer transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

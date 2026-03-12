"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { name: "Approach", href: "/approach" },
  { name: "Brands", href: "/brands" },
  { name: "Manifesto", href: "/manifesto" },
  { name: "Research", href: "/research" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gold accent color
  const gold = "#C5A059";

  return (
    <>
      <nav
        className={`top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#02142a] backdrop-blur-md border-b border-white/10 py-4"
            : "bg-[#02142a] py-4"
        }`}
      >
        <div className="max-w-332 mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo3.png"
              alt="Human Systems Group"
              className="h-12 w-auto object-contain"
            />
            <span className="font-bold text-xl uppercase text-white">
              Human Systems Group
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/70 hover:text-[#C5A059] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="px-5 py-2.5 border text-[#C5A059] border-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-300"
            >
              Get in touch
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - No longer white */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A1128] flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-light tracking-widest uppercase text-white/90 hover:text-[#C5A059] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase text-[#C5A059] underline decoration-2 underline-offset-8"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

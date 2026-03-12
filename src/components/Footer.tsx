"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#02142a] py-16 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          {/* Brand Identity Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo3.png"
                alt="Human Systems Group"
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-xl uppercase tracking-tight text-white">
                Human Systems Group
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold">
            <a
              href="/approach"
              className="text-white/70 hover:text-[#C5A059] transition-colors"
            >
              Approach
            </a>
            <a
              href="/brands"
              className="text-white/70 hover:text-[#C5A059] transition-colors"
            >
              Brands
            </a>
            <a
              href="/manifesto"
              className="text-white/70 hover:text-[#C5A059] transition-colors"
            >
              Manifesto
            </a>
            <a
              href="/research"
              className="text-white/70 hover:text-[#C5A059] transition-colors"
            >
              Research
            </a>
          </div>
        </div>

        {/* Bottom Utility Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Legal Notice
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          <span className="text-[10px] uppercase tracking-widest font-medium text-slate-500 select-none">
            © 2026 Human Systems Group — All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#02142a] py-16 border-t border-slate-100 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Human Systems Group"
            className="h-10 w-auto object-contain"
          />
          <span className="font-black text-xs uppercase tracking-[0.2em] text-white">
            Human Systems Group
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-400">
          <a href="#" className="hover:text-black text-white">
            Legal Notice
          </a>
          <a href="#" className="hover:text-black text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black text-white">
            LinkedIn
          </a>
          <span className="text-white">|</span>
          <span className="text-white select-none">
            © 2026 Human Systems Group
          </span>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <section
      id="top"
      className="relative h-screen flex items-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Architectural structure"
          className="w-full h-full object-cover opacity-20 grayscale"
          onError={handleImgError}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 ">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-[1.1] mb-8">
            Architects of <br />
            <span className="font-semibold">Human Systems.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12">
            Human Systems Group designs human infrastructures combining
            organizational engineering, digital systems, and ecosystem
            platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <div className="flex items-center gap-3 text-sm tracking-widest uppercase font-semibold text-slate-400">
              <span className="w-8 h-[1px] bg-slate-300"></span>
              Not a consulting firm
            </div>
            <div className="flex items-center gap-3 text-sm tracking-widest uppercase font-semibold text-slate-400">
              <span className="w-8 h-[1px] bg-slate-300"></span>
              Not a software vendor
            </div>
            <div className="flex items-center gap-3 text-sm tracking-widest uppercase font-semibold text-[#C5A059]">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              An architecture
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#approach"
              className="bg-[#0A1128] text-white px-8 py-4 flex items-center gap-4 hover:bg-black transition-colors group"
            >
              <span className="uppercase text-xs tracking-widest font-bold">
                Explore the approach
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#brands"
              className="border border-[#0A1128] text-[#0A1128] px-8 py-4 flex items-center gap-4 hover:bg-[#0A1128] hover:text-white transition-all group"
            >
              <span className="uppercase text-xs tracking-widest font-bold">
                View the brands
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

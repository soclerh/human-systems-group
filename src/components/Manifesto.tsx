"use client";

import React from "react";

export const Manifesto = () => {
  return (
    <section
      id="manifesto"
      className="pt-24 md:pt-30 bg-white px-6 border-t border-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Static Anchor */}
          <div className="lg:col-span-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C5A059] mb-8">
              Manifesto
            </h2>
            <div className="h-px w-12 bg-[#C5A059] mb-8" />
            <p className="text-[#0A1128] font-bold text-2xl tracking-tighter uppercase leading-tight">
              Human Systems Group
            </p>
            <p className="text-slate-400 text-xs uppercase tracking-widest mt-2 font-medium">
              Architects of Human Systems
            </p>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 space-y-16">
            <p className="text-3xl md:text-5xl font-light leading-[1.2] text-[#0A1128] tracking-tight">
              Organizations fail less from a lack of intelligence than from a{" "}
              <span className="font-semibold">lack of architecture.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-slate-100">
              <div>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  We stack tools, hires, and training, yet rarely invest in the
                  coherence of the human system. This creates friction that no
                  amount of software can solve.
                </p>
              </div>
              <div>
                <p className="text-lg text-[#0A1128] font-medium leading-relaxed">
                  Sustainable performance does not come from an accumulation of
                  solutions. It comes from a clear, steerable, and aligned
                  system.
                </p>
              </div>
            </div>

            {/* Bottom Graphic Detail */}
            <div className="pt-8">
              <div className="flex items-center gap-4">
                {/* <div className="h-[1px] w-12 bg-[#C5A059]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <div className="h-[1px] flex-1 bg-slate-300" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

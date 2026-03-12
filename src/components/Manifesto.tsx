"use client";

import React from "react";

export const Manifesto = () => {
  return (
    <section id="manifesto" className="py-24 md:py-40 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#C5A059] mb-12">
          Manifesto
        </h2>
        <div className="space-y-12">
          <p className="text-3xl md:text-4xl font-light leading-relaxed text-[#0A1128]">
            Organizations fail less from a lack of intelligence than from a{" "}
            <span className="font-semibold">lack of architecture.</span> We
            stack tools, hires, and training, yet rarely invest in the coherence
            of the human system.
          </p>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            We believe sustainable performance does not come from an
            accumulation of solutions. It comes from a clear, steerable, and
            aligned system.
          </p>
          <div className="pt-12 border-t border-slate-100">
            <p className="text-2xl font-bold tracking-tighter uppercase text-[#0A1128]">
              Human Systems Group — Architects of Human Systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

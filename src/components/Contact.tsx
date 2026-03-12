"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border border-slate-200 p-12 md:p-24 relative overflow-hidden bg-slate-50 text-[#0A1128]">
          <div className="absolute inset-0 opacity-10 grayscale">
            <img
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2070"
              alt="Texture"
              className="w-full h-full object-cover"
              onError={handleImgError}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">
                Get in <span>touch</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md font-medium">
                For strategic requests, partnerships, or institutional
                inquiries, our steering team is available for targeted dialogue.
              </p>
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest font-black text-[#C5A059]">
                  Direct Communication
                </div>
                <a
                  href="mailto:contact@humansystemsgroup.com"
                  className="text-2xl font-light hover:text-[#C5A059] transition-colors border-b border-white/20 pb-2 inline-block"
                >
                  contact@humansystemsgroup.com
                </a>
              </div>
            </div>

            {/* Changed Link to a mailto anchor tag */}
            <div className="flex lg:justify-end">
              <a
                href="mailto:contact@humansystemsgroup.com?subject=Meeting Request"
                className="bg-[#0A1128] text-white px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all flex items-center gap-4 no-underline"
              >
                Request a meeting
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { Approach as ApproachSection } from "@/components/Approach";

export default function ApproachPage() {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  const principles = [
    {
      title: "Radical Clarity",
      desc: "Ambiguity breeds inefficiency. We establish exact boundaries for roles, responsibilities, and decision rights so every node in the system knows exactly how to function.",
    },
    {
      title: "Dynamic Coherence",
      desc: "A system must adapt without breaking. We design flexible governance structures that allow organizations to pivot strategically while maintaining operational stability.",
    },
    {
      title: "Technology as Leverage",
      desc: "Software should act as the connective tissue of a human system, not dictate its logic. We align technological tools to amplify designed human processes.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header: Minimal & Expansive */}
      <section className="px-6 pt-40 pb-32 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            Methodology
          </span>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-[#0A1128] mb-12 leading-none">
            Infrastructure <span className=" font-serif">Method</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            We provide architecture, not consulting. We restructure the
            fundamental human systems that drive organizational scaling.
          </p>
        </div>
      </section>

      {/* Narrative Section: Perfect Balance */}
      <section className="px-6 py-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="aspect-[4/4] relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                  alt="Structure"
                  className="w-full h-full object-cover grayscale brightness-90"
                  onError={handleImgError}
                />
                {/* Subtle accent line */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-slate-200 -z-10"></div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A1128]">
                Designing for <br />
                <span className="text-[#C5A059]">Infinite Scale</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Scaling isn't about adding management; it's about removing
                  friction. When systemic issues are solved with tactical tools,
                  organizations accumulate debt that eventually slows them to a
                  halt.
                </p>
                <p>
                  Our approach redesigns the core mechanisms—governance models,
                  accountability mapping, and technological alignment—to ensure
                  the system remains coherent as it grows.
                </p>
              </div>
              <a
                href="/contact"
                className="group flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-[#0A1128] hover:text-[#C5A059] transition-colors"
              >
                Start the dialogue{" "}
                <MoveRight className="group-hover:translate-x-3 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ApproachSection />

      {/* Principles: Clean Typographic Grid */}
      <section className="px-6 py-40 bg-white relative overflow-hidden">
        {/* Architectural Background Detail */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h4 className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
              Foundations
            </h4>
            <h2 className="text-5xl font-black tracking-tighter text-[#0A1128] uppercase mb-6">
              Core Architectural{" "}
              <span className="text-slate-300">Principles</span>
            </h2>
            <p className="text-slate-500 font-medium">
              Three operational pillars that define the Human Systems Group
              approach to stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="group relative bg-white p-16 transition-all duration-500 hover:bg-slate-50"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-12">
                    <span className="text-sm font-black text-[#C5A059] tracking-tighter">
                      SYSTEM_P0{i + 1}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-[#0A1128] mb-6 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                    {principle.title}
                  </h4>

                  <p className="text-slate-500 leading-relaxed font-medium mb-8">
                    {principle.desc}
                  </p>

                  <div className="mt-auto h-1 w-0 bg-[#C5A059] group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client"

import React from 'react';
import { Layers, Target, Cpu, ArrowRight } from 'lucide-react';
import { Approach as ApproachSection } from '@/components/Approach';

export default function ApproachPage() {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
    };

    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Page Header */}
            <section className="px-6 py-24 border-b border-slate-200 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-[#0A1128] uppercase tracking-[0.3em] text-xs font-bold mb-6">Methodology</h4>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-[#0A1128]">
                        The Infrastructure <br /><span className="text-[#C5A059]">Method</span>
                    </h1>
                    <p className="max-w-3xl text-2xl text-slate-800 font-medium leading-relaxed">
                        We do not provide consulting. We provide architecture. By restructuring the fundamental human systems that drive your organization, we build coherent environments capable of scaling operations without sacrificing clarity.
                    </p>
                </div>
            </section>

            {/* Deep Dive Case Study or additional info */}
            <section className="px-6 py-32 bg-white text-[#0A1128]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h3 className="text-4xl font-bold mb-8">Structuring for <span className="text-[#C5A059]">Scale</span></h3>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                            When companies try to solve systemic issues with tactical tools, they introduce debt. True organizational scaling requires stepping back and designing the core mechanisms that define how humans interact, decide, and execute alongside technology.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed mb-12 font-medium">
                            Our infrastructure method does not rely on adding more layers of management. Instead, we remove friction by clearly defining governance models, mapping accountability, and aligning operational technology with human realities.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-4 px-8 py-4 bg-[#0A1128] text-white text-sm uppercase tracking-widest font-bold hover:bg-[#C5A059] transition-colors">
                            Discuss your architecture <ArrowRight size={16} />
                        </a>
                    </div>
                    <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-sm shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                            alt="Structure"
                            className="w-full h-full object-cover grayscale opacity-80"
                            onError={handleImgError}
                        />
                        <div className="absolute inset-0 border-2 border-white/10 m-6 pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* The existing approach section reused as a deep dive */}
            <ApproachSection />

            {/* Value Proposition Grid */}
            <section className="px-6 py-32 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-20 text-[#0A1128]">Core Architectural Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Radical Clarity", desc: "Ambiguity breeds inefficiency. We establish exact boundaries for roles, responsibilities, and decision rights so every node in the system knows exactly how to function." },
                            { title: "Dynamic Coherence", desc: "A system must adapt without breaking. We design flexible governance structures that allow organizations to pivot strategically while maintaining operational stability." },
                            { title: "Technology as Leverage", desc: "Software should act as the connective tissue of a human system, not dictate its logic. We align technological tools to amplify designed human processes." }
                        ].map((principle, i) => (
                            <div key={i} className="bg-white p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl text-[#C5A059] font-black mb-6">0{i + 1}.</div>
                                <h4 className="text-xl font-bold text-[#0A1128] mb-4 uppercase tracking-tight">{principle.title}</h4>
                                <p className="text-slate-700 leading-relaxed font-medium">{principle.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

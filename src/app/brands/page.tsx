"use client"

import React from 'react';
import { Brands as BrandsSection } from '@/components/Brands';
import { ArrowRight } from 'lucide-react';

export default function BrandsPage() {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
    };

    return (
        <main className="pt-24 min-h-screen bg-[#0A1128]">
            {/* Page Header */}
            <section className="px-6 py-32 border-b border-white/20 text-white relative overflow-hidden bg-[#0A1128]">
                <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="Technical pattern"
                        className="w-full h-full object-cover mix-blend-luminosity"
                        onError={handleImgError}
                    />

                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-sm font-bold mb-6">Ecosystem</h4>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-white">
                        Operating <span className="text-[#C5A059]">Brands</span>
                    </h1>
                    <p className="max-w-3xl text-2xl text-slate-300 font-medium leading-relaxed">
                        Human Systems Group operates as a singular infrastructure that powers multiple distinct brands. Each brand acts as a specialized layer solving specific human system challenges, from organizational architecture to employability platforms.
                    </p>
                </div>
            </section>

            {/* Extended Context Section */}
            <section className="px-6 py-24 bg-white text-[#0A1128]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">A Unified <span className="text-[#C5A059]">Architecture</span></h2>
                        <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                            Rather than operating as fragmented entities, our brands share a centralized core of governance, research, and operating principles. This allows each subsidiary to specialize deeply in its domain while drawing on the collective intelligence and structural stability of the entire Human Systems Group.
                        </p>
                        <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                            From deep structural consulting with Socle RH to scalable B2B integration networks via Kora, the ecosystem is designed to cover the entire spectrum of human system engineering.
                        </p>
                        <a href="#brands-list" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#0A1128] border-b-2 border-[#0A1128] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                            View the portfolio <ArrowRight size={16} />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { title: "5", subtitle: "Operating Entities" },
                            { title: "Global", subtitle: "Operational Reach" },
                            { title: "Unified", subtitle: "Governance Core" },
                            { title: "Synergistic", subtitle: "Value Creation" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-slate-50 p-8 border border-slate-200 text-center">
                                <div className="text-4xl font-black text-[#C5A059] mb-2">{stat.title}</div>
                                <div className="text-xs uppercase tracking-widest font-bold text-slate-600">{stat.subtitle}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reuse existing Brands section */}
            <div id="brands-list" className="bg-white">
                <BrandsSection />
            </div>
        </main>
    );
}

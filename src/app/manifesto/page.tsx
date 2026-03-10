"use client"

import React from 'react';
import { Manifesto as ManifestoSection } from '@/components/Manifesto';
import { ArrowRight } from 'lucide-react';

export default function ManifestoPage() {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
    };

    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Page Header */}
            <section className="px-6 py-32 border-b border-slate-200 bg-slate-50 text-[#0A1128] relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center grayscale mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h4 className="text-[#C5A059] uppercase tracking-[0.4em] text-sm font-bold mb-6">Core Beliefs</h4>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 uppercase">
                        Our <span className="text-[#C5A059]">Philosophy</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-2xl text-slate-700 font-medium leading-relaxed">
                        The fundamental principles that dictate how we engineer, structure, and scale human systems across the globe. We reject superficial fixes in favor of deep structural clarity.
                    </p>
                </div>
            </section>

            {/* Interactive Manifesto Elements */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
                        <div className="text-5xl md:text-6xl font-bold leading-tight text-[#0A1128]">
                            <span className="text-slate-300 block mb-4 border-b-4 border-[#C5A059] w-16 pb-4">01.</span>
                            A system is only as strong as its <span className="text-[#C5A059]">governance.</span>
                        </div>
                        <div className="text-xl text-slate-700 font-medium leading-relaxed bg-slate-50 p-10 border-l-4 border-[#0A1128]">
                            Without clear governance mechanisms, organizations dissolve into chaos. We prioritize establishing the specific rules of the game before introducing specialized talent or tooling. An organization without governance is just a crowd of people.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
                        <div className="order-2 md:order-1 text-xl text-slate-700 font-medium leading-relaxed bg-slate-50 p-10 border-r-4 border-[#0A1128] text-right">
                            Tools should not dictate workflows; they should encode predetermined architectures. We deploy digital solutions only to stabilize and accelerate properly designed human processes. When software drives the architecture, the human system becomes rigid and misaligned.
                        </div>
                        <div className="order-1 md:order-2 text-5xl md:text-6xl font-bold leading-tight text-[#0A1128] text-right md:text-left">
                            <span className="text-slate-300 block mb-4 border-b-4 border-[#C5A059] w-16 pb-4 ml-auto md:ml-0">02.</span>
                            Technology is merely an <span className="text-[#C5A059]">orchestration layer.</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div className="text-5xl md:text-6xl font-bold leading-tight text-[#0A1128]">
                            <span className="text-slate-300 block mb-4 border-b-4 border-[#C5A059] w-16 pb-4">03.</span>
                            Culture is the output of <span className="text-[#C5A059]">structure.</span>
                        </div>
                        <div className="text-xl text-slate-700 font-medium leading-relaxed bg-slate-50 p-10 border-l-4 border-[#0A1128]">
                            You cannot mandate culture. Culture is the natural byproduct of the incentives, governance, and operating mechanisms embedded in your structure. If you want to change the culture, you must change the architecture that produces it.
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Block */}
            <section className="bg-slate-100 py-24 text-[#0A1128] text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter">Ready to restructure?</h2>
                    <p className="text-xl font-medium mb-10 leading-relaxed max-w-2xl mx-auto text-slate-700">
                        If these principles align with your vision for sustainable organizational scaling, we should talk.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-4 bg-[#0A1128] text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-[#C5A059] transition-colors shadow-xl">
                        Initiate Dialogue <ArrowRight size={16} />
                    </a>
                </div>
            </section>

            {/* Reuse original manifesto component */}
            <div className="bg-slate-50 border-t border-slate-200 pt-10">
                <ManifestoSection />
            </div>
        </main>
    );
}

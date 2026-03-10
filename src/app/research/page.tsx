"use client"

import React from 'react';
import { ResearchGovernance as ResearchSection } from '@/components/ResearchGovernance';
import { ArrowRight } from 'lucide-react';

export default function ResearchPage() {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
    };

    return (
        <main className="pt-24 min-h-screen bg-slate-50">
            {/* Page Header */}
            <section className="px-6 py-32 border-b border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-[#0A1128] uppercase tracking-[0.3em] text-xs font-bold mb-6">Research & Structure</h4>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-[#0A1128]">
                        Governing the <span className="text-[#C5A059]">Unpredictable</span>
                    </h1>
                    <p className="max-w-3xl text-2xl text-slate-800 font-medium leading-relaxed">
                        The foundation of our architectural work lies in rigorous management science and applied research. We build structures that are legible, coherent, and capable of weathering complex ecosystem shifts.
                    </p>
                </div>
            </section>

            {/* Embedded Original Section */}
            <div className="mb-[-100px]">
                <ResearchSection />
            </div>

            {/* Scientific Method Extension */}
            <section className="px-6 py-40 border-t-2 border-[#0A1128] bg-white relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <h3 className="text-[#0A1128] text-4xl font-bold mb-8">Empirical Validation</h3>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                            Our methodologies are not based on fleeting management trends. They are the synthesis of applied research in organizational behavior, cybernetics, and complex systems theory. We test our frameworks against reality before implementing them in client environments.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed mb-10 font-medium">
                            This scientific approach guarantees that the structures we build are not just aesthetically pleasing on an org chart, but functionally robust in the face of inevitable market and internal shocks. We operate as an applied research laboratory disguised as an infrastructure firm.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 p-8 rounded-md mb-8">
                            <h4 className="font-bold text-[#0A1128] uppercase mb-4 tracking-tighter text-xl">Key Research Vectors</h4>
                            <ul className="space-y-4">
                                {["Organizational Cybernetics", "Asymmetric Information Flow", "Decentralized Governance Modeling", "Cognitive Load in Scaling Systems"].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-center">
                                        <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                                        <span className="font-semibold text-slate-800 tracking-wide">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a href="/approach" className="inline-flex items-center gap-4 text-[#0A1128] font-bold uppercase tracking-widest border-b-2 border-[#0A1128] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors pb-1">
                            Explore our methodology <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="hidden lg:block relative h-full min-h-[500px]">
                        <div className="absolute inset-0 bg-[#0A1128] transform -translate-x-6 translate-y-6"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                            alt="Structure"
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 contrast-125"
                            onError={handleImgError}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

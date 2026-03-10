"use client"

import React from 'react';
import { Layers, Target, Cpu } from 'lucide-react';

export const Approach = () => {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
    };

    return (
        <section id="approach" className="py-24 md:py-40 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Strategy & Methodology</h4>
                        <h2 className="text-4xl md:text-3xl font-light leading-tight mb-8 text-[#0A1128]">
                            Most organizations don’t lack tools. <br />
                            <span className="font-semibold">They lack structure.</span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed mb-12">
                            As growth accelerates, the human system exposes its weaknesses: unclear accountability, fragmented governance, centralized decisions, managerial overload, and a loss of visibility.
                        </p>

                        <div className="aspect-[4/3] overflow-hidden grayscale border border-slate-100 mb-8 lg:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                                alt="Symmetric architecture"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                onError={handleImgError}
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
                        <div className="space-y-12">
                            <div className="relative pl-12">
                                <div className="absolute left-0 top-0 text-3xl font-serif text-[#0A1128] select-none">01</div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter text-[#0A1128]">The Infrastructure Method</h3>
                                <p className="text-slate-500">We intervene the same way one works on infrastructure: Clarify the architecture, stabilize the governance, and make it steerable over the long term.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                                {[
                                    { title: "Sobriety", desc: "Fewer layers, stronger coherence." },
                                    { title: "Legibility", desc: "Understandable and transferable." },
                                    { title: "Steering", desc: "Visible is manageable." }
                                ].map((p, i) => (
                                    <div key={i}>
                                        <h5 className="font-bold text-[#0A1128] text-xs uppercase tracking-widest mb-2">{p.title}</h5>
                                        <p className="text-sm text-slate-400">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
                    {[
                        { icon: <Layers size={32} strokeWidth={1} />, title: "Organizational Architecture", items: ["Structure design", "Role definition", "Governance frameworks"] },
                        { icon: <Target size={32} strokeWidth={1} />, title: "Steering Systems", items: ["Management rituals", "Core metrics", "Accountability"] },
                        { icon: <Cpu size={32} strokeWidth={1} />, title: "Digital Orchestration", items: ["System layer", "Purposeful automation", "Tooling coherence"] }
                    ].map((box, i) => (
                        <div key={i} className="group p-8 border border-slate-100 hover:border-[#0A1128] transition-colors duration-500">
                            <div className="mb-8 text-[#0A1128] group-hover:text-[#C5A059] transition-colors">{box.icon}</div>
                            <h4 className="text-lg font-bold uppercase tracking-tighter mb-6 text-[#0A1128]">{box.title}</h4>
                            <ul className="space-y-4">
                                {box.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-[#0A1128] uppercase tracking-widest font-medium">
                                        <div className="w-1.5 h-1.5 bg-[#C5A059]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

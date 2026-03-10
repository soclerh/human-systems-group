"use client"

import React from 'react';

export const ResearchGovernance = () => {
    return (
        <section className="py-24 md:py-32 bg-slate-50 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div id="research">
                        <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Science</h4>
                        <h2 className="text-3xl font-light mb-8 text-[#0A1128]">Applied Research & <br /><span className="font-bold uppercase    text-[#0A1128]">Management Science</span></h2>
                        <p className="text-slate-600 font-light leading-relaxed mb-8">
                            HSG is rooted in applied research (DBA) focusing on organizational performance, governance, and human systems engineering, with a strategic bridge between Europe and Africa.
                        </p>
                        <ul className="space-y-6">
                            {["A modeled approach, not just empirical.", "Field-tested methods.", "Continuous improvement based on measurement."].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-1.5 w-4 h-[1px] bg-[#0A1128]/50"></div>
                                    <span className="text-sm uppercase tracking-widest font-semibold text-[#0A1128]/50">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="governance">
                        <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Structure</h4>
                        <h2 className="text-3xl font-light mb-8 text-[#0A1128]">Governance & <br /><span className="font-bold uppercase text-[#0A1128]">Asset Logic</span></h2>
                        <p className="text-slate-600 font-light leading-relaxed mb-8">
                            Human Systems Group is a single operating structure, organized by brands. This architecture ensures legibility, coherence, and steering capacity without unnecessary complexity.
                        </p>

                        <div className="bg-white p-8 border border-slate-200">
                            <h5 className="text-[10px] uppercase tracking-widest font-black mb-6 border-b border-slate-100 pb-2 text-[#0A1128]">Long-term Orientation</h5>
                            <p className="text-xs text-slate-500 uppercase leading-loose tracking-wider">
                                HSG develops a hybrid architecture: strategic consulting, product (H), platforms, and structured networks. The objective is to create a coherent, steerable, and valuable asset.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

"use client"

import React from 'react';
import { Contact as ContactSection } from '@/components/Contact';

export default function ContactPage() {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
    };

    return (
        <main className="pt-24 min-h-screen bg-slate-50">
            {/* Page Header */}
            <section className="px-6 py-32 bg-slate-50 text-center">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-[#C5A059] uppercase tracking-[0.4em] text-sm font-bold mb-6">Dialogue</h4>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-gray-400">
                        Engage the <span className="text-[#0A1128]">System</span>
                    </h1>
                    <p className="text-2xl text-slate-800 font-medium leading-relaxed mb-12">
                        Initiate a conversation about your organizational architecture or ecosystem strategy. Our partners are available for select institutional and strategic engagements.
                    </p>
                    <div className="w-24 h-1 bg-[#0A1128] mx-auto"></div>
                </div>
            </section>

            {/* Extended Corporate Info */}
            <section className="px-6 py-20 bg-white border-t border-b border-slate-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="p-8">
                        <div className="w-12 h-12 bg-[#0A1128] rounded-full mx-auto mb-6 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white"></div>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-tighter text-[#0A1128] mb-4">Strategic Engagements</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            Reserved for complex organizational restricting, M&A integration stabilization, and deep infrastructural realignments at the executive level.
                        </p>
                    </div>

                    <div className="p-8 border-y md:border-y-0 md:border-x border-slate-200">
                        <div className="w-12 h-12 bg-[#C5A059] rounded-full mx-auto mb-6 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full border-2 border-white"></div>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-tighter text-[#0A1128] mb-4">Brand Integration</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            Direct access to specialized operating brands (Socle RH, Kora, etc.) depending on the immediate requirements of your localized human system.
                        </p>
                    </div>

                    <div className="p-8">
                        <div className="w-12 h-12 border-2 border-[#0A1128] rounded-full mx-auto mb-6 flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#C5A059]"></div>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-tighter text-[#0A1128] mb-4">Research Partnerships</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            Collaborations focused on advancing management science, corporate governance research, and institutional performance metrics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reuse original contact section */}
            <div className="pb-24 pt-12">
                <ContactSection />
            </div>

        </main>
    );
}

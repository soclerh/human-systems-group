"use client";

import React, { useState } from "react";
import { MoveRight, Send, Globe, MessageSquare, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Updated with your Deployment URL
  const SCRIPT_URL =
    "https://script.google.com/a/macros/softexedge.in/s/AKfycbw-hQdomwCWamTrxKCE5qollwQeKRcKGyk_23Pr6CXY8s8ocQMhxuM0jsc1YnyDZv59/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using fetch with no-cors mode as required by Google Apps Script web apps
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Expansive Header */}
      <section className="px-6 pt-40 pb-32 bg-[#F8F9FA] border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            Communication
          </span>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-[#0A1128] mb-12 leading-none">
            Engage the <span className="font-serif">System</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            Initiate a conversation about organizational architecture or
            ecosystem strategy. Our partners are available for select
            institutional engagements.
          </p>
        </div>
      </section>

      {/* 2. Service Cards: Defining the Dialogue */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                title: "Strategic Engagements",
                desc: "Complex organizational restructuring, M&A integration stabilization, and deep infrastructural realignments at the executive level.",
              },
              {
                id: "02",
                title: "Brand Integration",
                desc: "Direct access to specialized operating brands (Socle RH, Kora, etc.) depending on your localized human system requirements.",
              },
              {
                id: "03",
                title: "Research Partnerships",
                desc: "Collaborations focused on advancing management science, corporate governance research, and institutional performance metrics.",
              },
            ].map((type, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-100 p-12 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-slate-100 group-hover:bg-[#C5A059] transition-colors duration-500"></div>
                <div className="text-3xl font-serif italic text-slate-200 group-hover:text-[#C5A059] transition-colors duration-500 mb-8">
                  {type.id}.
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#0A1128] uppercase mb-4">
                  {type.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Engagement Form: Two-Column Balanced Layout */}
      <section className="py-40 px-6 bg-[#0A1128] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 space-y-16">
              <div>
                <h2 className="text-5xl font-light tracking-tighter mb-8">
                  Request a <br />
                  <span className="text-[#C5A059] italic font-serif">
                    Meeting
                  </span>
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Provide your institutional details and the nature of your
                  inquiry. Our steering team will review and respond within 48
                  business hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    <Globe size={18} className="text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                      Global Presence
                    </div>
                    <div className="text-lg font-light tracking-tight">
                      Europe — Africa — Middle East
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    <MessageSquare size={18} className="text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                      Direct Channel
                    </div>
                    <div className="text-lg font-light tracking-tight">
                      dialogue@humansystemsgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-12 md:p-16 shadow-2xl">
              {submitted ? (
                <div className="text-center py-20 space-y-6">
                  <h3 className="text-3xl font-bold text-[#0A1128] uppercase tracking-tight">
                    Transmission Received
                  </h3>
                  <p className="text-slate-500 font-light">
                    Your inquiry has been logged in our system. A partner will
                    contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#C5A059] uppercase tracking-widest text-xs font-bold border-b border-[#C5A059] pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] placeholder:text-slate-300 focus:outline-none focus:border-[#C5A059] transition-colors font-medium"
                    />
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Institutional Email"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] placeholder:text-slate-300 focus:outline-none focus:border-[#C5A059] transition-colors font-medium"
                    />
                  </div>

                  <select
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] focus:outline-none focus:border-[#C5A059] transition-colors font-medium appearance-none"
                  >
                    <option value="">Nature of Inquiry</option>
                    <option value="Strategic Engagement">
                      Strategic Engagement
                    </option>
                    <option value="Brand Integration">Brand Integration</option>
                    <option value="Research Partnership">
                      Research Partnership
                    </option>
                  </select>

                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Brief overview of your human system challenge..."
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] placeholder:text-slate-300 focus:outline-none focus:border-[#C5A059] transition-colors font-medium resize-none"
                  ></textarea>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="group flex items-center gap-6 bg-[#0A1128] text-white px-10 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] disabled:bg-slate-200 disabled:cursor-not-allowed transition-all duration-300 shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        Processing{" "}
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Initiate Transmission{" "}
                        <Send
                          size={16}
                          className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Detail */}
    </main>
  );
}

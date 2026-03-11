"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const navLinks = [
    { name: 'Approach', href: '/approach' },
    { name: 'Brands', href: '/brands' },
    { name: 'Manifesto', href: '/manifesto' },
    { name: 'Research', href: '/research' },
    { name: 'Governance', href: '/research' },
];

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 cursor-pointer">
                        <img src="/logo.jpeg" alt="Human Systems Group" className="h-10 w-auto object-contain" />
                        <span className="font-bold tracking-tighter text-xl uppercase text-slate-600">Human Systems Group</span>
                    </a>

                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-[#0A1128] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            className="px-5 py-2.5 border text-[#0A1128] border-[#0A1128] text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#0A1128] hover:text-white transition-all duration-300"
                        >
                            Get in touch
                        </a>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-light tracking-widest uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold uppercase underline"
                    >
                        Contact
                    </a>
                </div>
            )}
        </>
    );
};

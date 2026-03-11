"use client"

import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-white py-16 border-t border-slate-100 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-3">
                    <img src="/logo.jpeg" alt="Human Systems Group" className="h-8 w-auto object-contain" />
                    <span className="font-black text-xs uppercase tracking-[0.2em] text-slate-600">Human Systems Group</span>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                    <a href="#" className="hover:text-black text-slate-600">Legal Notice</a>
                    <a href="#" className="hover:text-black text-slate-600">Privacy Policy</a>
                    <a href="#" className="hover:text-black text-slate-600">LinkedIn</a>
                    <span className="text-slate-200">|</span>
                    <span className="text-slate-600 select-none">© 2026 Human Systems Group</span>
                </div>
            </div>
        </footer>
    );
};

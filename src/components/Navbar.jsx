import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 rounded-full transition-all duration-300 w-[90%] max-w-5xl bg-[#111111]/90 backdrop-blur-xl border border-white/10 text-white shadow-xl shadow-black/50">
            <div className="font-heading font-semibold tracking-tight text-xl">
                Samir Does AI
            </div>
            <div className="hidden md:flex items-center gap-8 font-heading text-sm font-medium tracking-tight">
                <a href="#features" className="hover:text-accent transition-colors hover:-translate-y-[1px]">Why us?</a>
                <a href="#protocol" className="hover:text-accent transition-colors hover:-translate-y-[1px]">Our Process</a>
                <a href="#scale" className="hover:text-accent transition-colors hover:-translate-y-[1px]">Contact</a>
            </div>
            <a href="https://tidycal.com/msamir5230/30-minute-meeting" target="_blank" rel="noreferrer" className="magnetic-btn bg-accent text-white px-6 py-2 rounded-full font-heading font-bold text-sm tracking-tight transition-transform flex items-center justify-center">
                <span className="relative z-10">Book a free 1-2-1 call</span>
            </a>
        </nav>
    );
}

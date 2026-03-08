import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col px-4 md:px-8 py-3 md:py-4 rounded-3xl md:rounded-full transition-all duration-300 w-[96%] md:w-[90%] max-w-5xl bg-[#111111]/90 backdrop-blur-xl border border-white/10 text-white shadow-xl shadow-black/50 overflow-hidden">
            <div className="flex items-center justify-between w-full">
                <div className="font-heading font-semibold tracking-tight text-lg md:text-xl truncate">
                    Samir Does AI
                </div>
                <div className="hidden md:flex items-center gap-8 font-heading text-sm font-medium tracking-tight">
                    <a href="#features" className="hover:text-accent transition-colors hover:-translate-y-[1px]">Why us?</a>
                    <a href="#protocol" className="hover:text-accent transition-colors hover:-translate-y-[1px]">Our Process</a>
                    <a href="#scale" className="hover:text-accent transition-colors hover:-translate-y-[1px]">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://tidycal.com/msamir5230/30-minute-meeting" target="_blank" rel="noreferrer" className="hidden md:flex magnetic-btn bg-accent text-white px-5 md:px-6 py-2 rounded-full font-heading font-bold text-xs md:text-sm tracking-tight transition-transform items-center justify-center shrink-0">
                        <span className="relative z-10 hidden md:block">Book a free 1-2-1 call</span>
                    </a>
                    {/* Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                        <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`md:hidden flex flex-col items-center gap-6 font-heading text-sm font-medium tracking-tight overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 mt-6 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Why us?</a>
                <a href="#protocol" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Our Process</a>
                <a href="#scale" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Contact</a>
                <a href="https://tidycal.com/msamir5230/30-minute-meeting" target="_blank" rel="noreferrer" className="bg-accent text-white px-8 py-3 rounded-full font-heading font-bold text-sm tracking-tight w-full text-center mt-2" onClick={() => setIsOpen(false)}>
                    Book a free 1-2-1 call
                </a>
            </div>
        </nav>
    );
}

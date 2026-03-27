import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
export default function Footer() {
    return (
        <footer className="relative bg-black pt-24 pb-12 px-8 text-white flex flex-col items-center border-t border-white/5 z-20 overflow-hidden">
            {/* Dark Blue Center Glow per Screenshot theme */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#2563EB]/30 blur-[100px] rounded-[100%] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-3xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10">
                <div className="font-heading font-bold tracking-tight text-4xl md:text-5xl mb-6">Samir Does AI.</div>
                <p className="font-heading text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-8">
                    Scalable, Reliable, and AI-first solutions. I help you scale your marketing and sales operations by 10x using custom AI systems.
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-6 md:gap-8 mb-12">
                    <a href="https://www.instagram.com/samirdoes.ai/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-samir-iba/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                    </a>
                    <a href="mailto:contact@samirdoesai.com" className="text-white/60 hover:text-white transition-colors">
                        <Mail className="w-6 h-6 md:w-7 md:h-7" />
                    </a>
                </div>

                {/* Links */}
                <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
                    <a href="#home" className="font-heading font-medium text-sm md:text-base text-white/60 hover:text-white transition-colors">Home</a>
                    <a href="#protocol" className="font-heading font-medium text-sm md:text-base text-white/60 hover:text-white transition-colors">My Process</a>
                    <a href="#pricing" className="font-heading font-medium text-sm md:text-base text-white/60 hover:text-white transition-colors">Pricing</a>
                    <a href="#faq" className="font-heading font-medium text-sm md:text-base text-white/60 hover:text-white transition-colors">FAQs</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-heading text-xs text-white/40 relative z-10">
                <div>&copy; All right reserved</div>
            </div>
        </footer>
    );
}

import React from 'react';

export default function Footer() {
    return (
        <footer className="relative bg-black pt-24 pb-12 px-8 text-white flex flex-col items-center border-t border-white/5 z-20 overflow-hidden">
            {/* Dark Blue Center Glow per Screenshot theme */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#2563EB]/30 blur-[100px] rounded-[100%] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 relative z-10">
                <div className="md:col-span-5 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                    <div className="font-heading font-normal tracking-tight text-3xl">Samir Does AI.</div>
                    <p className="font-heading text-white/70 text-sm max-w-sm leading-relaxed mt-2">
                        Scalable, Reliable, and AI-first solutions. I help you scale your marketing and sales operations by 10x using custom AI systems.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 items-center md:items-start w-full">
                        <a href="https://cal.com/samirdoesai/30min" target="_blank" rel="noreferrer" className="bg-accent hover:bg-accent/90 transition-colors text-white font-heading font-bold text-[15px] px-8 py-3 rounded-full w-fit max-w-xs shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                            Book a free 1-2-1 call
                        </a>
                    </div>
                </div>

                <div className="md:col-span-7 grid grid-cols-2 gap-8 md:gap-24 w-full px-4 md:px-0">
                    <div className="flex flex-col gap-4 mt-2">
                        <h4 className="font-heading text-[15px] font-medium text-white mb-2 shadow-sm">Links</h4>
                        <a href="#top" className="font-heading text-sm text-white/60 hover:text-white transition-colors">Home</a>
                        <a href="#protocol" className="font-heading text-sm text-white/60 hover:text-white transition-colors">My Process</a>
                        <a href="https://cal.com/samirdoesai/30min" target="_blank" rel="noreferrer" className="font-heading text-sm text-white/60 hover:text-white transition-colors">Book a Call</a>
                    </div>

                    <div className="flex flex-col gap-4 mt-2">
                        <h4 className="font-heading text-[15px] font-medium text-white mb-2 shadow-sm">Socials</h4>
                        <a href="https://www.instagram.com/samirdoes.ai/" target="_blank" rel="noreferrer" className="font-heading text-sm text-white/60 hover:text-white transition-colors">Instagram</a>
                        <a href="https://www.linkedin.com/in/mohammed-samir-iba/" target="_blank" rel="noreferrer" className="font-heading text-sm text-white/60 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-heading text-xs text-white/40 relative z-10">
                <div>&copy; All right reserved</div>
            </div>
        </footer>
    );
}

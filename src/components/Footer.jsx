import React from 'react';

export default function Footer() {
    return (
        <footer className="relative bg-black pt-24 pb-12 px-8 text-white flex flex-col items-center border-t border-white/5 z-20 overflow-hidden">
            {/* Dark Blue Center Glow per Screenshot theme */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#2563EB]/30 blur-[100px] rounded-[100%] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 relative z-10">
                <div className="md:col-span-5 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                    <div className="font-heading font-normal tracking-tight text-3xl">Samir Does AI.</div>
                    <img
                        src="/samir-profile.jpg"
                        alt="Samir Does AI"
                        className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-white/10 shadow-lg mt-2"
                    />
                </div>

                <div className="hidden md:col-span-7 md:grid md:grid-cols-2 gap-8 md:gap-24 w-full px-4 md:px-0">
                    <div className="flex flex-col gap-4 mt-2">
                        <h4 className="font-heading text-[15px] font-medium text-white mb-2 shadow-sm">Links</h4>
                        <a href="#home" className="font-heading text-sm text-white/60 hover:text-white transition-colors">Home</a>
                        <a href="#protocol" className="font-heading text-sm text-white/60 hover:text-white transition-colors">My Process</a>
                        <a href="#pricing" className="font-heading text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
                        <a href="#faq" className="font-heading text-sm text-white/60 hover:text-white transition-colors">FAQs</a>
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

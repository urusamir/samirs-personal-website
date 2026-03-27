import React from 'react';

export default function GetStarted() {
    return (
        <section id="scale" className="relative w-full bg-[#000000] pt-20 pb-40">
            <div className="max-w-4xl mx-auto px-8 w-full flex flex-col items-center justify-center text-center gap-12">
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight">
                    Ready to achieve <br />
                    <span className="font-drama italic text-accent font-normal">exponential scale?</span>
                </h2>

                <p className="font-heading text-xl text-white/60 max-w-2xl leading-relaxed">
                    Book a free discovery call to discuss your business goals and understand how we can help you achieve them. Experience an AI-first transformation. (Free website on us if we move forward).
                </p>

                <a href="https://cal.com/samirdoesai/30min" target="_blank" rel="noreferrer" className="magnetic-btn relative overflow-hidden group bg-white text-black px-10 py-5 rounded-full font-heading font-bold text-xl tracking-tight transition-transform flex items-center justify-center gap-4 shadow-2xl shadow-white/20 w-full sm:w-auto hover:scale-105">
                    <span className="relative z-10 flex items-center gap-3">
                        Book a free 1-2-1 call
                        <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </a>
            </div>
        </section>
    );
}

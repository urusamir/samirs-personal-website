import React from 'react';

export default function CalendarEmbed() {
    return (
        <section className="relative w-full bg-[#000000] py-24 z-10 flex flex-col items-center justify-center border-t border-white/5" id="book">
            <div className="max-w-4xl mx-auto px-6 w-full text-center mb-12">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                    Book a Free 1-2-1 <span className="text-[#2563EB]">Call</span>
                </h2>
                <p className="font-heading text-lg text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
                    Book a free discovery call to discuss your business goals and understand how we can help you achieve them. Experience an AI-first transformation.
                </p>
            </div>
            
            <div className="w-full max-w-[1000px] px-4 md:px-8">
                <div 
                    className="w-full h-[1000px] sm:h-[850px] md:h-[750px] overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10 bg-[#111111] shadow-[0_0_50px_rgba(37,99,235,0.05)]"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    <iframe
                        src="https://cal.com/samirdoesai/30min?embed=true&theme=dark"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Book a call with Samir"
                        className="w-full h-full"
                        scrolling="yes"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

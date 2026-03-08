import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center p-8 md:p-16 overflow-hidden text-center"
        >
            <div className="absolute inset-0 z-0 bg-[#0B0F19] overflow-hidden perspective-[1200px]">
                {/* Geometrical animated grid & glowing blue orbs */}
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen -translate-x-1/2 -translate-y-1/2 animate-[pulse_8s_ease-in-out_infinite]"></div>

                {/* 3D Geometrical animated grid for the "fancy cool" tech feel */}
                <div
                    className="absolute top-[20%] left-[-50%] w-[200%] h-[200%] opacity-30"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                        transform: 'rotateX(75deg) rotateZ(20deg)',
                        animation: 'gridFlow 15s linear infinite'
                    }}
                ></div>

                {/* Animated floating geometric lines for extra 'cool' factor */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#2563EB" strokeWidth="0.2" className="animate-[waveMove_8s_ease-in-out_infinite_alternate]" />
                    <path d="M0,60 Q30,80 60,60 T100,60" fill="none" stroke="#60A5FA" strokeWidth="0.1" className="animate-[waveMove_12s_ease-in-out_infinite_alternate_reverse]" />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent pointer-events-none h-full"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-transparent to-transparent pointer-events-none h-[40%]"></div>

                <style>{`
                    @keyframes gridFlow {
                        0% { transform: rotateX(75deg) rotateZ(20deg) translateY(0); }
                        100% { transform: rotateX(75deg) rotateZ(20deg) translateY(80px); }
                    }
                    @keyframes waveMove {
                        0% { transform: scaleY(1) translateY(0); }
                        100% { transform: scaleY(1.5) translateY(-5px); }
                    }
                `}</style>
            </div>

            <div className="relative z-10 max-w-5xl flex flex-col items-center mt-12">
                <h1 className="flex flex-col gap-2 max-w-4xl mx-auto drop-shadow-2xl">
                    <span className="hero-elem font-heading font-medium text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight">
                        Become An <span className="text-blue-400 italic pr-2 font-normal">AI</span> First Business.
                    </span>
                </h1>

                <div className="hero-elem flex flex-col items-center mt-12 mb-8">
                    <h3 className="font-heading text-sm md:text-base tracking-[0.2em] font-bold text-white mb-6 uppercase">
                        Design and Deploy
                        <br />
                        <span className="text-blue-400">Scalable AI Automation Systems For</span>
                    </h3>

                    <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
                        <div className="px-3 md:px-8 py-1.5 md:py-3 text-xs md:text-base rounded-full border border-blue-400/30 bg-white/5 backdrop-blur-md text-white font-heading font-medium tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:bg-white/10 transition-colors">
                            Marketing
                        </div>
                        <div className="px-3 md:px-8 py-1.5 md:py-3 text-xs md:text-base rounded-full border border-blue-400/30 bg-white/5 backdrop-blur-md text-white font-heading font-medium tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:bg-white/10 transition-colors">
                            Sales
                        </div>
                        <div className="px-3 md:px-8 py-1.5 md:py-3 text-xs md:text-base rounded-full border border-blue-400/30 bg-white/5 backdrop-blur-md text-white font-heading font-medium tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:bg-white/10 transition-colors">
                            Operations
                        </div>
                    </div>
                </div>

                <a href="https://tidycal.com/msamir5230/30-minute-meeting" target="_blank" rel="noreferrer" className="hero-elem mt-8 magnetic-btn overflow-hidden relative group bg-white text-black px-12 py-5 text-base md:text-lg rounded-full font-heading font-bold shadow-[0_0_40px_rgba(37,99,235,0.4)] tracking-tight transition-transform flex items-center gap-3 w-fit mx-auto hover:bg-[#2563EB] hover:text-white hover:scale-[1.05]">
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                        Book a free 1-2-1 call
                    </span>
                </a>
            </div>
        </section>
    );
}

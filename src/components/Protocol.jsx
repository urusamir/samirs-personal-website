import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        title: "Discovery & Audit",
        desc: "We analyze your entire operations to identify biggest bottlenecks and revenue unlocks."
    },
    {
        num: "02",
        title: "System Architecture",
        desc: "Custom AI systems are built to replace manual, repetitive workflows."
    },
    {
        num: "03",
        title: "Deployment & Scale",
        desc: "Systems go live, scaling your capacity without expanding headcount."
    }
];

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            // Desktop animation (pinned sliding)
            mm.add("(min-width: 768px)", () => {
                const cards = gsap.utils.toArray('.protocol-card');

                cards.forEach((card, i) => {
                    if (i < cards.length - 1) {
                        ScrollTrigger.create({
                            trigger: card,
                            start: 'top top',
                            endTrigger: cards[i + 1],
                            end: 'top top',
                            pin: true,
                            pinSpacing: false,
                            animation: gsap.to(card, {
                                scale: 0.9,
                                opacity: 0.5,
                                filter: 'blur(10px)',
                                duration: 1,
                                ease: 'none'
                            }),
                            scrub: true,
                        });
                    } else {
                        ScrollTrigger.create({
                            trigger: card,
                            start: 'top top',
                            end: '+=50%',
                            pin: true,
                            pinSpacing: true,
                        });
                    }
                });
            });

            // Mobile animation (simple fade up)
            mm.add("(max-width: 767px)", () => {
                const cards = gsap.utils.toArray('.protocol-card');
                cards.forEach((card) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                        },
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power3.out'
                    });
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative w-full bg-[#000000] pt-20 pb-20 md:pb-40">
            <div className="max-w-7xl mx-auto px-8 w-full flex flex-col gap-8 md:gap-16">
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 text-center w-full">Our <br /><span className="text-accent italic font-drama font-normal">Process</span></h2>

                <div className="relative w-full">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`protocol-card relative w-full h-auto md:h-[80vh] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-24 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-8 md:mt-0`}
                            style={{
                                backgroundColor: i === 0 ? '#0A0A0A' : i === 1 ? '#111111' : '#1A1A1A',
                                zIndex: i,
                            }}
                        >
                            <div className="flex-1 flex flex-col gap-6">
                                <span className="font-data text-accent font-bold tracking-widest uppercase text-xl md:text-3xl">Phase {step.num}</span>
                                <h3 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight">{step.title}</h3>
                                <p className="font-heading text-xl text-white/70 max-w-lg mt-4 leading-relaxed">{step.desc}</p>
                            </div>

                            <div className="w-full md:w-1/2 md:max-w-md aspect-[4/5] md:aspect-square flex items-center justify-center bg-black/50 rounded-3xl border border-white/5 p-2 md:p-8 shadow-inner overflow-hidden relative group">
                                {/* Innovative abstract visual for Phase 01: Audit (Radar/Scan Concept) */}
                                {i === 0 && (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="absolute w-full h-full rounded-full border border-blue-500/10 shadow-[0_0_30px_rgba(37,99,235,0.05)]"></div>
                                        <div className="absolute w-3/4 h-3/4 rounded-full border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]"></div>
                                        <div className="absolute w-1/2 h-1/2 rounded-full border border-accent/40 shadow-[0_0_15px_rgba(37,99,235,0.2)]"></div>

                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center border border-accent/30 z-10 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                            <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_#2563EB] animate-pulse"></div>
                                        </div>

                                        {/* Sweeping scan effect */}
                                        <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-accent to-transparent origin-left animate-[spin_4s_linear_infinite]">
                                            <div className="absolute top-[-10px] right-0 w-5 h-5 bg-accent/20 rounded-full blur-[5px]"></div>
                                        </div>

                                        {/* Found "leverage points" */}
                                        <div className="absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-green-400 shadow-[0_0_5px_#4ade80] animate-[ping_3s_ease-in-out_infinite_0.5s]"></div>
                                        <div className="absolute bottom-[30%] right-[20%] w-3 h-3 rounded-full bg-blue-300 shadow-[0_0_8px_#93c5fd] animate-[ping_4s_ease-in-out_infinite_1s]"></div>
                                    </div>
                                )}
                                {i === 1 && (
                                    <div className="relative w-full h-full flex items-center justify-center p-0 md:p-6">
                                        {/* DESKTOP VERSION (Flexbox based) */}
                                        <div className="hidden md:flex w-full h-full flex-col justify-between items-center relative py-0">
                                            {/* Scattered Inputs */}
                                            <div className="flex justify-between w-full px-8 mt-4 z-10">
                                                <div className="w-12 h-12 rounded-xl bg-[#2A2A2A] border border-white/10 flex items-center justify-center shadow-lg transform -rotate-12">
                                                    <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                </div>
                                                <div className="w-12 h-12 rounded-xl bg-[#2A2A2A] border border-white/10 flex items-center justify-center shadow-lg transform rotate-6 animate-pulse">
                                                    <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                                </div>
                                                <div className="w-12 h-12 rounded-xl bg-[#2A2A2A] border border-white/10 flex items-center justify-center shadow-lg transform rotate-12">
                                                    <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                </div>
                                            </div>

                                            {/* AI Funnel Processor */}
                                            <div className="z-10 w-28 h-28 bg-[#152040] rounded-3xl border-2 border-accent flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] relative mt-4 shrink-0">
                                                <div className="absolute inset-0 bg-accent/20 animate-ping rounded-3xl opacity-50 flex"></div>
                                                <div className="text-center">
                                                    <div className="font-heading font-black text-white text-3xl">AI</div>
                                                    <div className="text-[8px] font-data text-accent uppercase tracking-widest mt-1">Engine</div>
                                                </div>
                                            </div>

                                            {/* Connection Lines rendered as SVG for Desktop */}
                                            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                {/* Top Lines into AI */}
                                                <path d="M 18 25 L 50 45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[slide-down_2s_linear_infinite]" />
                                                <path d="M 50 25 L 50 45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[slide-down_2s_linear_infinite_0.5s]" />
                                                <path d="M 82 25 L 50 45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[slide-down_2s_linear_infinite_1s]" />

                                                {/* Bottom Line out from AI */}
                                                <path d="M 50 65 L 50 82" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="0.5" strokeDasharray="3 3" className="animate-[slide-down_2s_linear_infinite]" />
                                            </svg>

                                            {/* Organized Green Output */}
                                            <div className="z-10 w-4/5 bg-green-500/10 border border-green-500/30 rounded-2xl p-4 flex items-center gap-4 mb-4 backdrop-blur-sm relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold font-heading text-sm">Action Executed</span>
                                                    <span className="text-white/50 text-xs text-left">Pipeline perfectly consolidated</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* MOBILE VERSION (Absolute Positioning mapping) */}
                                        <div className="md:hidden absolute inset-0 w-full h-full overflow-hidden">
                                            {/* Scattered Inputs - Absolutely mapped to top region */}
                                            <div className="absolute top-[10%] left-[10%] w-10 h-10 rounded-xl bg-[#2A2A2A] border border-white/10 flex items-center justify-center shadow-lg transform -rotate-12 z-10">
                                                <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div className="absolute top-[8%] left-[50%] -translate-x-1/2 w-10 h-10 rounded-xl bg-[#2A2A2A] border border-white/10 flex items-center justify-center shadow-lg transform rotate-6 animate-pulse z-10">
                                                <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                            </div>
                                            <div className="absolute top-[10%] right-[10%] w-10 h-10 rounded-xl bg-[#2A2A2A] border border-white/10 flex items-center justify-center shadow-lg transform rotate-12 z-10">
                                                <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>

                                            {/* AI Funnel Processor - Dead center but lifted slightly */}
                                            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#152040] rounded-2xl border-2 border-accent flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] z-10">
                                                <div className="absolute inset-0 bg-accent/20 animate-ping rounded-2xl opacity-50 flex"></div>
                                                <div className="text-center">
                                                    <div className="font-heading font-black text-white text-xl">AI</div>
                                                    <div className="text-[7px] font-data text-accent uppercase tracking-widest mt-0.5">Engine</div>
                                                </div>
                                            </div>

                                            {/* Connection SVG */}
                                            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                {/* Lines converging mathematically to AI Center (which is roughly x50 y45) */}
                                                <path d="M 18 18 L 50 35" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[slide-down_2s_linear_infinite]" />
                                                <path d="M 50 16 L 50 35" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[slide-down_2s_linear_infinite_0.5s]" />
                                                <path d="M 82 18 L 50 35" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[slide-down_2s_linear_infinite_1s]" />

                                                {/* Outward path */}
                                                <path d="M 50 55 L 50 75" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="0.5" strokeDasharray="3 3" className="animate-[slide-down_2s_linear_infinite]" />
                                            </svg>

                                            {/* Organized Green Output - Absolutely mapped lower down */}
                                            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-[280px] bg-green-500/10 border border-green-500/30 rounded-2xl p-3 flex items-center gap-3 backdrop-blur-sm z-10 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold font-heading text-[13px] leading-tight mb-0.5">Action Executed</span>
                                                    <span className="text-white/50 text-[10px] leading-tight text-left">Pipeline perfectly consolidated</span>
                                                </div>
                                            </div>
                                        </div>

                                        <style>{`
                                            @keyframes slide-down {
                                                0% { stroke-dashoffset: 10; }
                                                100% { stroke-dashoffset: 0; }
                                            }
                                            @keyframes shimmer {
                                                100% { transform: translateX(200%); }
                                            }
                                        `}</style>
                                    </div>
                                )}
                                {i === 2 && (
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                                        <div className="flex items-center justify-center gap-3 w-full">
                                            <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-white/10 shrink-0 shadow-lg">
                                                <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                                            </div>
                                            <div className="w-10 h-1 bg-white/10 rounded-full relative overflow-hidden">
                                                <div className="absolute top-0 bottom-0 left-0 w-4 bg-accent animate-[moveX_2s_linear_infinite]"></div>
                                            </div>
                                            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center border border-accent/40 shadow-[0_0_15px_rgba(37,99,235,0.3)] shrink-0 z-10">
                                                <span className="font-heading font-bold text-accent text-xl">AI</span>
                                            </div>
                                            <div className="w-10 h-1 bg-white/10 rounded-full relative overflow-hidden">
                                                <div className="absolute top-0 bottom-0 left-0 w-4 bg-green-500 animate-[moveX_2s_linear_infinite_0.5s]"></div>
                                            </div>
                                            <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-white/10 shrink-0 shadow-lg">
                                                <div className="w-6 h-6 bg-green-500 rounded-md"></div>
                                            </div>
                                        </div>
                                        <p className="font-data text-[10px] text-white/40 uppercase tracking-widest mt-6">24/7 Autonomous execution</p>
                                        <style>{`
                                            @keyframes moveX {
                                                0% { transform: translateX(-100%); }
                                                100% { transform: translateX(300%); }
                                            }
                                        `}</style>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

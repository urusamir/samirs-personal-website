import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FeatureAudit() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto py-16">
            <div className="flex-1 w-full bg-[#111111] border border-white/5 rounded-[2rem] p-8 shadow-2xl overflow-hidden relative min-h-[400px]">
                {/* Mock Dashboard UI */}
                <div className="absolute top-8 left-8 right-8 bottom-8 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-sm font-heading border-b border-white/10 pb-4">
                        <span className="text-white/60">Monthly Value</span>
                        <span className="text-green-500 font-bold font-data">$32,500</span>
                    </div>
                    <div className="flex flex-col gap-4 mt-6 text-sm font-heading">
                        <div className="flex justify-between">
                            <span className="text-white/50">Lead Generation</span>
                            <span className="text-white font-bold">15 hrs</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/50">Client Communication</span>
                            <span className="text-white font-bold">12 hrs</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/50">Lead Qualification</span>
                            <span className="text-white font-bold">8 hrs</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-6">
                            <span className="text-white/50">Social Media Posting</span>
                            <span className="text-white font-bold">6 hrs</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <div className="flex-1 bg-[#1A1A1A] border border-white/5 rounded-2xl p-6">
                            <div className="text-2xl font-bold font-heading text-white">$390k+</div>
                            <div className="text-xs text-white/50 mt-1">Projected Annual Value</div>
                        </div>
                        <div className="flex-1 bg-accent/10 border border-accent/20 rounded-2xl p-6">
                            <div className="text-2xl font-bold font-heading text-white">13x</div>
                            <div className="text-xs text-white/50 mt-1">ROI Year 1</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-6 px-4">
                <span className="px-3 py-1 font-data text-xs border border-white/10 bg-[#1A1A1A] rounded-full text-white/60 w-fit uppercase tracking-widest">
                    01. Audit
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                    Find the <br />
                    <span className="text-accent">Biggest Opportunities</span>
                </h2>
                <p className="text-white/60 font-heading text-lg leading-relaxed max-w-lg mt-2">
                    We identify your bottlenecks, uncover high-value opportunities, and quantify exactly how much time and money you're leaving on the table. You get a clear roadmap with project value and ROI projections so you can make informed decisions.
                </p>
            </div>
        </div>
    );
}

function FeatureScale() {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto py-16 mt-16">
            <div className="flex-1 flex flex-col gap-6 px-4">
                <span className="px-3 py-1 font-data text-xs border border-white/10 bg-[#1A1A1A] rounded-full text-white/60 w-fit uppercase tracking-widest">
                    02. Custom Projects
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                    Scale Without <br />
                    <span className="text-[#FF5A0E]">Hiring More People</span>
                </h2>
                <p className="text-white/60 font-heading text-lg leading-relaxed max-w-lg mt-2">
                    From advanced lead generation and social media automation to complex data systems. Imagine doubling your output without doubling your team. Custom AI systems that handle the work of 5-10 employees, running 24/7 with zero mistakes. That's not the future. That's what we build today.
                </p>
            </div>

            <div className="flex-1 w-full bg-[#111111] border border-white/5 rounded-[2rem] p-8 shadow-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center">
                {/* Social Media Post Lead Automation Mock */}
                <div className="w-[90%] bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 relative">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                        <div className="flex flex-col gap-2 flex-1">
                            <div className="w-1/3 h-3 bg-white/20 rounded"></div>
                            <div className="w-2/3 h-2 bg-white/10 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 pb-4">
                        <div className="w-full h-2 bg-white/10 rounded"></div>
                        <div className="w-4/5 h-2 bg-white/10 rounded"></div>
                    </div>

                    <div className="flex justify-between items-center text-xs font-heading font-medium">
                        <div className="text-white/40 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div> 1,240 Likes
                        </div>
                        <div className="text-white/40 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div> 48 Comments
                        </div>
                    </div>

                    {/* Floating notification */}
                    <div className="absolute -right-8 -bottom-8 bg-[#000] border border-green-500/30 rounded-xl px-5 py-3 flex items-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.15)] animate-bounce z-10 w-fit">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22C55E]"></div>
                        <span className="text-white font-heading text-sm font-medium">New Lead Captured</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-block', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={containerRef} className="py-24 px-8 w-full bg-[#000000]">
            <div className="feature-block">
                <FeatureAudit />
            </div>
            <div className="feature-block">
                <FeatureScale />
            </div>
        </section>
    );
}

import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section className="relative w-full bg-[#000000] py-24 z-10 overflow-hidden" id="pricing">
            <div className="absolute top-1/2 left-1/2 w-full max-w-5xl h-96 bg-[#2563EB]/10 blur-[120px] rounded-[100%] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                        Simple, transparent <span className="text-[#2563EB] font-drama italic font-normal">pricing</span>
                    </h2>
                    <p className="font-heading text-lg text-white/60 max-w-2xl">
                        Choose the plan that best fits your scale and implementation needs.
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory pt-6 pb-8 md:py-0 px-6 md:px-0 -mx-6 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    
                    {/* Hourly Plan */}
                    <div className="flex flex-col p-8 rounded-3xl bg-[#09090B] border border-white/10 relative transition-transform hover:-translate-y-2 duration-300 snap-center shrink-0 w-[85vw] md:w-auto">
                        <div className="mb-8">
                            <h3 className="font-heading text-2xl font-semibold text-white mb-4">Hourly</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="font-heading text-4xl lg:text-5xl font-bold text-white">$100</span>
                                <span className="font-heading text-white/50 text-sm">/HOUR</span>
                            </div>
                            <p className="font-heading text-sm text-white/60">Perfect for small adjustments and consulting.</p>
                        </div>
                        
                        <a href="https://cal.com/samirdoesai/30min" target="_blank" rel="noreferrer" className="w-full py-4 rounded-xl border border-white/20 text-white font-heading font-semibold text-sm text-center transition-colors hover:bg-white/10 mb-8">
                            GET STARTED
                        </a>
                        
                        <div className="flex flex-col gap-4">
                            <h4 className="font-heading text-sm font-semibold text-white mb-2">What's Included:</h4>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80">No long-term commitment</span>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Retainer Plan (Highlighted) */}
                    <div className="flex flex-col p-8 rounded-3xl bg-[#050B14] border border-[#2563EB]/50 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative transition-transform hover:-translate-y-2 duration-300 transform md:-translate-y-4 snap-center shrink-0 w-[85vw] md:w-auto">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase font-heading">
                            Recommended
                        </div>
                        
                        {/* Inner subtle glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#2563EB]/20 blur-[60px] pointer-events-none"></div>

                        <div className="mb-8 relative z-10">
                            <h3 className="font-heading text-2xl font-semibold text-white mb-4">Monthly Retainer</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="font-heading text-4xl lg:text-5xl font-bold text-white">$1,500</span>
                                <span className="font-heading text-white/50 text-sm">/MONTH</span>
                            </div>
                            <p className="font-heading text-sm text-white/60">Ongoing partnership and implementation.</p>
                        </div>
                        
                        <a href="https://cal.com/samirdoesai/30min" target="_blank" rel="noreferrer" className="relative z-10 w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-heading font-semibold text-sm text-center transition-colors mb-8 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            SECURE RETAINER
                        </a>
                        
                        <div className="flex flex-col gap-4 relative z-10">
                            <h4 className="font-heading text-sm font-semibold text-white mb-2">What's Included:</h4>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80 shrink">3-4 Automation Projects</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80 shrink">Weekly Sync</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80 shrink">Priority Support Channel (WhatsApp & Slack)</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80 shrink">Ongoing Maintenance for All Running Projects</span>
                            </div>
                        </div>
                    </div>

                    {/* Custom Plan */}
                    <div className="flex flex-col p-8 rounded-3xl bg-[#09090B] border border-white/10 relative transition-transform hover:-translate-y-2 duration-300 snap-center shrink-0 w-[85vw] md:w-auto">
                        <div className="mb-8">
                            <h3 className="font-heading text-2xl font-semibold text-white mb-4">Project-Based</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="font-heading text-4xl lg:text-5xl font-bold text-white">Custom</span>
                                <span className="font-heading text-white/50 text-sm">/QUOTE</span>
                            </div>
                            <p className="font-heading text-sm text-white/60">For massive or specifically scoped builds.</p>
                        </div>
                        
                        <a href="https://cal.com/samirdoesai/30min" target="_blank" rel="noreferrer" className="w-full py-4 rounded-xl border border-white/20 text-white font-heading font-semibold text-sm text-center transition-colors hover:bg-white/10 mb-8">
                            DISCUSS PROJECT
                        </a>
                        
                        <div className="flex flex-col gap-4">
                            <h4 className="font-heading text-sm font-semibold text-white mb-2">What's Included:</h4>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80">Defined Scope & Deliverables</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80">Fixed Implementation Cost</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                                <span className="font-heading text-sm text-white/80">Detailed Documentation</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

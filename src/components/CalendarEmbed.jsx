import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalendarEmbed() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                "styles": {
                    "branding": {
                        "brandColor": "#2563EB"
                    }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, []);

    return (
        <section className="relative w-full bg-[#000000] py-24 z-10 flex flex-col items-center justify-center border-t border-white/5" id="contact">
            <div className="max-w-4xl mx-auto px-6 w-full text-center mb-12">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                    Book a Free 1-2-1 <span className="text-[#2563EB]">Call</span>
                </h2>
                <p className="font-heading text-lg text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
                    Book a free discovery call to discuss your business goals and understand how I can help you achieve them. Experience an AI-first transformation.
                </p>
            </div>
            
            <div className="w-full max-w-[1000px] px-4 md:px-8">
                <div className="w-full rounded-2xl md:rounded-[2rem] border border-white/10 bg-[#111111] shadow-[0_0_50px_rgba(37,99,235,0.05)] overflow-hidden">
                    <Cal 
                        calLink="samirdoesai/30min"
                        style={{width:"100%",height:"100%",overflow:"hidden"}}
                        config={{layout: 'month_view', theme: 'dark'}}
                    />
                </div>
            </div>
        </section>
    );
}

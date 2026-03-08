import React from 'react';

const tools = [
    { name: 'Zapier', url: 'https://cdn.simpleicons.org/zapier/FF4A00' },
    { name: 'Replit', url: 'https://cdn.simpleicons.org/replit/F26207' },
    { name: 'n8n', url: 'https://cdn.simpleicons.org/n8n/EA384C' },
    { name: 'WhatsApp', url: 'https://cdn.simpleicons.org/whatsapp/25D366' },
    { name: 'Gmail', url: 'https://cdn.simpleicons.org/gmail/EA4335' },
    { name: 'Notion', url: 'https://cdn.simpleicons.org/notion/FFFFFF' },
    { name: 'ClickUp', url: 'https://cdn.simpleicons.org/clickup/7B68EE' },
    { name: 'GitHub', url: 'https://cdn.simpleicons.org/github/FFFFFF' },
    { name: 'Claude Code', url: 'https://cdn.simpleicons.org/anthropic/D97757' }
];

export default function ToolSlider() {
    return (
        <div className="w-full bg-[#000000] overflow-hidden py-16 border-y border-white/5">
            <p className="text-center font-data text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/50 mb-12">
                Built with your favorite tech
            </p>

            {/* Desktop Marquee (Hidden on mobile) */}
            <div className="relative hidden md:flex overflow-x-hidden group w-full max-w-[100vw] py-4">
                {/* Left fade */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                {/* Right fade */}
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <div className="animate-[marquee_40s_linear_infinite] flex items-center space-x-16 whitespace-nowrap min-w-full">
                    {tools.concat(tools).concat(tools).map((tool, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        >
                            <img src={tool.url} alt={tool.name} className="w-8 h-8 rounded-md object-contain" />
                            <span className="font-heading font-bold text-xl tracking-tight text-white">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Double-Row Marquee (Hidden on desktop) */}
            <div className="relative flex flex-col gap-6 md:hidden overflow-x-hidden w-full max-w-[100vw] py-2">
                {/* Fixed fades for mobile */}
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                {/* Top Row - Fast */}
                <div className="animate-[marqueeMobile_15s_linear_infinite] flex items-center space-x-8 whitespace-nowrap min-w-full">
                    {tools.slice(0, 5).concat(tools.slice(0, 5)).concat(tools.slice(0, 5)).map((tool, idx) => (
                        <div key={`top-${idx}`} className="flex-shrink-0 flex items-center gap-2 opacity-80">
                            <img src={tool.url} alt={tool.name} className="w-6 h-6 rounded-md object-contain" />
                            <span className="font-heading font-bold text-base tracking-tight text-white">{tool.name}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom Row - Fast Reverse */}
                <div className="animate-[marqueeMobileReverse_18s_linear_infinite] flex items-center space-x-8 whitespace-nowrap min-w-full">
                    {tools.slice(5).concat(tools.slice(5)).concat(tools.slice(5)).map((tool, idx) => (
                        <div key={`bottom-${idx}`} className="flex-shrink-0 flex items-center gap-2 opacity-80">
                            <img src={tool.url} alt={tool.name} className="w-6 h-6 rounded-md object-contain" />
                            <span className="font-heading font-bold text-base tracking-tight text-white">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeMobile {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marqueeMobileReverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
        </div>
    );
}

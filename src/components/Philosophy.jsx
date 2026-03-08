import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Basic word-by-word fade up since we don't have SplitText premium plugin
        // We will split the text manually into words and wrap them in spans

        if (!textRef.current) return;

        const words = textRef.current.querySelectorAll('.split-word');

        const ctx = gsap.context(() => {
            gsap.from(words, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: 'power3.out'
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const renderWords = (text) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="split-word inline-block mr-2 md:mr-3 lg:mr-4 translate-y-0 opacity-100">{word}</span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[60vh] bg-background flex items-center justify-center p-8 md:p-16 overflow-hidden"
        >
            <div className="absolute inset-0 z-0 bg-[#000000]"></div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12 w-full text-center">
                <div className="text-left font-heading text-white/50 text-xl md:text-3xl font-medium max-w-2xl">
                    Most agencies focus on: generic <br /> advice and manual labor.
                </div>

                <div
                    ref={textRef}
                    className="text-left font-drama italic text-white text-5xl md:text-8xl lg:text-[7rem] leading-[1.1] max-w-4xl tracking-tight"
                >
                    {renderWords("We focus on:")}
                    {renderWords("transformational")}
                    <br />
                    <span className="text-accent split-word inline-block translate-y-0 opacity-100">AI-first</span>
                    {renderWords(" scale.")}
                </div>
            </div>
        </section>
    );
}

import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqData = [
  {
    question: "I'm not sure where to start. What do you recommend?",
    answer: "I recommend starting with a discovery call where I can understand your business challenges and goals. This allows me to identify the most impactful opportunities for AI automation and provide tailored solutions for your specific challenges."
  },
  {
    question: "How do I know if AI is a good fit for my business?",
    answer: "Ask yourself: Do you have repetitive tasks eating 20+ hours per week? Are you missing revenue due to slow response times? Is hiring more people not solving the problem?\n\nIf you answered yes to any of these, AI is likely a fit. Book a discovery call and I'll show you exactly where automation creates ROI."
  },
  {
    question: "Do we own the AI you build?",
    answer: "Yes. The moment I hand over your system, the intellectual property is yours. Your competitive advantage stays with you, not locked in my platform."
  },
  {
    question: "How long does implementation take?",
    answer: "Most implementations take 2-4 weeks depending on complexity. I use a phased approach to ensure minimal disruption to your operations.\n\nFor time-sensitive projects, I've delivered working solutions in as little as 1-2 weeks."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl bg-[#0B0F19] overflow-hidden mb-4 transition-all duration-300 hover:border-white/20">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full px-6 py-6 flex justify-between items-center text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="font-heading text-lg md:text-xl font-medium text-white pr-8">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-white/60 font-heading text-base md:text-lg leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="relative w-full bg-[#000000] py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30 mb-6 w-fit">
            <MessageCircleQuestion className="w-4 h-4" />
            <span className="font-heading text-xs font-semibold tracking-wider uppercase">FAQ'S</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Got a quick question?
          </h2>
          <p className="font-heading text-base md:text-xl text-white/60 max-w-2xl leading-relaxed">
            I'm here to help you make the right decision. Explore frequently asked questions below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col w-full">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import useFadeIn from '../hooks/useFadeIn';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useFadeIn(0.1);

  const faqs = [
    {
      q: "How do I know if we're a good fit?",
      a: "I partner with leaders who look to challenge the status quo and value radical candor. My approach is built on honest, high-level strategic discussions and driving tangible results. If you are looking for a consultant to simply \"tick boxes\" or validate existing biases, I am likely not the right partner for you."
    },
    {
      q: "Who is your typical client?",
      a: "I work with CEOs, CTOs, and Boards of global enterprises, mid-market companies, and high-growth startups. My clients are typically at a critical junction\u2014whether facing a massive scale-up, an acquisition, or a need for deep cultural and structural change."
    },
    {
      q: "What kind of engagements do you lead?",
      a: "My work centers on strategic technology leadership. This includes leading IT & Digital Transformations, overseeing Technical Due Diligence, and restructuring R&D departments into high-performing organizations. I also provide Fractional CTO services and executive mentoring for technology leaders."
    },
    {
      q: "How do you approach a new organization?",
      a: "I begin with a diagnostic phase: deep-dive sessions to identify underlying architectural, human, and business bottlenecks. I don't believe in \"one-size-fits-all\" frameworks. We collaborate to define a bespoke roadmap, and then I stay to ensure the execution of real change, not just a slide deck."
    },
    {
      q: "Technology is your background, but is your expertise broader?",
      a: "Yes. While I bring deep technical DNA, my focus is Business Transformation. True success is never just a \"tech problem\"\u2014it's a synergy of leadership development, operational efficiency, and cultural alignment. I bridge the gap between complex engineering and business goals."
    },
    {
      q: "What is the typical duration of an engagement?",
      a: "It is strictly impact-driven. Some clients require a sprint-based project (e.g., preparing for an exit), while others retain me as a Fractional Leader or long-term advisor. My objective is to build internal capabilities and sustainable systems, ensuring I create lasting impact without creating dependency."
    },
    {
      q: "Do you operate solo or with a team?",
      a: "I operate as a senior advisor, but I leverage an extensive global network of specialists (DevOps, Cyber, Data Science) to scale support when a project demands it. I am equally effective working with your in-house talent or helping you recruit and build a new team from the ground up."
    },
    {
      q: "How do we initiate the process?",
      a: "We start with a discreet, high-level consultation. No sales pitch\u2014just a professional assessment of your current challenges and an honest evaluation of whether my expertise aligns with your strategic objectives."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-28 bg-bgPanel">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-8 section-fade ${visible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accentBlue mb-3">FAQ</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-accentBlue/20 shadow-[0_2px_8px_rgba(37,99,235,0.06)]' : 'border-border hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 flex justify-between items-center text-left cursor-pointer bg-transparent border-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg m-0 font-sans font-semibold pr-4">{faq.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-textMuted transition-transform duration-200 ${isOpen ? 'rotate-180 text-accentBlue' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-textSecondary leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

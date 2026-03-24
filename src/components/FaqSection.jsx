import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I know if we're a good fit?",
      a: "I partner with leaders who look to challenge the status quo and value radical candor. My approach is built on honest, high-level strategic discussions and driving tangible results. If you are looking for a consultant to simply \"tick boxes\" or validate existing biases, I am likely not the right partner for you."
    },
    {
      q: "Who is your typical client?",
      a: "I work with CEOs, CTOs, and Boards of global enterprises, mid-market companies, and high-growth startups. My clients are typically at a critical junction—whether facing a massive scale-up, an acquisition, or a need for deep cultural and structural change."
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
      a: "Yes. While I bring deep technical DNA, my focus is Business Transformation. True success is never just a \"tech problem\"—it’s a synergy of leadership development, operational efficiency, and cultural alignment. I bridge the gap between complex engineering and business goals."
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
      a: "We start with a discreet, high-level consultation. No sales pitch—just a professional assessment of your current challenges and an honest evaluation of whether my expertise aligns with your strategic objectives."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div 
                key={index}
                className="bg-bgPanel hover:shadow-md transition-shadow cursor-pointer rounded-xl border border-border overflow-hidden" 
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-lg m-0 font-sans font-bold">{faq.q}</h3>
                  {isOpen ? <ChevronUp size={20} color="#000" /> : <ChevronDown size={20} className="text-textMuted" />}
                </div>
                {isOpen && (
                  <div className="px-6 pb-6 text-textSecondary leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

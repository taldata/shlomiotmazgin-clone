import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Briefcase, Zap, TrendingUp, Users, Code2, Check } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Bot size={28} strokeWidth={1.5} />,
      title: 'AI Transformation',
      description: 'Adopt AI and embed it into your R&D DNA with a targeted 30% reduction in Time-to-Market.',
      bullets: [
        'Identify high-impact AI use cases for development.',
        'Embed AI-assisted coding and automated testing.',
        'Integrate AI tools without disrupting critical workflows.'
      ]
    },
    {
      icon: <Briefcase size={28} strokeWidth={1.5} />,
      title: 'Fractional VP R&D',
      description: 'Strategic oversight for CEOs to align engineering output with business ROI goals.',
      bullets: [
        'Open the "Black Box" through radical transparency.',
        'Optimize delivery and OpEx/CapEx budgets.',
        'Build technology foundations for commercial success.'
      ]
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} />,
      title: 'Engineering Velocity',
      description: 'For organizations where R&D throughput is a barrier to scale.',
      bullets: [
        'Identify and remove critical bottlenecks.',
        'Deploy AI-Native and Lean methods to boost throughput.',
        'Design team topologies that minimize dependencies.'
      ]
    },
    {
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      title: 'M&A Readiness & Due Diligence',
      description: 'Clarity before an exit or funding round based on real-world exit experience.',
      bullets: [
        'Technical Debt and infrastructure scalability risks.',
        'Engineering Maturity and workflow quality standards.',
        'Investment Readiness for funding and acquisitions.'
      ]
    },
    {
      icon: <Users size={28} strokeWidth={1.5} />,
      title: 'Executive Mentoring',
      description: 'For Technical leaders leveling up their strategic impact.',
      bullets: [
        'Transition VPs and CTOs from management to strategy.',
        'Support first-time founders in complex decision-making.',
        'Align engineering leadership with commercial goals.'
      ]
    },
    {
      icon: <Code2 size={28} strokeWidth={1.5} />,
      title: 'Software Development Services',
      description: 'End-to-end software development — from initial spec to full production deployment.',
      bullets: [
        'Full-stack web & mobile application development.',
        'System architecture design and technical planning.',
        'Ongoing maintenance, optimization and scaling.'
      ],
      hasLearnMore: true
    }
  ];

  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-16">Core Services</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-8 flex flex-col gap-6">
              <div className="p-4 bg-black/5 w-fit rounded-xl text-textPrimary">
                {service.icon}
              </div>
              <h3 className="text-2xl mt-2">{service.title}</h3>
              <p className="text-textSecondary leading-relaxed">{service.description}</p>

              <ul className="mt-auto flex flex-col gap-3 text-textMuted text-sm">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {service.hasLearnMore && (
                <Link
                  to="/development"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded font-semibold bg-textPrimary text-white hover:-translate-y-0.5 transition-transform mt-2 self-start"
                >
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

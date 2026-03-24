import React from 'react';
import { Bot, Briefcase, Zap, TrendingUp, Users } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Bot size={24} color="var(--accent-color)" />,
      title: 'AI Transformation',
      description: 'Adopt AI and embed it into your R&D DNA with a targeted 30% reduction in Time-to-Market.',
      bullets: [
        'Identify high-impact AI use cases for development.',
        'Embed AI-assisted coding and automated testing.',
        'Integrate AI tools without disrupting critical workflows.'
      ]
    },
    {
      icon: <Briefcase size={24} color="var(--accent-color)" />,
      title: 'Fractional VP R&D',
      description: 'Strategic oversight for CEOs to align engineering output with business ROI goals.',
      bullets: [
        'Open the \"Black Box\" through radical transparency.',
        'Optimize delivery and OpEx/CapEx budgets.',
        'Build technology foundations for commercial success.'
      ]
    },
    {
      icon: <Zap size={24} color="var(--accent-color)" />,
      title: 'Engineering Velocity',
      description: 'For organizations where R&D throughput is a barrier to scale.',
      bullets: [
        'Identify and remove critical bottlenecks.',
        'Deploy AI-Native and Lean methods to boost throughput.',
        'Design team topologies that minimize dependencies.'
      ]
    },
    {
      icon: <TrendingUp size={24} color="var(--accent-color)" />,
      title: 'M&A Readiness & Due Diligence',
      description: 'Clarity before an exit or funding round based on real-world exit experience.',
      bullets: [
        'Technical Debt and infrastructure scalability risks.',
        'Engineering Maturity and workflow quality standards.',
        'Investment Readiness for funding and acquisitions.'
      ]
    },
    {
      icon: <Users size={24} color="var(--accent-color)" />,
      title: 'Executive Mentoring',
      description: 'For Technical leaders leveling up their strategic impact.',
      bullets: [
        'Transition VPs and CTOs from management to strategy.',
        'Support first-time founders in complex decision-making.',
        'Align engineering leadership with commercial goals.'
      ]
    }
  ];

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', marginBottom: '1rem' }}>Core <span className="text-gradient">Services</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          Aligning engineering execution directly with commercial outcomes.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', width: 'fit-content', borderRadius: '12px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              
              <ul style={{ marginTop: 'auto', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

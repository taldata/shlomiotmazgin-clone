import React from 'react';

export default function AboutSection() {
  const experiences = [
    {
      company: 'Yad2 (CTO)',
      title: 'Biggest Israeli classifieds',
      description: "Spearheaded the transformation of the R&D department, scaling it from the ground up into a high-performing organization of over 100+ engineers. Played a pivotal role in its historic acquisition by Apax Partners in 2026 for €950 million. Led the entire Technical Due Diligence, ensuring a seamless transition and maximum valuation."
    },
    {
      company: 'Umoove (VP R&D)',
      title: 'Innovating eye tracking startup',
      description: "Led high-innovation teams in the computer vision and motion-tracking space. Managed specialized R&D groups pushing technical boundaries in a fast-paced hardware-software integration environment."
    },
    {
      company: 'Amdocs, Matrix, Colmobil (R&D Director)',
      title: 'Enterprise Experience',
      description: "Managed large-scale development groups in leading global organizations, balancing corporate stability with agile engineering innovation."
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-panel)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ '@media (max-width: 768px)': { gridColumn: '1 / -1' } }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              What makes me <span className="text-gradient">different?</span>
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              From scaling high-growth startups to advising global enterprises and mid-market companies, my experience spans the entire business spectrum.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I specialize in guiding organizations through critical junctions, such as comprehensive Due Diligence preparation for acquisitions, while maintaining a cross-functional focus on process optimization and unlocking the full potential of engineering development teams.
            </p>
            <a href="#contact" className="btn btn-secondary">Connect with me</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-7px', top: '0', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.company}</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--accent-color)', fontWeight: 600, display: 'block', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{exp.title}</span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

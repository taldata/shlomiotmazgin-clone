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
    <section id="about" className="py-16 sm:py-28 bg-bgPanel">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">

          <div className="col-span-1">
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-6">
              What makes me <span className="text-gradient">different?</span>
            </h2>
            <p className="text-lg text-textSecondary mb-8 leading-relaxed">
              From scaling high-growth startups to advising global enterprises and mid-market companies, my experience spans the entire business spectrum.
            </p>
            <p className="text-textSecondary mb-8 leading-relaxed">
              I specialize in guiding organizations through critical junctions, such as comprehensive Due Diligence preparation for acquisitions, while maintaining a cross-functional focus on process optimization and unlocking the full potential of engineering development teams.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded font-semibold bg-transparent border border-textPrimary text-textPrimary hover:bg-black/5 transition-colors"
            >
              Connect with me
            </a>
          </div>

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-border pl-8 relative">
                <div
                  className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-accent"
                  style={{ boxShadow: '0 0 10px #1a1a1a' }}
                />
                <h3 className="text-xl mb-1">{exp.company}</h3>
                <span className="text-sm text-accent font-semibold block mb-4 uppercase tracking-widest">{exp.title}</span>
                <p className="text-textSecondary leading-relaxed text-[0.95rem]">{exp.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

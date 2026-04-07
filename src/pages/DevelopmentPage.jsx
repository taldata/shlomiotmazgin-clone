import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Layers, Rocket, Settings, Monitor, Smartphone, Database, Cloud, Check } from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';

export default function DevelopmentPage() {
  const [processRef, processVisible] = useFadeIn(0.1);
  const [servicesRef, servicesVisible] = useFadeIn(0.1);
  const [projectsRef, projectsVisible] = useFadeIn(0.1);
  const [ctaRef, ctaVisible] = useFadeIn(0.1);

  const services = [
    {
      icon: <Layers size={28} strokeWidth={1.5} />,
      title: 'System Architecture & Technical Planning',
      description: 'Designing robust, scalable architectures that align technology choices with business goals — from initial concept through to production-ready blueprints.',
      items: [
        'Technology stack selection and evaluation',
        'Microservices & monolith architecture design',
        'Database modeling and data flow planning',
        'Cloud infrastructure design (AWS, GCP, Azure)',
        'API design and integration strategy',
        'Scalability and performance planning'
      ]
    },
    {
      icon: <Monitor size={28} strokeWidth={1.5} />,
      title: 'Full-Stack Web Development',
      description: 'Modern, performant web applications built with cutting-edge frameworks — responsive, accessible, and optimized for real-world usage.',
      items: [
        'React, Next.js, Vue.js frontends',
        'Node.js, Python, Go backends',
        'RESTful & GraphQL API development',
        'Real-time features (WebSockets, SSE)',
        'Admin dashboards and internal tools',
        'Progressive Web Apps (PWA)'
      ]
    },
    {
      icon: <Smartphone size={28} strokeWidth={1.5} />,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps that deliver smooth user experiences on both iOS and Android.',
      items: [
        'React Native cross-platform development',
        'Native iOS (Swift) and Android (Kotlin)',
        'Push notifications & deep linking',
        'Offline-first and sync capabilities',
        'App Store optimization and deployment',
        'Mobile-specific UX/UI implementation'
      ]
    },
    {
      icon: <Database size={28} strokeWidth={1.5} />,
      title: 'Data & AI Integration',
      description: 'Leverage data pipelines, machine learning models, and AI-driven features to transform raw data into actionable business intelligence.',
      items: [
        'Data pipeline architecture and ETL',
        'Machine learning model integration',
        'AI-powered features and automation',
        'Analytics dashboards and reporting',
        'Data migration and transformation',
        'Real-time data processing'
      ]
    },
    {
      icon: <Cloud size={28} strokeWidth={1.5} />,
      title: 'DevOps & Cloud Infrastructure',
      description: 'Reliable, automated infrastructure that enables rapid deployment and seamless scaling.',
      items: [
        'CI/CD pipeline setup and optimization',
        'Containerization (Docker, Kubernetes)',
        'Cloud deployment and management',
        'Monitoring, logging and alerting',
        'Security hardening and compliance',
        'Cost optimization and resource management'
      ]
    },
    {
      icon: <Settings size={28} strokeWidth={1.5} />,
      title: 'Ongoing Maintenance & Optimization',
      description: 'Continuous improvement, bug fixing, and performance optimization to keep your systems running at peak efficiency.',
      items: [
        'Performance monitoring and optimization',
        'Security patching and updates',
        'Feature enhancements and iterations',
        'Technical debt reduction',
        'Load testing and scaling',
        'Documentation and knowledge transfer'
      ]
    }
  ];

  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      tag: 'Full-Stack',
      description: 'End-to-end development of a multi-tenant SaaS platform serving 50K+ users. Built with React, Node.js, and PostgreSQL with real-time collaboration features.',
      highlights: ['Microservices architecture', 'Real-time collaboration', '99.9% uptime SLA', '50K+ active users']
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      tag: 'Data & AI',
      description: 'Custom analytics platform with ML-driven insights, automated reporting, and predictive forecasting for a leading retail chain.',
      highlights: ['Machine learning integration', 'Real-time data processing', 'Custom visualization engine', 'Automated alerting system']
    },
    {
      title: 'Mobile Marketplace App',
      tag: 'Mobile',
      description: 'Cross-platform marketplace application with payment processing, real-time messaging, and geolocation features. Launched on both App Store and Google Play.',
      highlights: ['React Native cross-platform', 'Payment gateway integration', 'Real-time messaging', '100K+ downloads']
    },
    {
      title: 'Cloud Migration & Modernization',
      tag: 'DevOps',
      description: 'Complete migration of legacy monolithic system to cloud-native microservices architecture, reducing infrastructure costs by 40%.',
      highlights: ['Kubernetes orchestration', 'Zero-downtime migration', '40% cost reduction', 'Auto-scaling infrastructure']
    }
  ];

  return (
    <div className="min-h-screen bg-bgMain">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-8 h-[5.5rem] flex items-center">
          <Link to="/" className="inline-flex items-center gap-3 text-textSecondary hover:text-textPrimary transition-colors font-medium">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-[5.5rem]">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-accentBlueLight rounded-xl text-accentBlue">
                <Code2 size={32} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accentBlue">Software Development Services</span>
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-extrabold leading-tight mb-8">
              From Specification<br />to Full Production
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-2xl">
              Comprehensive software development services that take your vision from initial concept and requirements gathering through architecture, development, testing, and deployment — all the way to a fully operational production system.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="border-t border-border py-20">
        <div ref={processRef} className={`max-w-7xl mx-auto px-8 section-fade ${processVisible ? 'visible' : ''}`}>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] text-center mb-4 fade-up-child" style={{ '--anim-delay': '0ms' }}>Our Process</h2>
          <p className="text-center text-textSecondary mb-16 max-w-2xl mx-auto fade-up-child" style={{ '--anim-delay': '80ms' }}>
            A proven methodology that ensures quality, transparency, and alignment at every stage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Specification', desc: 'Deep-dive into your business goals, user needs, and technical requirements. We produce a detailed spec document.' },
              { step: '02', title: 'Architecture & Design', desc: 'Technology selection, system design, UI/UX wireframes, and a clear roadmap with milestones.' },
              { step: '03', title: 'Development & Testing', desc: 'Agile sprints with continuous integration, automated testing, and regular demos for feedback.' },
              { step: '04', title: 'Deployment & Growth', desc: 'Production deployment, monitoring, optimization, and ongoing support as your product scales.' }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 text-center fade-up-child" style={{ '--anim-delay': `${160 + i * 100}ms` }}>
                <span className="text-4xl font-display font-extrabold text-accentBlue/15 block mb-4">{item.step}</span>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="border-t border-border py-20 bg-bgPanel">
        <div ref={servicesRef} className={`max-w-7xl mx-auto px-8 section-fade ${servicesVisible ? 'visible' : ''}`}>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] text-center mb-4 fade-up-child" style={{ '--anim-delay': '0ms' }}>What We Deliver</h2>
          <p className="text-center text-textSecondary mb-16 max-w-2xl mx-auto fade-up-child" style={{ '--anim-delay': '80ms' }}>
            Full-spectrum development capabilities to build, deploy, and scale your product.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8">
            {services.map((service, i) => (
              <div key={i} className="glass-panel p-8 flex flex-col gap-5 fade-up-child" style={{ '--anim-delay': `${160 + i * 80}ms` }}>
                <div className="p-4 bg-accentBlueLight w-fit rounded-xl text-accentBlue">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-textSecondary leading-relaxed text-sm">{service.description}</p>
                <ul className="flex flex-col gap-2.5 mt-auto">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-textMuted">
                      <Check size={15} className="text-accentBlue mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="border-t border-border py-20">
        <div ref={projectsRef} className={`max-w-7xl mx-auto px-8 section-fade ${projectsVisible ? 'visible' : ''}`}>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] text-center mb-4 fade-up-child" style={{ '--anim-delay': '0ms' }}>Project Examples</h2>
          <p className="text-center text-textSecondary mb-16 max-w-2xl mx-auto fade-up-child" style={{ '--anim-delay': '80ms' }}>
            A selection of projects showcasing our expertise across different domains and technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="glass-panel p-8 flex flex-col gap-5 fade-up-child" style={{ '--anim-delay': `${160 + i * 100}ms` }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-textSecondary bg-accentBlueLight text-accentBlue px-3 py-1 rounded-full">{project.tag}</span>
                </div>
                <p className="text-textSecondary leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border">
                  {project.highlights.map((h, j) => (
                    <span key={j} className="text-xs text-textMuted bg-slate-100 px-3 py-1.5 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] py-16 sm:py-20">
        <div ref={ctaRef} className={`max-w-7xl mx-auto px-8 text-center section-fade ${ctaVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl text-white mb-4 fade-up-child" style={{ '--anim-delay': '0ms' }}>Ready to build something great?</h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-8 fade-up-child" style={{ '--anim-delay': '80ms' }}>
            Let's discuss your project requirements and create a tailored development plan.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors fade-up-child"
            style={{ '--anim-delay': '160ms' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] py-6">
        <div className="max-w-7xl mx-auto px-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Shlomi Otmazgin. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

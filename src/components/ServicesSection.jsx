import React from 'react';
import { Bot, Briefcase, Zap, TrendingUp, Users } from 'lucide-react';
import { styled } from '../stitches.config';

const Section = styled('section', {
  padding: '$7 0',
  position: 'relative'
});

const Container = styled('div', {
  maxWidth: '1200px', margin: '0 auto', padding: '0 $4',
  position: 'relative', zIndex: 10
});

const Title = styled('h2', {
  fontSize: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', marginBottom: '$2'
});

const Subtitle = styled('p', {
  textAlign: 'center', color: '$textSecondary', marginBottom: '$6', maxWidth: '600px', margin: '0 auto $7 auto'
});

const Grid = styled('div', {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '$4'
});

const Card = styled('div', {
  padding: '$4', display: 'flex', flexDirection: 'column', gap: '$3',
  background: '$bgPanel', boxShadow: '$1', border: '1px solid $border', borderRadius: '$3',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '$2',
  }
});

const IconWrapper = styled('div', {
  padding: '$2', background: 'rgba(59, 130, 246, 0.1)', width: 'fit-content', borderRadius: '$2'
});

const CardTitle = styled('h3', {
  fontSize: '$5', marginTop: '$1'
});

const CardDesc = styled('p', {
  color: '$textSecondary'
});

const CardList = styled('ul', {
  marginTop: 'auto', paddingLeft: '$3', display: 'flex', flexDirection: 'column', gap: '$1', color: '$textMuted', fontSize: '$1'
});

export default function ServicesSection() {
  const services = [
    {
      icon: <Bot size={24} color="#3b82f6" />,
      title: 'AI Transformation',
      description: 'Adopt AI and embed it into your R&D DNA with a targeted 30% reduction in Time-to-Market.',
      bullets: [
        'Identify high-impact AI use cases for development.',
        'Embed AI-assisted coding and automated testing.',
        'Integrate AI tools without disrupting critical workflows.'
      ]
    },
    {
      icon: <Briefcase size={24} color="#3b82f6" />,
      title: 'Fractional VP R&D',
      description: 'Strategic oversight for CEOs to align engineering output with business ROI goals.',
      bullets: [
        'Open the "Black Box" through radical transparency.',
        'Optimize delivery and OpEx/CapEx budgets.',
        'Build technology foundations for commercial success.'
      ]
    },
    {
      icon: <Zap size={24} color="#3b82f6" />,
      title: 'Engineering Velocity',
      description: 'For organizations where R&D throughput is a barrier to scale.',
      bullets: [
        'Identify and remove critical bottlenecks.',
        'Deploy AI-Native and Lean methods to boost throughput.',
        'Design team topologies that minimize dependencies.'
      ]
    },
    {
      icon: <TrendingUp size={24} color="#3b82f6" />,
      title: 'M&A Readiness & Due Diligence',
      description: 'Clarity before an exit or funding round based on real-world exit experience.',
      bullets: [
        'Technical Debt and infrastructure scalability risks.',
        'Engineering Maturity and workflow quality standards.',
        'Investment Readiness for funding and acquisitions.'
      ]
    },
    {
      icon: <Users size={24} color="#3b82f6" />,
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
    <Section id="services">
      <Container>
        <Title>Core Services</Title>
        <Subtitle>Aligning engineering execution directly with commercial outcomes.</Subtitle>

        <Grid>
          {services.map((service, index) => (
            <Card key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.description}</CardDesc>
              <CardList>
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </CardList>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

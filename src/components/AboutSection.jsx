import React from 'react';
import { styled } from '../stitches.config';

const Section = styled('section', {
  padding: '$7 0', background: '$bgPanel'
});

const Container = styled('div', {
  maxWidth: '1200px', margin: '0 auto', padding: '0 $4',
});

const Grid = styled('div', {
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '$6', alignItems: 'center',
  '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }
});

const ContentWrapper = styled('div', {
  '@media (max-width: 768px)': { gridColumn: '1 / -1' }
});

const Title = styled('h2', {
  fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '$3'
});

const Text = styled('p', {
  fontSize: '$3', color: '$textSecondary', marginBottom: '$4'
});

const ConnectBtn = styled('a', {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  padding: '0.75rem 1.75rem', borderRadius: '$1', fontWeight: 600,
  background: 'transparent', border: '1px solid $textPrimary', color: '$textPrimary',
  transition: 'background 0.3s',
  '&:hover': { background: '$border' }
});

const Timeline = styled('div', {
  display: 'flex', flexDirection: 'column', gap: '$4'
});

const TimelineItem = styled('div', {
  borderLeft: '2px solid $border', paddingLeft: '$4', position: 'relative'
});

const TimelineDot = styled('div', {
  position: 'absolute', left: '-7px', top: '0', width: '12px', height: '12px', borderRadius: '$round', background: '$accent'
});

const CompanyTitle = styled('h3', {
  fontSize: '$4', marginBottom: '0.25rem'
});

const JobTitle = styled('span', {
  fontSize: '$1', color: '$textSecondary', fontWeight: 600, display: 'block', marginBottom: '$2', textTransform: 'uppercase', letterSpacing: '1px'
});

const JobDesc = styled('p', {
  color: '$textSecondary', fontSize: '0.95rem'
});

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
    <Section id="about">
      <Container>
        <Grid>
          <ContentWrapper>
            <Title>What makes me different?</Title>
            <Text>
              From scaling high-growth startups to advising global enterprises and mid-market companies, my experience spans the entire business spectrum.
            </Text>
            <Text>
              I specialize in guiding organizations through critical junctions, such as comprehensive Due Diligence preparation for acquisitions, while maintaining a cross-functional focus on process optimization and unlocking the full potential of engineering development teams.
            </Text>
            <ConnectBtn href="#contact">Connect with me</ConnectBtn>
          </ContentWrapper>

          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineDot />
                <CompanyTitle>{exp.company}</CompanyTitle>
                <JobTitle>{exp.title}</JobTitle>
                <JobDesc>{exp.description}</JobDesc>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Container>
    </Section>
  );
}

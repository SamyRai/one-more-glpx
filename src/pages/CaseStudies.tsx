import React from 'react';
import { Page } from '@/components/ui/Page';
import { Seo } from '@/components/ui/Seo';
import { Section } from '@/components/ui/Section';
import { CaseStudyTeaser } from '@/components/marketing/CaseStudyTeaser';

const caseStudies = [
  {
    image: 'https://via.placeholder.com/400x200?text=Case+Study+1',
    title: 'Case Study 1: How Company A Increased Revenue by 50%',
    description: 'An in-depth look at the strategies that led to significant growth.',
    href: '#',
  },
  {
    image: 'https://via.placeholder.com/400x200?text=Case+Study+2',
    title: 'Case Study 2: Improving User Engagement for Company B',
    description: 'A deep dive into the methods used to boost user interaction and retention.',
    href: '#',
  },
  {
    image: 'https://via.placeholder.com/400x200?text=Case+Study+3',
    title: 'Case Study 3: Company C\'s Journey to a 90% Customer Satisfaction Rate',
    description: 'Discover the changes we implemented to enhance customer satisfaction.',
    href: '#',
  },
];

function CaseStudiesPage() {
  return (
    <>
      <Seo title="Case Studies" description="Read our customer success stories." />
      <Page.Header>
        <Page.Title>Case Studies</Page.Title>
        <Page.Description>
          Learn how our customers have found success with our solutions.
        </Page.Description>
      </Page.Header>
      <Section>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyTeaser
              key={index}
              image={study.image}
              title={study.title}
              description={study.description}
              href={study.href}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

export default CaseStudiesPage;

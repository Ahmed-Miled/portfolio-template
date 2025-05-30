import React from 'react';
import AboutSection from '../components/AboutSection';
import Skills from '../pages/Skills';
import PageWrapper from '../components/PageWrapper';

export default function About() {
  return (
    <div className="container mt-4">
      <PageWrapper>
        <AboutSection />
        <Skills />
      </PageWrapper>
    </div>
  );
}

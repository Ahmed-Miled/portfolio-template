import React from 'react';
import AboutSection from '../components/AboutSection';
import PageWrapper from '../components/PageWrapper';

export default function About() {
  return (
    <div className="container mt-4">
      <PageWrapper>
        <AboutSection />
      </PageWrapper>
    </div>
  );
}

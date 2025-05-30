// client/src/pages/Skills.jsx
import React from 'react';
import SkillsSection from '../components/SkillsSection';
import PageWrapper from '../components/PageWrapper';

export default function Skills() {
  return (
    <div className="container mt-4">
      <PageWrapper>
        <SkillsSection />
      </PageWrapper>
    </div>
  );
}

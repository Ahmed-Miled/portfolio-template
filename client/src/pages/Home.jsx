// client/src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProjectList from '../components/ProjectList';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import AboutSection from '../components/AboutSection';


export default function Home() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/services/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        setError(`Failed to load projects: ${err.message}`);
      });
  }, []);
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h2 className="mb-3">My Projects</h2>
        {error && <p className="text-danger">{error}</p>}
        <ProjectList projects={projects} />
      </section>

      <section className="mb-5">
        <h2 className="mb-3">My Skills</h2>
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
      </section>
    </div>
  );
}

// client/src/components/HomeContent.jsx
import React, { useEffect, useState } from 'react';
import ProjectList from './ProjectList';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import AboutSection from './AboutSection';

const TAGS = ['All', 'Web Dev', 'AI', 'Mobile', 'Game', 'Other'];

export default function HomeContent() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeTag, setActiveTag] = useState('All');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/services/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((err) => {
        setError(`Failed to load projects: ${err.message}`);
      });
  }, []);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (tag === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((proj) => proj.tags?.includes(tag)));
    }
  };

  return (
    <div className="p-3">
      {/* Projects Section */}
      <section className="mb-5">
        <h2 className="mb-4 border-bottom pb-2">My Projects</h2>

        <div className="mb-4 d-flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`btn btn-sm ${
                tag === activeTag ? 'btn-dark' : 'btn-outline-secondary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {error && <p className="text-danger">{error}</p>}
        <ProjectList projects={filteredProjects} />
      </section>
      <section className="mb-5">
        <SkillsSection />
      </section>

      <section className="mb-5">
        <ExperienceSection />
      </section>

      <section className="mb-5">
        <AboutSection />
      </section>
    </div>
  );
}

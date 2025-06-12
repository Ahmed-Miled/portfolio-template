// client/src/components/HomeContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from './AboutSection';
import FeaturedProjects from './FeaturedProjects';

export default function HomeContent() {
  const techStack = [
    'React',
    'Express.js',
    ' Node.js',
    'PHP & MySQL',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'PostgreSQL',
    'Git & GitHub',
    'PHPUnit',
  ];
  return (
    <div>
      <section className="mb-5">
        <AboutSection />
      </section>

      <section className="mb-5 text-center">
        <h5 className="mb-3">Tech Stack Highlights</h5>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="badge mb-3 text-wrap text-center"
              style={{
                backgroundColor: 'var(--sidebar-border)',
                color: 'var(--sidebar-text)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
      <section className="mb-5">
        <FeaturedProjects />
        <section className="mb-5 text-center">
          <Link to="/projects" className="btn btn-primary me-3">
            View Projects
          </Link>
        </section>
      </section>
    </div>
  );
}

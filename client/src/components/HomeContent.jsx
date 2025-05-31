// client/src/components/HomeContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from './AboutSection';
import FeaturedProjects from './FeaturedProjects';

export default function HomeContent() {
  return (
    <div>
      <section className="mb-5">
        <AboutSection />
      </section>

      <section className="mb-5 text-center">
        <h5 className="mb-3">Tech Stack Highlights</h5>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <span className="badge bg-secondary">React</span>
          <span className="badge bg-secondary">Node.js</span>
          <span className="badge bg-secondary">Express</span>
          <span className="badge bg-secondary">PostgreSQL</span>
          <span className="badge bg-secondary">Bootstrap</span>
        </div>
      </section>
      <section className="mb-5">
        <FeaturedProjects />
        <section className="mb-5 text-center">
          <Link to="/projects" className="btn btn-primary me-3">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-outline-secondary">
            Contact Me
          </Link>
        </section>
      </section>
    </div>
  );
}

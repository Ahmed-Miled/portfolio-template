// client/src/components/ProjectList.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  if (!projects.length) return <p>No projects available.</p>;

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="col-md-6 mb-4">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

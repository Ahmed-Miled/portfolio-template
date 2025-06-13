// client/src/components/ProjectList.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {

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

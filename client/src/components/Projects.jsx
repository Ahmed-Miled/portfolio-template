import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/services/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setError('');
      })
      .catch((err) => {
        setProjects([]);
        setError(`Failed to load projects: ${err.message}`);
      });
  }, []);

  return (
    <section>
      <h2>Projects</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong>: {project.description}<br />
            <a href={project.github_link}>GitHub</a> |{' '}
            <a href={project.demo_link}>Live Demo</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

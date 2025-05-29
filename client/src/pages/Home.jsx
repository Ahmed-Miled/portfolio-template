// client/src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProjectList from '../components/ProjectList';

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
      <h2>My Projects</h2>
      {error && <p className="text-danger">{error}</p>}
      <ProjectList projects={projects} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import ProjectList from '../components/ProjectList';
import PageWrapper from '../components/PageWrapper';
import Loading from '../components/Loading';

const TAGS = [
  'All',
  'Web Dev',
  'Full Stack',
  'Frontend',
  'Backend',
  'AI',
  'Game',
  'Live',
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTag, setActiveTag] = useState('All');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://portfolio-backend-xqxg.onrender.com/services/api/projects')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((data) => {
        setProjects(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => setError(`Failed to load: ${err}`));
  }, []);

  const handleTag = (tag) => {
    setActiveTag(tag);
    setFiltered(
      tag === 'All' ? projects : projects.filter((p) => p.tags?.includes(tag))
    );
  };

  if (loading) return <Loading message="Loading projects..." />;

  return (
    <div className="container mt-4">
      <h2>My Projects</h2>
      <div className="mb-3">
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTag(tag)}
            className={`tag-btn btn btn-sm me-2 ${tag === activeTag ? 'active' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
      {error && <p className="text-danger">{error}</p>}

      <PageWrapper>
        <ProjectList projects={filtered} />
      </PageWrapper>
    </div>
  );
}

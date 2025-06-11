import React, { useEffect, useState } from 'react';

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://portfolio-backend-xqxg.onrender.com/services/api/projects')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((data) => {
        // Filter projects that have 'Featured' tag
        const featuredProjects = data.filter((project) =>
          project.tags.includes('Featured')
        );
        // Take only first 3
        setProjects(featuredProjects.slice(0, 3));
      })
      .catch((err) => setError(`Failed to load: ${err}`));
  }, []);

  if (error) return <p className="text-danger">{error}</p>;
  if (!projects.length) return <p>Loading...</p>;

  return (
    <section className="mb-5">
      <h5 className="mb-4 text-center">Featured Projects</h5>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{project.title}</h6>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  {project.tags.map((tag, i) =>
                    tag === 'Featured' ? null : (
                      <span
                        key={i}
                        className="badge mb-3 me-1 text-wrap text-center"
                        style={{
                          backgroundColor: 'var(--sidebar-border)',
                          color: 'var(--sidebar-text)',
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

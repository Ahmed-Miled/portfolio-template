import React, { useState } from 'react';

export default function ProjectCard({ project }) {
  const [hoveringDemo, setHoveringDemo] = useState(false);

  const hasLive = project.tags?.includes('Live');

  return (
    <div className="card h-100">
      <img
        src={project.image_url}
        className="card-img-top"
        alt={project.title}
      />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>

        {project.tags && (
          <div>
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="badge mb-3 me-1 text-wrap text-center"
                style={{
                  backgroundColor: 'var(--sidebar-border)',
                  color: 'var(--sidebar-text)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 d-flex align-items-center">
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm border bg-transparent btn-github me-2 hover-dark"
          >
            GitHub
          </a>

          {/* Demo Button */}
          {hasLive ? (
            <a
              href={project.demo_link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm border bg-transparent hover-primary btn-demo"
            >
              Demo
            </a>
          ) : (
            <button
              className="btn btn-sm border bg-transparent text-danger"
              onMouseEnter={() => setHoveringDemo(true)}
              onMouseLeave={() => setHoveringDemo(false)}
              disabled
            >
              {hoveringDemo ? '❌' : 'Demo'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

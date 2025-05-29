// client/src/components/ExperienceCard.jsx
import React from 'react';

export default function ExperienceCard({ experience }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{experience.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{experience.company}</h6>
        <p className="card-text"><strong>Duration:</strong> {experience.duration}</p>
        <p className="card-text">{experience.description}</p>
      </div>
    </div>
  );
}

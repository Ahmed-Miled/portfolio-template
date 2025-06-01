// client/src/components/EducationSection.jsx
import React, { useEffect, useState } from 'react';

export default function EducationSection() {
  const [education, setEducation] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/services/api/education')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((data) => {
        setEducation(data);
        setError('');
      })
      .catch((err) => {
        console.error('Failed to fetch education:', err);
        setError('Could not load education history.');
      });
  }, []);

  return (
    <section className="my-5">
      <h2 className="mb-4">Education</h2>
      {error && <p className="text-danger">{error}</p>}
      {education.map((edu) => (
        <div key={edu.id} className="card mb-3 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title">{edu.institution}</h5>
            <h6 className="card-subtitle mb-2 text-secondary">
              {edu.degree} ({formatDate(edu.start_date)} -{' '}
              {formatDate(edu.end_date)})
            </h6>
            {edu.description && <p className="card-text">{edu.description}</p>}
          </div>
        </div>
      ))}
    </section>
  );
}

function formatDate(date) {
  if (!date) return 'Present';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}

// client/src/components/ExperienceSection.jsx
import React, { useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/services/api/experiences')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch experience: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setExperiences(data);
        setError('');
      })
      .catch((err) => {
        setExperiences([]);
        setError(`Error: ${err.message}`);
      });
  }, []);

  return (
    <section className="my-5">
      <h2 className="mb-3">Experience</h2>
      {error && <p className="text-danger">{error}</p>}
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </section>
  );
}

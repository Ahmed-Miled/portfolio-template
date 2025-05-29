// client/src/components/SkillsSection.jsx
import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/services/api/skills')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch skills: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setError('');
      })
      .catch((err) => {
        setSkills([]);
        setError(`Error: ${err.message}`);
      });
  }, []);

  return (
    <section className="my-5">
      <h2 className="mb-3">Skills</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="d-flex flex-wrap">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

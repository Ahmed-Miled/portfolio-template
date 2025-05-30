// client/src/components/SkillsSection.jsx
import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/services/api/skills')
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .then(data => {
        setSkills(data);
        setError('');
      })
      .catch(err => {
        setSkills([]);
        setError(`Error: ${err}`);
      });
  }, []);

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="my-5">
      <h2 className="mb-4">Skills</h2>
      {error && <p className="text-danger">{error}</p>}

      {Object.entries(grouped).map(([category, skillList]) => (
        <div key={category} className="mb-4">
          <h4 className="text-muted mb-3">{category}</h4>
          <div className="row">
            {skillList.map(skill => (
              <div key={skill.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

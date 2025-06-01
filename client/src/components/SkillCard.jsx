import React from 'react';
import { Badge } from 'react-bootstrap';

export default function SkillCard({ skill }) {
  const levelColor = {
    Beginner: 'secondary',
    Intermediate: 'warning',
    Advanced: 'success',
    Expert: 'dark',
  };

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body text-center">
        <h6 className="card-title mb-2">{skill.name}</h6>
        <Badge bg={levelColor[skill.level] || 'info'}>{skill.level}</Badge>
      </div>
    </div>
  );
}

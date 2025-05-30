/*
// client/src/components/SkillCard.jsx
import React from 'react';

export default function SkillCard({ skill }) {
  return (
    <div className="card m-2 shadow-sm" style={{ width: '12rem' }}>
      <div className="card-body">
        <h5 className="card-title">{skill.name}</h5>
        <p className="card-text">
          <strong>Level:</strong> {skill.level}<br />
          <strong>Category:</strong> {skill.category}
        </p>
      </div>
    </div>
  );
}

*/
/*
// client/src/components/SkillCard.jsx
import React from 'react';
import { Badge } from 'react-bootstrap';

export default function SkillCard({ skill }) {
  const levelColor = {
    Beginner: 'secondary',
    Intermediate: 'warning',
    Advanced: 'success',
    Expert: 'dark'
  };

  return (
    <div className="card m-2 border-0 shadow-sm" style={{ width: '11rem' }}>
      <div className="card-body text-center">
        <h6 className="card-title mb-2">{skill.name}</h6>
        <Badge bg={levelColor[skill.level] || 'info'}>{skill.level}</Badge>
      </div>
    </div>
  );
}
*/
import React from 'react';
import { Badge } from 'react-bootstrap';

export default function SkillCard({ skill }) {
  const levelColor = {
    Beginner: 'secondary',
    Intermediate: 'warning',
    Advanced: 'success',
    Expert: 'dark'
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

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

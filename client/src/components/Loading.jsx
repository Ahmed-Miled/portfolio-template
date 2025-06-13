import React from 'react';
export default function Loading({ message = "Loading..." }) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <div className="text-center">
        <div className="spinner-border text-primary mb-3" role="status" />
        <p className="text-muted">{message}</p>
      </div>
    </div>
  );
}

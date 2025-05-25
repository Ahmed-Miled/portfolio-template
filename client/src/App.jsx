// client/src/App.jsx
import React, { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Portfolio Template</h1>
      <p>{message}</p>
    </div>
  );
}

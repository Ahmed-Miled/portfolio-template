// client/src/App.jsx
import React, { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState(''); // Initial state is an empty string

  useEffect(() => {
    fetch('/api/hello') // 1. Fetching from /api/hello (Good, matches proxy intent)
      .then((res) => res.json()) // 2. Expecting a JSON response
      .then((data) => setMessage(data.message)) // 3. Setting state with data.message
      .catch((err) => console.error('Error fetching data:', err));
  }, []); // Runs once on component mount

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Portfolio Template</h1>
      <p>{message}</p> {/* 4. Displaying the message state */}
    </div>
  );
}

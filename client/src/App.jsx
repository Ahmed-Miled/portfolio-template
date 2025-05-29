// client/src/App.jsx
/*
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
      <p>{message}</p> {/* 4. Displaying the message state }
    </div>
  );
}


// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import { getProjects, getSkills } from './services/api'; // Adjust path if needed

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const projectsData = await getProjects();
        const skillsData = await getSkills();
        setProjects(projectsData);
        setSkills(skillsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <p>Loading portfolio data...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>

      <section id="projects">
        <h2>Projects</h2>
        {projects.length > 0 ? (
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tags && <p>Tags: {project.tags.join(', ')}</p>}
                {project.github_link && <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {project.demo_link && <a href={project.demo_link} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>Demo</a>}
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects to display.</p>
        )}
      </section>

      <section id="skills">
        <h2>Skills</h2>
        {skills.length > 0 ? (
          <ul>
            {skills.map(skill => (
              <li key={skill.id}>
                {skill.name} ({skill.level}) - {skill.category}
              </li>
            ))}
          </ul>
        ) : (
          <p>No skills to display.</p>
        )}
      </section>

      {/* We will add sections for Experience and Education later }
    </div>
  );
}

export default App;
*/
// client/src/App.jsx
import React, { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Loading message...'); // Initial state
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('App.jsx: useEffect is running, attempting to fetch /api/hello');
    fetch('/services/api/hello') // This should use the webpack dev server proxy
      .then((res) => {
        console.log('App.jsx: Received response from /api/hello', res);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('App.jsx: Successfully parsed JSON data:', data);
        setMessage(data.message);
        setError(''); // Clear any previous error
      })
      .catch((err) => {
        //console.error('App.jsx: Error fetching data:', err);
        setMessage(''); // Clear message on error
        setError(`Failed to load message: ${err.message}`);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Portfolio Template Test</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <p>Message from backend: {message}</p>
    </div>
  );
}
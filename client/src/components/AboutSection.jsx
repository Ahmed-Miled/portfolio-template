// client/src/components/AboutSection.jsx
import React from 'react';

export default function AboutSection() {
  return (
    <section className="my-5">
      <h2 className="mb-4">About Me</h2>
      <div className="card shadow-sm p-4 border-0 bg-light">
        <p className="lead mb-3">
          Hi, I’m <strong>Ahmed</strong>, a dedicated full-stack developer with a strong foundation in web technologies.
        </p>
        <p>
          I specialize in building dynamic, responsive applications using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong>.
          I'm passionate about writing clean, efficient code and delivering smooth user experiences.
        </p>
        <p>
          I enjoy solving problems, continuously learning new technologies, and collaborating with others to build impactful software.
        </p>
      </div>
    </section>
  );
}

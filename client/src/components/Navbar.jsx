import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `nav-link px-3 ${isActive ? 'fw-bold text-dark' : 'text-muted'}`;

  return (
    <nav className="nav mb-4 border-bottom pb-2">
      <NavLink to="/" className={linkStyle}>Home</NavLink>
      <NavLink to="/projects" className={linkStyle}>Projects</NavLink>
      <NavLink to="/skills" className={linkStyle}>Skills</NavLink>
      <NavLink to="/experience" className={linkStyle}>Experience</NavLink>
      <NavLink to="/about" className={linkStyle}>About</NavLink>
      <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
    </nav>
  );
}

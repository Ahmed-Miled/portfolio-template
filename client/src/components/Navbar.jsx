import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar({ isOpen, onClose }) {
  const { theme } = useContext(ThemeContext);

  const linkStyle = ({ isActive }) =>
    `nav-link ${isActive ? 'fw-bold' : theme === 'dark' ? 'text-white' : 'text-body-secondary'}`;

  const navBaseClasses = ['nav'];
  let dynamicNavClasses = [];

  if (isOpen) {
    dynamicNavClasses.push(
      'd-flex',
      'flex-column',
      'position-fixed',
      'top-0',
      'start-0',
      'end-0',
      'bg-body',
      'p-3',
      'shadow-lg',
      'mobile-nav'
    );
  } else {
    dynamicNavClasses.push('d-none');
  }

  // Desktop layout (md and up)
  dynamicNavClasses.push(
    'd-md-flex',
    'flex-md-row',
    'justify-content-md-end',
    'position-md-static',
    'bg-md-transparent',
    'p-md-0',
    'shadow-md-none'
  );

  const combinedNavClasses = [...navBaseClasses, ...dynamicNavClasses].join(
    ' '
  );
  const navStyle = isOpen ? { zIndex: 1050 } : {};

  return (
    <div
      className={`mb-4 border-bottom pb-2 ${isOpen ? 'position-relative' : ''}`}
    >
      <nav className={combinedNavClasses} style={navStyle}>
        {isOpen && (
          <div className="d-md-none d-flex justify-content-end mb-2">
            <button
              className="btn btn-outline-secondary"
              onClick={onClose}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
        )}

        {/* Mobile links layout (vertical) */}
        <div className="d-flex flex-column d-md-none gap-2">
          <NavLink end to="/" className={linkStyle} onClick={onClose}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkStyle} onClick={onClose}>
            Projects
          </NavLink>
          <NavLink to="/education" className={linkStyle} onClick={onClose}>
            Education
          </NavLink>
          <NavLink to="/about" className={linkStyle} onClick={onClose}>
            About
          </NavLink>
          <ThemeToggle />
        </div>

        {/* Desktop links layout (horizontal, right-aligned) */}
        <div className="d-none d-md-flex align-items-center gap-3 ms-md-auto">
          <NavLink end to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/education" className={linkStyle}>
            Education
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

// client/src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export default function Navbar({ isOpen, onClose }) {
  const linkStyle = ({ isActive }) =>
    `nav-link ${isActive ? 'fw-bold text-dark' : 'text-muted'}`;

  // Base classes for the nav element
  const navBaseClasses = ['nav', 'gap-2'];
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
      'shadow-lg'
    );
  } else {
    dynamicNavClasses.push('d-none');
  }
  dynamicNavClasses.push(
    'd-md-flex',
    'flex-md-row',
    'position-md-static',
    'bg-md-transparent',
    'p-md-0',
    'shadow-md-none',
    'justify-content-md-end',
    'me-md-3'
  );

  const combinedNavClasses = [...navBaseClasses, ...dynamicNavClasses].join(
    ' '
  );

  const navStyle = isOpen ? { zIndex: 1050 } : {};

  return (
      <div className={`mb-4 border-bottom pb-2 ${isOpen ? 'position-relative' : ''}`}>

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

        <NavLink exact to="/" className={linkStyle} onClick={onClose}>
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
        <NavLink to="/contact" className={linkStyle} onClick={onClose}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

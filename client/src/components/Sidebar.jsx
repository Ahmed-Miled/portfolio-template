import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaBars,
} from 'react-icons/fa';

export default function Sidebar({ onToggleMenu }) {
  return (
    <aside
      className="bg-dark text-white p-4 rounded shadow position-relative d-flex flex-column align-items-center sticky-top"
      style={{ top: '20px', minHeight: '90vh' }}
    >
      {/* Toggle button only on small screens */}
      <button
        className="btn btn-outline-light position-absolute top-0 end-0 m-2 d-md-none"
        onClick={onToggleMenu}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>

      <img
        src="/images/avatar.jpeg"
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
      />
      <h4 className="text-center">Ahmed Miled</h4>
      <span className="badge bg-secondary mb-3 text-wrap text-center">
        Software Engineering Bachelor's Student
      </span>

      <div className="w-100 text-start small">
        <p><FaEnvelope className="me-2" /> contact.ahmedmiled@gmail.com</p>
        <p><FaPhone className="me-2" /> +216 96959291</p>
        <p><FaBirthdayCake className="me-2" /> May 18, 2003</p>
        <p><FaMapMarkerAlt className="me-2" /> Sayada, Monastir, Tunisia</p>
      </div>

      <a
        href="https://www.linkedin.com/in/yourprofile"
        className="btn btn-outline-light btn-sm mt-3 w-100"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn Profile
      </a>

      <div className="d-flex gap-3 mt-4 fs-4">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-white">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-white">
          <FaGithub />
        </a>
      </div>
    </aside>
  );
}

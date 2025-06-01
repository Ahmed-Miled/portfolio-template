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
      className="p-4 rounded shadow d-flex flex-column align-items-center justify-content-center "
      style={{
        backgroundColor: 'var(--sidebar-bg)',
        color: 'var(--sidebar-text)',
        minHeight: '90vh',
      }}
    >
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
        style={{ width: '250px', height: '250px', objectFit: 'cover' }}
      />
      <h4 className="text-center">Ahmed Miled</h4>
      <span
        className="badge mb-3 text-wrap text-center"
        style={{
          backgroundColor: 'var(--sidebar-border)',
          color: 'var(--sidebar-text)',
        }}
      >
        Software Engineering Bachelor's Student
      </span>

      <div className="w-100 text-start small">
        <p>
          <FaEnvelope className="me-2" /> contact.ahmedmiled@gmail.com
        </p>
        <p>
          <FaPhone className="me-2" /> +216 96959291
        </p>
        <p>
          <FaMapMarkerAlt className="me-2" /> Sayada, Monastir, Tunisia
        </p>
      </div>

      <a
        href="https://www.linkedin.com/in/ahmed-miled-815aaa240/"
        className="btn btn-sm mt-3 w-100"
        style={{
          borderColor: 'var(--sidebar-text)',
          color: 'var(--sidebar-text)',
        }}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn Profile
      </a>

      <div className="d-flex gap-3 mt-4 fs-4">
        <a
          href="https://www.linkedin.com/in/ahmed-miled-815aaa240/"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--sidebar-text)' }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ahmed-Miled"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--sidebar-text)' }}
        >
          <FaGithub />
        </a>
      </div>
    </aside>
  );
}

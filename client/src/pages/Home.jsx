// client/src/pages/Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <div className="d-flex flex-column flex-md-row container-fluid mt-4">
      

        <HomeContent />
    </div>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // You’ll create this
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Home from './pages/Home'; // landing page

export default function App() {
  return (
   <Router>
  <div className="container-fluid px-0 px-md-3 mt-4">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <Sidebar />
          </div>
          
          <div className="col-12 col-md-9">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
</Router>
  );
}

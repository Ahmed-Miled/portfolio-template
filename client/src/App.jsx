// client/src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Home from './pages/Home';

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Router>
      <div className="container-fluid px-0 px-md-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="d-flex flex-column flex-md-row" >
              
              <div className="col-12 col-md-3 mb-4 mb-md-0">
                <div
                  style={{
                    position: 'sticky',
                    top: '20px',
                    alignSelf: 'flex-start', // ensure sticky container sizes properly in flex
                  }}
                >
                  <Sidebar onToggleMenu={() => setShowNavbar(!showNavbar)} />
                </div>
              </div>

              <div className="col-12 col-md-9">
                <Navbar
                  isOpen={showNavbar}
                  onClose={() => setShowNavbar(false)}
                />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/education" element={<Education />} />
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

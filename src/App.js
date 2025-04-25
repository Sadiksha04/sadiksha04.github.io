import React from 'react';
import './App.css';
import HomePage from './homepage';
import MyIntro from './About';
import Education from './education';
import Experience from './experience';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <section className="Portfolio">
    
        <div className='Navbar'>
          <div className='LOGO'> SD </div>
          <div className='NavLists'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>

       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<MyIntro />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
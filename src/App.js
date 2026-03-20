import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Timeline from './components/timeline';
import Skills from './components/skills';
import Certifications from './components/certifications';
import Education from './components/education';
import Projects from './components/projects';
import Contact from './components/contact';
import Blog from './components/blog';

function App() {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Skills />
          <Certifications />
          <Education />
          <Projects />
          <Timeline />
          <Blog />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
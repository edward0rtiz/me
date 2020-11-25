import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Skills from './components/skills'
import Education from './components/education'
import Projects from './components/projects'
import Contact from './components/contact'
import Blog from './components/blog'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Timeline></Timeline>
            <Blog></Blog>
            <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
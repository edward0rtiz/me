import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpeg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Edward Ortiz</a></h1>
                            <span className="email"><i className="icon-mail"></i> edwardarmandoortiz@gmail.com</span>
                            <div><br></br></div>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                                    <li><a href="#education" data-nav-section="education">Education</a></li>
                                    <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                                    <li><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                                    <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="colorlib-social">
                            <li><a href="https://twitter.com/edward0rtiz" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                            <li><a href="https://www.instagram.com/edward0rtiz/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                            <li><a href="https://www.linkedin.com/in/ortizedward/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                            <li><a href="https://github.com/edward0rtiz" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            <li><a href="https://medium.com/@edward0rtiz" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
                        </div>
                        <div><br></br></div>
                        <div className="colorlib-footer">
                            <p><small>
                                Made with <i className="icon-beer" aria-hidden="true" /> and more <i className="icon-beer" aria-hidden="true"></i>
                                <br /><p>Copyright &copy; 2020</p>
                                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></small></p>
                        </div>
                    </aside>
                </div>
            </div >
        )
    }
}
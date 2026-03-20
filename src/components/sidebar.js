import React, { useEffect, useMemo, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Introduction' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Experience' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    document.body.classList.toggle('offcanvas', menuOpen);
    return () => document.body.classList.remove('offcanvas');
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <div>
      <button
        type="button"
        className={`js-colorlib-nav-toggle colorlib-nav-toggle ${menuOpen ? 'active' : ''}`}
        aria-controls="navbar"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i />
      </button>
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
          <h1 id="colorlib-logo"><a href="#home">Edward Ortiz</a></h1>
          <span className="email"><i className="icon-mail" /> edwardarmandoortiz@gmail.com</span>
          <div><br /></div>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                  <a href={`#${item.id}`} data-nav-section={item.id} onClick={handleNavClick}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <ul className="colorlib-social">
          <li><a href="https://twitter.com/edward0rtiz" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
          <li><a href="https://www.instagram.com/edward0rtiz/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
          <li><a href="https://www.linkedin.com/in/ortizedward/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
          <li><a href="https://github.com/edward0rtiz" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></li>
          <li><a href="https://medium.com/@edward0rtiz" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2" /></a></li>
        </ul>
        <div><br /></div>
        <div className="colorlib-footer">
          <p><small>
            Made with <i className="icon-beer" aria-hidden="true" /> and more <i className="icon-beer" aria-hidden="true" />
            <br />Copyright &copy; 2026
            <br />Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
          </small></p>
        </div>
      </aside>
    </div>
  );
}
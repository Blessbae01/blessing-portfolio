'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: 'digisave',
      title: 'DigiSave',
      subtitle: 'Smart Savings Platform',
      description: 'A comprehensive savings application designed to help users manage their finances intelligently. Features automated savings goals and transaction tracking.',
      image: '/images/digisave.jpg',
      tech: ['React', 'Node.js', 'Express'],
      liveLink: 'https://digisave-esusu-app.vercel.app/',
      codeLink: 'https://github.com/Blessbae01/digisave-esusu-app'
    },
    {
      id: 'techvilla',
      title: 'TechVilla Hub',
      subtitle: 'Tech Career Platform',
      description: 'Your gateway to the tech career of your dreams. Daily updates on global tech roles, internships, scholarships, and free training.',
      image: '/images/techvillahub.jpg',
      tech: ['React', 'Node.js', 'Express'],
      liveLink: 'https://techvillahub.com',
      codeLink: 'https://techvillahub.com'
    },
    {
      id: 'discover',
      title: 'Discover Nigeria',
      subtitle: 'Tourism Platform',
      description: 'A travel booking platform where users can explore Nigeria\'s most beautiful destinations and reserve spaces for unforgettable tours and experiences.',
      image: '/images/greencity.jpg',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      liveLink: 'https://github.com/Blessbae01/Vacation-website-for-DISCOVER-NIGERIA',
      codeLink: 'https://github.com/Blessbae01/Vacation-website-for-DISCOVER-NIGERIA'
    },
    {
      id: 'adhd',
      title: 'ADHD Quiz App',
      subtitle: 'Assessment Tool',
      description: 'Interactive assessment tool designed to help identify ADHD symptoms through engaging quiz format with real-time feedback.',
      image: '/images/adhd.png',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      liveLink: 'https://github.com/Blessbae01/BBstar_ADHD_DigiTest',
      codeLink: 'https://github.com/Blessbae01/BBstar_ADHD_DigiTest'
    },
    {
      id: 'digi-academy',
      title: 'Digi Academy',
      subtitle: 'Online Learning Platform',
      description: 'Online learning platform providing courses and resources for digital skills development. Empowering learners with practical tech education.',
      image: '/images/digi-academy.jpg',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      liveLink: 'https://github.com/Blessbae01/DigiAcademyProject',
      codeLink: 'https://github.com/Blessbae01/DigiAcademyProject'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Blessing Uzoukwu</div>
          <button 
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button
              onClick={() => scrollToSection('home')}
              className={activeNav === 'home' ? 'active' : ''}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={activeNav === 'about' ? 'active' : ''}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={activeNav === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={activeNav === 'skills' ? 'active' : ''}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={activeNav === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          {/* Left: Image with geometric frames */}
          <div className="hero-image-section">
            <div className="image-frames">
              <div className="frame frame-1"></div>
              <div className="frame frame-2"></div>
              <div className="frame frame-3"></div>
              <Image 
                src="/images/headshot.png" 
                alt="Blessing Uzoukwu - Full Stack Developer" 
                width={300} 
                height={400}
                className="profile-image"
                priority
              />
            </div>
          </div>

          {/* Center: Intro box */}
          <div className="hero-center-section">
            <div className="intro-box">
              <h1>Hi, I&apos;m <span>Blessing</span></h1>
              <div className="intro-subtitle">
                <p>Full-Stack Developer</p>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/blessing-uzoukwu" target="_blank" title="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                  <Link href="https://github.com/Blessbae01" target="_blank" title="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" title="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.5-5.5 8.5c4 2 8-1 8-1"/>
                    </svg>
                  </Link>
                  <Link href="mailto:uzoukwublessing34@gmail.com" title="Email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Portfolio link */}
          <div className="hero-right-section">
            <Link href="#projects" className="portfolio-link">
              <span>Portfolio →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <div className="about-accent"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-highlight">
                <p className="about-intro">
                  I&apos;m a full-stack developer passionate about crafting elegant digital solutions that solve real-world problems. With deep expertise in modern web technologies, I specialize in building scalable applications that blend functionality with beautiful user experiences.
                </p>
              </div>
              <div className="about-points">
                <div className="about-point">
                  <div className="point-icon">💡</div>
                  <div className="point-content">
                    <h4>Problem Solver</h4>
                    <p>I approach challenges systematically, breaking complex problems into manageable solutions using best practices and clean code.</p>
                  </div>
                </div>
                <div className="about-point">
                  <div className="point-icon">🚀</div>
                  <div className="point-content">
                    <h4>Full-Stack Developer</h4>
                    <p>From frontend interfaces to backend systems, I build complete web applications using MERN stack and modern technologies.</p>
                  </div>
                </div>
                <div className="about-point">
                  <div className="point-icon">🤝</div>
                  <div className="point-content">
                    <h4>Collaborative Team Player</h4>
                    <p>I thrive in collaborative environments, sharing knowledge and growing alongside talented developers and designers.</p>
                  </div>
                </div>
              </div>
              <p className="about-closing">
                When I&apos;m not coding, you can find me exploring emerging technologies or contributing to the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
                <div className="stat-desc">Deployed to production</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">MERN</div>
                <div className="stat-label">Stack</div>
                <div className="stat-desc">Core expertise</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Learning</div>
                <div className="stat-desc">Always improving</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          {/* Projects Carousel */}
          <div className="projects-carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}>
              {projects.map((project) => (
                <div key={project.id} className="carousel-slide">
                  <div className="project-featured">
                    <div className="project-image">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={500} 
                        height={400}
                        className="featured-image"
                      />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p>{project.description}</p>
                      <div className="tech-stack">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.id === 'digisave' && (
                          <Link href={project.liveLink} target="_blank" className="project-link primary">
                            Live Demo →
                          </Link>
                        )}
                        <Link href={project.codeLink} target="_blank" className="project-link secondary">
                          View Code →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button className="carousel-btn carousel-prev" onClick={prevProject} aria-label="Previous project">
              ❮
            </button>
            <button className="carousel-btn carousel-next" onClick={nextProject} aria-label="Next project">
              ❯
            </button>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
                  onClick={() => goToProject(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="skills-header">
            <h2 className="section-title" style={{ color: '#1e293b' }}>Skills & Technologies</h2>
            <div className="skills-accent"></div>
          </div>
          <p className="skills-intro">
            I&apos;ve built expertise across the full web development stack, specializing in creating scalable applications with modern technologies. Here&apos;s what I work with:
          </p>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Tailwind</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Authentication</span>
                <span className="skill-tag">Server Logic</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Databases & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Supabase</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🤝</div>
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Collaboration</span>
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Leadership</span>
                <span className="skill-tag">Adaptability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Removed - content moved to footer */}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-inner">
            <div className="footer-main">
              <div className="footer-brand">
                <h3>Blessing Uzoukwu</h3>
                <p>Full-Stack Developer & Problem Solver</p>
                <div className="footer-connect">
                  <p>I&apos;m always interested in hearing about new projects and opportunities. Reach out and let&apos;s create something amazing together.</p>
                </div>
              </div>
              <div className="footer-social">
                <Link href="https://github.com/Blessbae01" target="_blank" className="footer-social-link" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/blessing-uzoukwu" target="_blank" className="footer-social-link" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
                <Link href="mailto:uzoukwublessing34@gmail.com" className="footer-social-link" title="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom">
              <p>&copy; 2026 Blessing Uzoukwu. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

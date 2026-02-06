"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

// Skills data
const skills = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js / Tailwind CSS", level: 80 },
  { name: "Python / SQL", level: 75 },
];

// Projects data
const projects = [
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    description:
      "Full-stack online store with product management, shopping cart, payment integration via Stripe, and order tracking system.",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe"],
    category: "web",
    github: "https://github.com/Chayananz/Project_E-Commerce",
    live: "https://e-commerce-store-six-ashen.vercel.app",
  },
  {
    id: "restaurant",
    name: "Restaurant App",
    description:
      "Restaurant web application featuring menu browsing, ordering system, and responsive design for all devices.",
    image: "/projects/project3.jpg",
    tags: ["JavaScript", "CSS", "HTML"],
    category: "web",
    github: "https://github.com/Chayananz/restaurant-app",
    live: "https://restaurant-app-two-lovat.vercel.app",
  },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Update active nav based on scroll position
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skill bar animation on scroll
  useEffect(() => {
    if (!skillsRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  // Section slide-in on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("[data-slide]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [loading]);

  // Particle effect
  useEffect(() => {
    const canvas = document.getElementById(
      "particles-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108, 92, 231, 0.4)";
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108, 92, 231, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = useCallback((href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setMenuOpen(false);
  }, []);

  if (loading) {
    return (
      <div className="cyber-loading">
        <div className="cyber-loader"></div>
      </div>
    );
  }

  return (
    <div className="cyber-body">
      <canvas id="particles-canvas" className="particles-bg"></canvas>

      {/* Header */}
      <header className={`cyber-header ${scrolled ? "scrolled" : ""}`}>
        <div className="cyber-logo">
          DEV<span>PORTFOLIO</span>
        </div>
        <nav className="cyber-nav-desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeNav === link.href ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                    setActiveNav(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cyber-nav-buttons">
          <a href="/resume.pdf" target="_blank" className="cyber-btn cyber-btn-outline">
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
        <button
          className="cyber-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
        {menuOpen && (
          <div className="cyber-mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                  setActiveNav(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="cyber-hero" id="home">
        <div className="cyber-hero-content">
          <h1>
            Hi, I&apos;m <span>Chayanan Pathumarak</span>
            <br />
            Web Developer
          </h1>
          <p>
            CS Student | Web Developer | AI Enthusiast — Focusing on building
            efficient, automated, and user-centric applications
          </p>
          <div className="cyber-hero-buttons">
            <a
              href="#portfolio"
              className="cyber-btn cyber-btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#portfolio");
              }}
            >
              <i className="fas fa-briefcase"></i> View My Work
            </a>
            <a
              href="#contact"
              className="cyber-btn cyber-btn-outline"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
            >
              <i className="fas fa-envelope"></i> Get In Touch
            </a>
          </div>
          <div className="cyber-social-links">
            <a
              href="https://github.com/Chayananz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/chayanan-pathumrak-6865b33a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:chayananpath.work@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" data-slide className="slide-from-left">
        <div className="cyber-section-title">
          <h2>About Me</h2>
          <p>Get to know more about my journey and expertise</p>
        </div>
        <div className="cyber-about-content">
          <div className="cyber-about-text">
            <h3>CS Student &amp; Problem Solver</h3>
            <p>
              I&apos;m a Computer Science student from Thailand passionate about
              web development and artificial intelligence. I focus on building
              efficient, automated, and user-centric applications that solve
              real-world problems.
            </p>
            <p>
              My journey in tech started with curiosity about how websites work.
              Since then, I&apos;ve built full-stack applications, explored AI
              technologies, and continuously push myself to learn new
              frameworks and tools.
            </p>

            <div className="cyber-skills" ref={skillsRef}>
              {skills.map((skill) => (
                <div key={skill.name} className="cyber-skill-item">
                  <h4>{skill.name}</h4>
                  <div className="cyber-skill-bar">
                    <div
                      className="cyber-skill-progress"
                      style={{
                        width: skillsAnimated ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cyber-about-image">
            <Image
              src="/profile.jpg"
              alt="Chayanan Pathumarak"
              width={500}
              height={500}
              className="cyber-profile-img"
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="cyber-portfolio-section slide-from-right" data-slide>
        <div className="cyber-section-title">
          <h2>My Portfolio</h2>
          <p>Check out some of my recent projects</p>
        </div>
        <div className="cyber-portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="cyber-portfolio-item">
              <div className="cyber-portfolio-img">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={350}
                  className="cyber-project-image"
                />
              </div>
              <div className="cyber-portfolio-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="cyber-portfolio-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="cyber-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="cyber-portfolio-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn cyber-btn-outline cyber-btn-sm"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn cyber-btn-primary cyber-btn-sm"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-slide className="slide-from-left">
        <div className="cyber-section-title">
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let&apos;s work together!</p>
        </div>
        <div className="cyber-contact-container">
          <div className="cyber-contact-info">
            <a
              href="mailto:chayananpath.work@gmail.com"
              className="cyber-contact-card"
            >
              <div className="cyber-contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>chayananpath.work@gmail.com</p>
              </div>
            </a>
            <a
              href="https://github.com/Chayananz"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-contact-card"
            >
              <div className="cyber-contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div>
                <h3>GitHub</h3>
                <p>github.com/Chayananz</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/chayanan-pathumrak-6865b33a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-contact-card"
            >
              <div className="cyber-contact-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div>
                <h3>LinkedIn</h3>
                <p>Chayanan Pathumarak</p>
              </div>
            </a>
            <div className="cyber-contact-card">
              <div className="cyber-contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Location</h3>
                <p>Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cyber-footer slide-from-bottom" data-slide>
        <div className="cyber-footer-content">
          <div className="cyber-footer-section">
            <h3>DEVPORTFOLIO</h3>
            <p>
              Building efficient, automated, and user-centric applications.
              Let&apos;s build something amazing together!
            </p>
            <div className="cyber-footer-socials">
              <a
                href="https://github.com/Chayananz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/chayanan-pathumrak-6865b33a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:chayananpath.work@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="cyber-footer-section">
            <h3>Quick Links</h3>
            <div className="cyber-footer-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                >
                  <i className="fas fa-chevron-right"></i> {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="cyber-footer-section">
            <h3>Tech Stack</h3>
            <div className="cyber-footer-links">
              <span>Next.js / React</span>
              <span>TypeScript / JavaScript</span>
              <span>Tailwind CSS / Node.js</span>
              <span>Python / MongoDB</span>
            </div>
          </div>
        </div>
        <div className="cyber-copyright">
          <p>
            &copy; {new Date().getFullYear()} Chayanan Pathumarak. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

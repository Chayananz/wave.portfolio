"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Skills data
const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Vercel", "MongoDB"],
  },
];

// Projects data
const projects = [
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    tech: "Next.js • TypeScript • Stripe",
    description:
      "A full-stack e-commerce platform with product management, shopping cart, payment integration, and order tracking.",
    github: "https://github.com/Chayananz/Project_E-Commerce",
    live: "https://e-commerce-store-six-ashen.vercel.app",
  },
  {
    id: "restaurant",
    name: "Restaurant App",
    tech: "JavaScript • CSS • HTML",
    description:
      "A restaurant web application featuring menu browsing, ordering system, and responsive design for all devices.",
    github: "https://github.com/Chayananz/restaurant-app",
    live: "https://restaurant-app-two-lovat.vercel.app",
  },
];

export default function Home() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    if (!starsContainer) return;
    const starCount = 120;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.setProperty("--duration", `${Math.random() * 4 + 3}s`);
      star.style.setProperty("--delay", `${Math.random() * 5}s`);

      fragment.appendChild(star);
    }
    starsContainer.appendChild(fragment);

    let shootingStarTimeout: ReturnType<typeof setTimeout>;
    function createShootingStar() {
      const star = document.createElement("div");
      star.classList.add("shooting-star");

      const startX = Math.random() * 80 + 10;
      const startY = Math.random() * 40;
      star.style.left = `${startX}%`;
      star.style.top = `${startY}%`;

      document.body.appendChild(star);

      const duration = Math.random() * 800 + 600;
      const endX =
        startX + (Math.random() * 25 + 15) * (Math.random() > 0.5 ? 1 : -1);
      const endY = startY + (Math.random() * 25 + 15);

      star.animate(
        [
          { left: `${startX}%`, top: `${startY}%`, opacity: 0 },
          { opacity: 0.8, offset: 0.3 },
          { left: `${endX}%`, top: `${endY}%`, opacity: 0 },
        ],
        { duration, easing: "cubic-bezier(0.2, 0, 0.8, 1)" }
      );

      setTimeout(() => star.remove(), duration);

      shootingStarTimeout = setTimeout(
        createShootingStar,
        Math.random() * 8000 + 4000
      );
    }

    const initialTimeout = setTimeout(createShootingStar, 3000);

    return () => {
      clearTimeout(shootingStarTimeout);
      clearTimeout(initialTimeout);
      if (starsContainer) starsContainer.innerHTML = "";
    };
  }, []);

  const handlePlanetClick = useCallback(
    (panel: string) => {
      if (panel === "resume") {
        window.open("/resume.pdf", "_blank");
        return;
      }
      setActivePanel(panel);
    },
    []
  );

  return (
    <div className="cosmic-body">
      <div className="stars" id="stars"></div>

      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      <div className="cosmic-header">
        <h1>Chayanan Pathumarak</h1>
        <p className="cosmic-subtitle">Portfolio</p>
        <p>
          CS Student | Web Developer | AI Enthusiast — Focusing on building
          efficient, automated, and user-centric applications
        </p>
      </div>

      {/* Planet 1 - E-Commerce */}
      <div
        className="planet planet-1"
        onClick={() => handlePlanetClick("ecommerce")}
      >
        <div className="planet-content">
          E-Commerce
          <br />
          <small>Click to explore</small>
        </div>
      </div>

      {/* Planet 2 - Restaurant App */}
      <div
        className="planet planet-2"
        onClick={() => handlePlanetClick("restaurant")}
      >
        <div className="planet-content">
          Restaurant
          <br />
          <small>Click to explore</small>
        </div>
      </div>

      {/* Planet 3 - Skills (center, purple) */}
      <div
        className="planet planet-3"
        onClick={() => handlePlanetClick("skills")}
      >
        <div className="planet-content">
          Skills
          <br />
          <small>Click to explore</small>
        </div>
      </div>

      {/* Planet 4 - About Me */}
      <div
        className="planet planet-4"
        onClick={() => handlePlanetClick("about")}
      >
        <div className="planet-content">
          About Me
          <br />
          <small>Click to explore</small>
        </div>
      </div>

      {/* Planet 5 - Contact */}
      <div
        className="planet planet-5"
        onClick={() => handlePlanetClick("contact")}
      >
        <div className="planet-content">
          Contact
          <br />
          <small>Click to explore</small>
        </div>
      </div>

      {/* Planet 6 - Resume */}
      <div
        className="planet planet-6"
        onClick={() => handlePlanetClick("resume")}
      >
        <div className="planet-content">
          Resume
          <br />
          <small>Download CV</small>
        </div>
      </div>

      {/* ===== MODALS ===== */}

      {/* E-Commerce Modal */}
      {activePanel === "ecommerce" && (
        <div
          className="cosmic-modal-overlay"
          onClick={() => setActivePanel(null)}
        >
          <div className="cosmic-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cosmic-modal-close"
              onClick={() => setActivePanel(null)}
            >
              &times;
            </button>
            <h2 className="cosmic-modal-title">E-Commerce Platform</h2>
            <div className="cosmic-modal-preview">
              <Image
                src="/projects/project1.jpg"
                alt="E-Commerce Platform Preview"
                width={620}
                height={350}
                className="cosmic-preview-img"
              />
            </div>
            <p className="cosmic-modal-tech">
              Next.js &bull; TypeScript &bull; Stripe
            </p>
            <p className="cosmic-modal-desc">{projects[0].description}</p>
            <div className="cosmic-modal-links">
              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-btn"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <a
                href={projects[0].live}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-btn cosmic-btn-live"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Restaurant Modal */}
      {activePanel === "restaurant" && (
        <div
          className="cosmic-modal-overlay"
          onClick={() => setActivePanel(null)}
        >
          <div className="cosmic-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cosmic-modal-close"
              onClick={() => setActivePanel(null)}
            >
              &times;
            </button>
            <h2 className="cosmic-modal-title">Restaurant App</h2>
            <div className="cosmic-modal-preview">
              <Image
                src="/projects/project3.jpg"
                alt="Restaurant App Preview"
                width={620}
                height={350}
                className="cosmic-preview-img"
              />
            </div>
            <p className="cosmic-modal-tech">
              JavaScript &bull; CSS &bull; HTML
            </p>
            <p className="cosmic-modal-desc">{projects[1].description}</p>
            <div className="cosmic-modal-links">
              <a
                href={projects[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-btn"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <a
                href={projects[1].live}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-btn cosmic-btn-live"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Skills Modal */}
      {activePanel === "skills" && (
        <div
          className="cosmic-modal-overlay"
          onClick={() => setActivePanel(null)}
        >
          <div className="cosmic-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cosmic-modal-close"
              onClick={() => setActivePanel(null)}
            >
              &times;
            </button>
            <h2 className="cosmic-modal-title">Skills &amp; Languages</h2>
            <div className="cosmic-modal-grid">
              {skillCategories.map((category) => (
                <div key={category.title} className="cosmic-skill-card">
                  <h3 className="cosmic-skill-title">{category.title}</h3>
                  <div className="cosmic-skill-tags">
                    {category.skills.map((skill) => (
                      <span key={skill} className="cosmic-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Me Modal */}
      {activePanel === "about" && (
        <div
          className="cosmic-modal-overlay"
          onClick={() => setActivePanel(null)}
        >
          <div className="cosmic-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cosmic-modal-close"
              onClick={() => setActivePanel(null)}
            >
              &times;
            </button>
            <h2 className="cosmic-modal-title">About Me</h2>
            <div className="cosmic-about-content">
              <div className="cosmic-about-avatar">CP</div>
              <h3 className="cosmic-about-name">Chayanan Pathumarak</h3>
              <p className="cosmic-about-role">
                CS Student &bull; Web Developer &bull; AI Enthusiast
              </p>
              <p className="cosmic-modal-desc">
                I&apos;m a Computer Science student from Thailand passionate
                about web development and artificial intelligence. I focus on
                building efficient, automated, and user-centric applications
                that solve real-world problems.
              </p>
              <div className="cosmic-about-stats">
                <div className="cosmic-stat">
                  <span className="cosmic-stat-number">2+</span>
                  <span className="cosmic-stat-label">Projects</span>
                </div>
                <div className="cosmic-stat">
                  <span className="cosmic-stat-number">5+</span>
                  <span className="cosmic-stat-label">Technologies</span>
                </div>
                <div className="cosmic-stat">
                  <span className="cosmic-stat-number">TH</span>
                  <span className="cosmic-stat-label">Thailand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activePanel === "contact" && (
        <div
          className="cosmic-modal-overlay"
          onClick={() => setActivePanel(null)}
        >
          <div className="cosmic-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cosmic-modal-close"
              onClick={() => setActivePanel(null)}
            >
              &times;
            </button>
            <h2 className="cosmic-modal-title">Get in Touch</h2>
            <div className="cosmic-contact-list">
              <a
                href="mailto:chayananpath.work@gmail.com"
                className="cosmic-contact-item"
              >
                <div className="cosmic-contact-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="cosmic-contact-label">Email</p>
                  <p className="cosmic-contact-value">
                    chayananpath.work@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Chayananz"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-contact-item"
              >
                <div className="cosmic-contact-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="cosmic-contact-label">GitHub</p>
                  <p className="cosmic-contact-value">github.com/Chayananz</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/chayanan-pathumrak-6865b33a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-contact-item"
              >
                <div className="cosmic-contact-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="cosmic-contact-label">LinkedIn</p>
                  <p className="cosmic-contact-value">Chayanan Pathumarak</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="cosmic-footer">
        <p>
          Crafted with stardust and code by{" "}
          <a href="https://github.com/Chayananz" target="_blank" rel="noopener noreferrer">
            Chayanan Pathumarak
          </a>{" "}
          &bull; Journey through the digital universe
        </p>
      </div>
    </div>
  );
}

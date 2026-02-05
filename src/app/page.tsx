"use client";

import { useEffect, useState } from "react";

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

export default function Home() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    if (!starsContainer) return;
    const starCount = 350;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
      star.style.setProperty("--delay", `${Math.random() * 5}s`);

      if (Math.random() > 0.7) {
        star.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        star.style.boxShadow = "0 0 8px 1px rgba(255, 255, 255, 0.8)";
      }

      starsContainer.appendChild(star);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.querySelectorAll<HTMLElement>(".planet").forEach((planet) => {
        const speed = parseFloat(
          planet.style.getPropertyValue("--parallax-speed") || "0.03"
        );
        const planetRect = planet.getBoundingClientRect();
        const planetX =
          ((planetRect.left + planetRect.width / 2) / window.innerWidth) * 100;
        const planetY =
          ((planetRect.top + planetRect.height / 2) / window.innerHeight) * 100;

        const diffX = (x - planetX) * speed;
        const diffY = (y - planetY) * speed;

        planet.style.transform = `translate(${diffX}px, ${diffY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    let shootingStarTimeout: ReturnType<typeof setTimeout>;
    function createShootingStar() {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.width = "2px";
      star.style.height = "2px";
      star.style.backgroundColor = "white";
      star.style.boxShadow = "0 0 10px 2px rgba(255, 255, 255, 0.8)";
      star.style.position = "fixed";
      star.style.zIndex = "5";
      star.style.borderRadius = "0";
      star.style.transform = "rotate(-45deg)";

      const startX = Math.random() * 100;
      const startY = Math.random() * 50;
      star.style.left = `${startX}%`;
      star.style.top = `${startY}%`;

      document.body.appendChild(star);

      const duration = Math.random() * 1 + 0.5;
      const endX =
        startX +
        (Math.random() * 30 + 20) * (Math.random() > 0.5 ? 1 : -1);
      const endY = startY + (Math.random() * 30 + 20);

      star.animate(
        [
          { left: `${startX}%`, top: `${startY}%`, opacity: 0 },
          { opacity: 1 },
          { left: `${endX}%`, top: `${endY}%`, opacity: 0 },
        ],
        {
          duration: duration * 1000,
          easing: "cubic-bezier(0.2, 0, 0.8, 1)",
        }
      );

      setTimeout(() => {
        star.remove();
      }, duration * 1000);

      shootingStarTimeout = setTimeout(
        createShootingStar,
        Math.random() * 5000 + 2000
      );
    }

    const initialTimeout = setTimeout(createShootingStar, 2000);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(shootingStarTimeout);
      clearTimeout(initialTimeout);
      if (starsContainer) starsContainer.innerHTML = "";
    };
  }, []);

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
      <div className="planet planet-1">
        <div className="planet-content">
          E-Commerce Platform
          <br />
          <small>Next.js &bull; TypeScript &bull; Stripe</small>
        </div>
      </div>

      {/* Planet 2 - Restaurant App */}
      <div className="planet planet-2">
        <div className="planet-content">
          Restaurant App
          <br />
          <small>JavaScript &bull; CSS &bull; HTML</small>
        </div>
      </div>

      {/* Planet 3 - Skills (center, purple) */}
      <div
        className="planet planet-3"
        onClick={() => setActivePanel("skills")}
      >
        <div className="planet-content">
          Skills &amp; Languages
          <br />
          <small>Click to explore</small>
        </div>
      </div>

      {/* Planet 4 - About Me */}
      <div className="planet planet-4">
        <div className="planet-content">
          About Me
          <br />
          <small>Developer &bull; Thailand</small>
        </div>
      </div>

      {/* Planet 5 - Contact */}
      <div className="planet planet-5">
        <div className="planet-content">
          Contact
          <br />
          <small>Get in touch</small>
        </div>
      </div>

      {/* Planet 6 - Resume */}
      <div className="planet planet-6">
        <div className="planet-content">
          Resume
          <br />
          <small>Download CV</small>
        </div>
      </div>

      {/* Skills Modal */}
      {activePanel === "skills" && (
        <div className="cosmic-modal-overlay" onClick={() => setActivePanel(null)}>
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

      <div className="cosmic-footer">
        <p>
          Crafted with stardust and code by{" "}
          <a href="#">Chayanan Pathumarak</a> &bull; Journey through the digital
          universe
        </p>
      </div>
    </div>
  );
}

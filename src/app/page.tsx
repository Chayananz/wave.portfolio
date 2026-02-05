"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create stars dynamically
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

    // Add subtle parallax effect on mouse move
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

    // Add shooting stars occasionally
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
        <h1>COSMIC PORTFOLIO</h1>
        <p>
          Explore my universe of projects. Each planet represents a unique
          creation waiting to be discovered.
        </p>
      </div>

      <div className="planet planet-1">
        <div className="planet-content">
          Stellar E-Commerce Platform
          <br />
          <small>React &bull; Node.js &bull; MongoDB</small>
        </div>
      </div>

      <div className="planet planet-2">
        <div className="planet-content">
          Nebula Analytics Dashboard
          <br />
          <small>Vue.js &bull; D3.js &bull; Firebase</small>
        </div>
      </div>

      <div className="planet planet-3">
        <div className="planet-content">
          Galaxy Social Network
          <br />
          <small>Angular &bull; GraphQL &bull; AWS</small>
        </div>
      </div>

      <div className="planet planet-4">
        <div className="planet-content">
          Orbit Task Manager
          <br />
          <small>Svelte &bull; TypeScript &bull; PostgreSQL</small>
        </div>
      </div>

      <div className="planet planet-5">
        <div className="planet-content">
          Aurora Design System
          <br />
          <small>Figma &bull; Storybook &bull; CSS-in-JS</small>
        </div>
      </div>

      <div className="planet planet-6">
        <div className="planet-content">
          Comet Real-time Chat
          <br />
          <small>React Native &bull; WebSockets &bull; Redis</small>
        </div>
      </div>

      <div className="cosmic-footer">
        <p>
          Crafted with stardust and code by{" "}
          <a href="#">Alex Cosmos</a> &bull; Journey through the digital
          universe
        </p>
      </div>
    </div>
  );
}

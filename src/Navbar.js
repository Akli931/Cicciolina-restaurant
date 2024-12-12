import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navigation-bar">
      {/* Logo amélioré */}
      <div className="nav-logo">
  <Link to="/">
    <img src="/logo3.png" alt="Cicciolina Logo" className="logo-img" />
  </Link>
</div>


      {/* Menu burger pour mobile */}
      <div
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Liens de navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/menu" className="nav-link" onClick={() => setMenuOpen(false)}>
          Carte
        </Link>
        <Link to="/reservations" className="nav-link" onClick={() => setMenuOpen(false)}>
          Réservation
        </Link>
        <a href="tel:+33123456789" className="nav-button" onClick={() => setMenuOpen(false)}>
          07 51 51 06 00
        </a>
      </nav>
    </header>
  );
};

export default NavigationBar;

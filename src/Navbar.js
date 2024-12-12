import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo3.png"; // Chemin relatif vers le logo
import "./styles/index.css"; // Chemin relatif vers le fichier CSS

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Effet pour ajouter la classe 'scrolled' lors du défilement
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
      {/* Logo */}
      <div className="nav-logo">
      <img src={logo} alt="Cicciolina Logo" className="logo-img" />
  <span className="logo-text">Cicciolina</span>
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
        <a href="tel:+33751510600" className="nav-button" onClick={() => setMenuOpen(false)}>
          07 51 51 06 00
        </a>
      </nav>
    </header>
  );
};

export default NavigationBar;


import React, { useState } from "react";
import { menuData } from "./MenuData";
import "./styles/index.css";



const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  return (
    <div className="menu-container">
      {/* Titre principal */}
      <h1 className="menu-title">Notre Carte</h1>

      {/* Bouton pour ouvrir ou télécharger le PDF */}
      <div className="menu-pdf-section">
        <a
      href={`${process.env.PUBLIC_URL}/PORTEMENU_CICCIOLINA.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      className="menu-pdf-button"
        >
          Voir la Carte Complète (PDF)
        </a>
      </div>

      {/* Navigation des catégories */}
      <div className="menu-categories">
        {menuData.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category.category)}
            className={`menu-category-button ${
              activeCategory === category.category ? "active" : ""
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Liste des plats */}
      <div className="menu-items">
        {menuData
          .filter((category) => category.category === activeCategory)
          .flatMap((category) =>
            category.items.map((item, i) => (
              <div key={i} className="menu-item">
                <div className="menu-item-name">{item.name}</div>
                <div className="menu-item-description">{item.description}</div>
                <div className="menu-item-price">{item.price}</div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default Menu;

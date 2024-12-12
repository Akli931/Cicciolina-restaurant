import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/index.css"; // Chemin relatif vers le fichier CSS

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section d'accueil */}
      <div className="home-container">
        <div className="home-content">
          <h1>Bienvenue à Cicciolina</h1>
          <p>
            Découvrez une expérience culinaire italienne raffinée au cœur de
            notre restaurant. Savourez des plats authentiques préparés avec
            amour.
          </p>
          <button
            className="reserve-button"
            onClick={() => navigate("/reservations")}
          >
            Réserver une table
          </button>
        </div>
      </div>

      {/* Transition fluide */}
      <div className="section-transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#013220"
            d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,165.3C672,160,768,96,864,64C960,32,1056,32,1152,53.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Section Google Maps */}
      <div className="map-container">
        <iframe
          title="Cicciolina Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7241889469424!2d2.3462741756151226!3d48.86346960035013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f4815202319%3A0x5962dbc7ec4b11e0!2sCicciolina!5e0!3m2!1sfr!2sfr!4v1733504549827!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style={{
            border: "0",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Section footer */}
      <footer>
        <p>Adresse :   21 Rue Pierre Lescot, 75001 Paris</p>
      </footer>
    </div>
  );
};

export default Home;

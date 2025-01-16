import React from "react";

const Reservations = () => {
  return (
    <div className="reservation-container">
      <div className="reservation-box">
        <h1>Réservez chez Cicciolina</h1>
        <a
          href="https://prvt.re/koxiOL"
          target="_blank"
          rel="noopener noreferrer"
          className="reservation-link"
        >
          Réservez dans votre restaurant
        </a>
        <a
          href="https://www.privateaser.com/lieu/48144-cicciolina"
          target="_blank"
          rel="noopener noreferrer"
          className="reservation-link"
        >
          Privatisez votre restaurant
        </a>
        <div className="contact-info">
          Pour plus d'informations, contactez-nous au :{" "}
          <span>0974641086</span>
        </div>
      </div>
    </div>
  );
};

export default Reservations;

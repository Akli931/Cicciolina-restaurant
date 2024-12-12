import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Reservations = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleReservation = (e) => {
    e.preventDefault();

    const isValidPhone = /^\d{10}$/.test(phone);
    if (!isValidPhone) {
      alert("Veuillez entrer un numéro de téléphone valide à 10 chiffres.");
      return;
    }

    if (guests <= 0) {
      alert("Veuillez entrer un nombre de personnes valide (minimum 1).");
      return;
    }

    const templateParams = {
      to_name: "Propriétaire du restaurant",
      from_name: name,
      phone: phone,
      guests: guests,
      date: date,
    };

    emailjs
      .send(
        "service_d3yntr5",    // Service ID
        "template_p6itorq",   // Template ID
        templateParams,
        "pHTU8fzH-CcafjEOu"   // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Votre réservation a bien été envoyée !");
          setName("");
          setPhone("");
          setGuests("");
          setDate("");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Erreur lors de l'envoi de la réservation. Réessayez.");
        }
      );
  };

  return (
    <div className="reservation-container">
      <div className="reservation-box">
        <h1>Réservez votre table</h1>
        <form onSubmit={handleReservation}>
          <div className="form-group">
            <label>Nom :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className="form-group">
            <label>Téléphone :</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Entrez votre numéro"
              required
            />
          </div>
          <div className="form-group">
            <label>Nombre de personnes :</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Nombre de personnes"
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label>Date et heure :</label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Réserver</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Reservations;

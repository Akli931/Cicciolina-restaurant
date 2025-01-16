import React from "react";
import "./styles/index.css";

const MentionsLegales = () => {
  return (
    <div className="mentions-container">
      <h1>Mentions légales</h1>
      
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>Cicciolina</strong> est édité par : <br />
        <strong>MANSOUR Yuba</strong> <br />
        Adresse : 21 Rue Pierre Lescot, 75001 Paris <br />
        Téléphone : 09 74 64 10 86 <br />
        Adresse e-mail : occio75001@gmail.fr <br />
        SIRET : 91898762900014 <br />
        RCS : Paris
      </p>

      <h2>Hébergeur</h2>
      <p>
        Le site est hébergé par : <br />
        <strong>[Nom de l'hébergeur]</strong> <br />
        Adresse : [Adresse complète de l'hébergeur] <br />
        Téléphone : [Téléphone de l'hébergeur] <br />
        Site web : <a href="[URL de l'hébergeur]" target="_blank" rel="noopener noreferrer">[URL de l'hébergeur]</a>
      </p>

      <h2>Responsabilité</h2>
      <p>
        L'éditeur du site (le restaurant Cicciolina) est responsable du contenu publié sur ce site. <br />
        Le développeur du site n'est pas responsable du contenu publié ni des données collectées.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Tous les contenus présents sur ce site (textes, images, vidéos, logos, etc.) sont la propriété exclusive du restaurant Cicciolina, sauf indication contraire. <br />
        Toute reproduction, distribution, modification ou utilisation, même partielle, est interdite sans autorisation préalable.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Ce site ne collecte pas directement de données personnelles. Les réservations sont redirigées vers un service tiers "privateaser" responsable de la collecte et du traitement des données personnelles. <br />
        Conformément au RGPD (Règlement Général sur la Protection des Données), pour toute question concernant vos données, veuillez vous adresser directement au service de réservation tiers.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site n'utilise pas de cookies pour collecter des données personnelles. Si des outils de suivi sont ajoutés à l'avenir, une bannière de consentement sera mise en place.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question ou réclamation, veuillez nous contacter : <br />
        E-mail : occio75001@gmail.fr <br />
        Téléphone : 09 74 64 10 86
      </p>
    </div>
  );
};

export default MentionsLegales;

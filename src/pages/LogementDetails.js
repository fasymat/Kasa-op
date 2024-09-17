import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import cardsData from "../logements.json";

const LogementDetails = () => {
  const { id } = useParams();
  const logement = cardsData.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement not found</div>;
  }
  //renvoyer a la page si pas bon id
  return (
    <div className="content">
      <Navigation />
      <div className="logement-details">
        <img
          className="img-logement"
          src={logement.cover}
          alt={logement.title}
        />
        <h1>{logement.title}</h1>
        <p>Location: {logement.location}</p>
        <p>Host: {logement.host.name}</p>
        <img className="host-picture" src={logement.host.picture} />
        <p>Rating: {logement.rating}</p>
        <h2>Description</h2>
        <p>{logement.description}</p>
        <h2>Equipments</h2>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
        {/* Add more details as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default LogementDetails;

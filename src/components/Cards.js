import React from "react";
import { Link } from "react-router-dom";
import cardsData from "../logements.json";

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <Link to={`/logement/${card.id}`} key={card.id} className="card-link">
          <div className="card">
            <div className="card-image">
              <img src={card.cover} alt={card.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import cardsData from "../logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, farStar } from "@fortawesome/free-solid-svg-icons";
import DropdownList from "../components/DropdownList";
import Error404 from "../pages/Error404";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const LogementDetails = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const logement = cardsData[cardsData.findIndex((item) => item.id === id)];

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  if (!logement) {
    return <Error404 />;
  }
  //renvoyer a la page si pas bon id
  return (
    <div className="content">
      <Navigation />
      <div className="logement-details">
        <div className="img-logement">
          <img
            className="img-logement"
            src={logement.pictures[currentIndex]}
            alt={logement.title}
          />
          <button className="prev-btn" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="next-btn" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="logement-info">
          <div className="logement-title">
            <h1 className="logement-name">{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div className="tags-container">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="host-rating">
            <div className="host-info">
              <p className="host-name">
                {logement.host.name.split(" ").map((namePart, index) => (
                  <span key={index}>
                    {namePart}
                    <br />
                  </span>
                ))}
              </p>
              <img className="host-picture" src={logement.host.picture} />
            </div>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={index < logement.rating ? faStar : faStar}
                  color={index < logement.rating ? "#FF6060" : "lightgray"}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="dropdown-container-logement">
          <DropdownList title="Description" content={logement.description} />
          <DropdownList title="Equipements" content={logement.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogementDetails;

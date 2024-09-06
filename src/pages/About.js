import React from "react";
import Navigation from "../components/Navigation";
import BannerAbout from "../components/BannerAbout";
import DropdownList from "../components/DropdownList";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Navigation />
      <BannerAbout />
      <div className="dropdown-container">
        <DropdownList
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <DropdownList
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <DropdownList
          title="Service"
          content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interactions, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et bienveillance"
        />
        <DropdownList
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;

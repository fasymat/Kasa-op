import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
        );
        setCardsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <div className="card-image" style={{ backgroundColor: card.color }}>
            {/* Add image or other content here */}
          </div>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

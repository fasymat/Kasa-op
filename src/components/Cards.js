import cardsData from "../logements.json";

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <div className="card-image">
            <img src={card.cover} alt={card.title} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

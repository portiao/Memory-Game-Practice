import React from "react";
import "./SingleCard.css";

function SingleCard(props) {
    const {card}=props;
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/images/cover.png" alt="card back" />
      </div>
    </div>
  );
}

export default SingleCard;

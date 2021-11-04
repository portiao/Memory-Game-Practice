import React from "react";
import "./SingleCard.css";

function SingleCard(props) {
  const { card, handleChoice } = props;

  const handleClick = () =>{
    handleChoice(card);
  }


  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/images/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default SingleCard;

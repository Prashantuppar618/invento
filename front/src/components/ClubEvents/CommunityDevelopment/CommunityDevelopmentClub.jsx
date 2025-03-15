import React from "react";
import { Link } from "react-router-dom";
import "./CommunityDevelopmentClub.css"; // Ensure CSS file is imported

const Cards = () => {
  const cardNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="club-page">
      <div className="cards">
      {cardNumbers.map((num) => (
        <div className="card" key={num}>
          <Link to={`/page/${num}`}>
            <div className="card-face">
              <div className="card-label">{num}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;

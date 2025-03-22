import React, { useState } from "react";
import "./ML_Cultural.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/CulturalClub-events/Symphonica-(Unplugged)",
  "12.png": "/CulturalClub-events/Solo-Instrumental-Non-Percussion",
  "11.png": "/CulturalClub-events/Solo-Instrumental-Percussion",
  "10.png": "/cultural-club",
  "9.png": "/CulturalClub-events/Solo-Singing-IndianClassical",
  "8.png": "/CulturalClub-events/Solo-Singing-Western",
  "7.png": "/CulturalClub-events/Solo-Singing-Eastern",
  "6.png": "/cultural-club",
  "5.png": "/CulturalClub-events/Carnival-Cadence-(GroupDance)",
  "4.png": "/CulturalClub-events/The-Shadow-Waltz-(DuetDance)",
  "3.png": "/cultural-club",
  "2.png": "/CulturalClub-events/Tala-Tarang:Classical(SoloDance-Classical)",
  "1.png": "/CulturalClub-events/Celestial-Cypher:Western-(SoloDance-Showdown)",
};

const ML_Cultural = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (image) => {
    window.location.href = eventLinks[image]; // Redirect on click
  };

  return (
    <div 
      className={`club-container ${cardImages.length < 4 ? "center-events" : ""} ${isHovered ? "hovered" : "stacked"}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardImages.map((image, index) => (
        <div 
          key={index} 
          className="club-item"
          onClick={() => handleClick(image)}
          style={{ cursor: "pointer", transform: isHovered ? `translateX(${index * 10}px)` : "none" }}
        >
          <div className="club-image">
            <img src={`/Cultural/${image}`} alt={`Event ${image}`} />
          </div>
        </div>
      ))}
      {isHovered && (
        <p className="hold-note">Click the correct card to proceed!</p>
      )}
    </div>
  );
};

export default ML_Cultural;

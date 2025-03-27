import React, { useState, useRef, useEffect } from "react";
import "../ClubEvents/css/DL_Common.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

const DL_Common = ({ eventLinks, Club }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleCardClick = (image) => {
    if (activeCard === image) {
      // If the card is already active, proceed with redirection
      window.location.href = eventLinks[image];
    } else {
      // Set the clicked card as active
      setActiveCard(image);
    }
  };
  

  // Optional: Reset active card if the user clicks outside the container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveCard(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dl-cardCon">
      <div
        ref={containerRef}
        className="dl-stack-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardImages.map((image, index) => (
          <div
            className={`dl-stack-card ${activeCard === image ? "active" : ""}`}
            key={image} // Use the image filename as a unique key
            style={{
              "--i": index - 6,
              transition: "transform 0.3s ease, opacity 0.3s ease"
            }}
            onClick={() => handleCardClick(image)}
          >
            <img src={`/${Club}/${image}`} alt={`Card ${image}`} />
          </div>
        ))}
      </div>

      <div className="dl-hold-note">
        {isHovered && !activeCard && (
          <p>Tap once to select a card. Tap it again to proceed!</p>
        )}
      </div>

      {activeCard && (
        <div className="dl-back-button-container">
          <button 
            style={{
              padding: "10px 20px",
              fontSize: "24px",
              border: "none",
              backgroundColor: "#3498db",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            onClick={() => setActiveCard(null)}
          >
            Return Card to Deck
          </button>
        </div>
      )}
    </div>
  );
};

export default DL_Common;

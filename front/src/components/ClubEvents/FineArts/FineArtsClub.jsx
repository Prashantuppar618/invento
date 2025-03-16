import React, { useState } from "react";
import "./FineArtsClub.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/fineArts-club",
  "12.png": "/fineArts-club",
  "11.png": "/FineArts-events/Revelry-of-Warriors–Where-Fashion-Meets-Valor,and-Style-Meets-Strength!",
  "10.png": "/fineArts-club",
  "9.png": "/FineArts-events/The-Grand-Masquerade–Unmask-Your-Style,Steal-the-Spotlight!",
  "8.png": "/fineArts-club",
  "7.png": "/fineArts-club",
  "6.png": "/FineArts-events/Juton-Ka-Jalwa–Step-Into-Art,Walk-With-Creativity!",
  "5.png": "/fineArts-club",
  "4.png": "/FineArts-events/Chitrakar-Mela–Where-Every-Stroke-Tells-a-Story!",
  "3.png": "/fineArts-club",
  "2.png": "/FineArts-events/Rangilo-Matka–Where-Colors-Meet-Clay,Creativity-Takes-Flight!",
  "1.png": "/fineArts-club",
};

const PlayingCards = () => {
  const [holdTimer, setHoldTimer] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (image) => {
    const timer = setTimeout(() => {
      window.location.href = eventLinks[image]; // Redirect after 2s hold
    }, 2000);
    setHoldTimer(timer);
  };

  const handleMouseUp = () => {
    if (holdTimer) {
      clearTimeout(holdTimer); // Cancel redirection if released early
    }
  };

  return (
    <div 
      className="stack-container" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardImages.map((image, index) => (
        <div
          className="stack-card"
          key={index}
          style={{ "--i": index - 6 }}
          onMouseDown={() => handleMouseDown(image)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Ensure cancellation when moving away
        >
          <img src={`/FineArts/${image}`} alt={`Card ${image}`} />
        </div>
      ))}
      {isHovered && (
        <p className="hold-note">Click and hold the correct card to proceed!</p>
      )}
    </div>
  );
};

export default PlayingCards;

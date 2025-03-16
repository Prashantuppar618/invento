import React, { useState } from "react";
import "./HRClub.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/hr-club",
  "12.png": "/hr-club",
  "11.png": "/HumanResource-events/The-Wicked-Ad-Circus-(Ad-Mad)",
  "10.png": "/hr-club",
  "9.png": "/hr-club",
  "8.png": "/hr-club",
  "7.png": "/hr-club",
  "6.png": "/HumanResource-events/The-Jester's-Joust-(Debate)",
  "5.png": "/hr-club",
  "4.png": "/hr-club",
  "3.png": "/hr-club",
  "2.png": "/hr-club",
  "1.png": "/HumanResource-events/The-Addams-Press-(Mock-Press)",
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
          <img src={`/cards/${image}`} alt={`Card ${image}`} />
        </div>
      ))}
      {isHovered && (
        <p className="hold-note">Click and hold the correct card to proceed!</p>
      )}
    </div>
  );
};

export default PlayingCards;

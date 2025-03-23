import React, { useState } from "react";
import "../css/DL_Common.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.jpg", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/specials",
  "12.png": "/specials",
  "11.png": "/Specials/Revelry-of-Warriors–Where-Fashion-Meets-Valor,and-Style-Meets-Strength!",
  "10.png": "/specials",
  "9.png": "/specials",
  "8.png": "/specials",
  "7.png": "/specials",
  "6.png": "/Specials/The-Grand-Masquerade–Unmask-Your-Style,Steal-the-Spotlight!",
  "5.png": "/specials",
  "4.png": "/specials",
  "3.png": "/specials",
  "2.jpg": "/Specials/The-Great-Circus-Run",
  "1.png": "/specials",
};

const DL_Specials = () => {
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
    <div className="dl-cardCon">
    <div 
      className="dl-stack-container" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardImages.map((image, index) => (
        <div
          className="dl-stack-card"
          key={index}
          style={{ "--i": index - 6 }}
          onMouseDown={() => handleMouseDown(image)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Ensure cancellation when moving away
        >
          <img src={`/Specials/${image}`} alt={`Card ${image}`} />
        </div>
      ))}
    </div>

    <div className="dl-hold-note">
      {isHovered && (
        <p>Click and hold the correct card to proceed!</p>
      )}
    </div>
    </div>
  );
};

export default DL_Specials;
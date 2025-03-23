import React, { useState } from "react";
import "../css/DL_Common.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/sports-club",
  "12.png": "/sports-club",
  "11.png": "/sports-club",
  "10.png": "/sports-club",
  "9.png": "/sports-club",
  "8.png": "/sports-club",
  "7.png": "/sports-club",
  "6.png": "/sports-club",
  "5.png": "/sports-club",
  "4.png": "/sports-club",
  "3.png": "/sports-club",
  "2.png": "/sports-club",
  "1.png": "/sports-club",
};

const DL_Sports = () => {
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
                <img src={`/cards/${image}`} alt={`Card ${image}`} />
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

export default DL_Sports;

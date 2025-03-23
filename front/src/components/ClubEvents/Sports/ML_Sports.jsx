import React, { useState } from "react";
import "../css/ML_Common.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.jpg", "5.png", "4.png", "3.png", "2.png", "1.png"
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
  "6.jpg": "/Sports-events/Carnival-Survival-(Squid-Games)",
  "5.png": "/sports-club",
  "4.png": "/sports-club",
  "3.png": "/sports-club",
  "2.png": "/sports-club",
  "1.png": "/sports-club",
};

const ML_Sports = () => {
  const [holdTimer, setHoldTimer] = useState(null);
              const [isHovered, setIsHovered] = useState(false);
            
              const handleMouseDown = (image) => {
                const timer = setTimeout(() => {
                  window.location.href = eventLinks[image]; // Redirect after 2s hold
                }, 1500);
                setHoldTimer(timer);
              };
            
              const handleMouseUp = () => {
                if (holdTimer) {
                  clearTimeout(holdTimer); // Cancel redirection if released early
                }
              };
          
            return (
              <div className="ml-cardCon">
              <div 
                className="ml-stack-container" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
              >
                {cardImages.map((image, index) => (
                  <div
                    className="ml-stack-card"
                    key={index}
                    style={{ "--i": index - 6 }}
                    onMouseDown={() => handleMouseDown(image)}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} // Ensure cancellation when moving away
                  >
                    <img src={`/Sports/${image}`} alt={`Card ${image}`} />
                  </div>
                ))}
              </div>
              <div className="ml-hold-note">
                {isHovered && (
                  <p>Click and hold the correct card to proceed!</p>
                )}
              </div>
              </div>
        );
};

export default ML_Sports;

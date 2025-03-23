import React, { useState } from "react";
import "../css/DL_Common.css";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/women-empowerment-club",
  "12.png": "/women-empowerment-club",
  "11.png": "/WomenEmpowerment-events/Fireless-Cooking-Competition–(Flavors-on-Parade)",
  "10.png": "/women-empowerment-club",
  "9.png": "/women-empowerment-club",
  "8.png": "/WomenEmpowerment-events/Nukkad-Natak–(Echoes-of-the-Street)",
  "7.png": "/women-empowerment-club",
  "6.png": "/women-empowerment-club",
  "5.png": "/WomenEmpowerment-events/Face-Painting-Competition–(Carnival-Canvas)",
  "4.png": "/women-empowerment-club",
  "3.png": "/women-empowerment-club",
  "2.png": "/women-empowerment-club",
  "1.png": "/WomenEmpowerment-events/Lone-Star-Spotlight-(Mono-Acting-Competition)",
};

const DL_WEC = () => {
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
                  <img src={`/WEC/${image}`} alt={`Card ${image}`} />
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

export default DL_WEC;

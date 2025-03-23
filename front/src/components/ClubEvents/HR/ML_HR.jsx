import React, { useState } from "react";
import "../css/ML_Common.css";

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

const ML_FineArts = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (image) => {
    window.location.href = eventLinks[image]; // Redirect on click
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
          <img src={`/HR/${image}`} alt={`Card ${image}`} />
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

export default ML_FineArts;

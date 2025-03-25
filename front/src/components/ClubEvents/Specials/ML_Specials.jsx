import React, { useState } from "react";
import "../css/ML_Common.css";
import ML_Common from "../../common/ML_Common";

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

const ML_Specials = () => {
  return (
    <ML_Common eventLinks={eventLinks} Club={"Specials"} />
  );
};

export default ML_Specials;
import { useEffect } from "react";
import { gsap } from "gsap";
import leftCurtain from "../assets/left-curtain.png";
import rightCurtain from "../assets/right-curtain.png";
import Jokers from "../assets/Joker.png";
import Logo from "../assets/Logo.png";
import "../components/Banner.css";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Curtain opening animation
    tl.to(".left-curtain", { x: "-100%", duration: 2, ease: "power3.inOut" }, 0)
      .to(".right-curtain", { x: "100%", duration: 2, ease: "power3.inOut" }, 0)
      .to(".content", { opacity: 1, duration: 1, ease: "power2.inOut" }, "-=1")
      .set([".left-curtain", ".right-curtain"], { display: "none" }, "+=2");

    return () => tl.kill();
  }, []);

  return (

    <div className="banner-wrapper">
      <div className="curtain-container">
        <img src={leftCurtain} alt="Left Curtain" className="curtain left-curtain" />
        <img src={rightCurtain} alt="Right Curtain" className="curtain right-curtain" />
      </div>
      <div className="content">
        <div className="logoInv">
          <img src={Logo} className="logoImg" alt="Invento_Logo" />
        </div>
        <div className="themeAndObj">
          <div className="jokersPng">
            <img src={Jokers} alt="Carnival Joker" className="Jokers" />
          </div>
          <div className="themeDesc">
            <h2 className="theme">
              Carnival Theme Description with dates Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nemo maiores vitae a corporis quis iure sint velit debitis quaerat.
              Accusantium, voluptas aliquid tempore mollitia praesentium maxime voluptatem? Beatae, consequatur provident.
            </h2>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Banner;

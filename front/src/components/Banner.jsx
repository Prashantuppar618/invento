import { useEffect } from "react";
import { gsap } from "gsap";
import Jokers from "../assets/Joker.png";
import Logo from "../assets/Logo.png";
import "../components/Banner.css";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Curtain opening animation
    tl.to(".content", { opacity: 1, duration: 1, ease: "power2.inOut" }, "-=1");

    return () => tl.kill();
  }, []);

  return (

    <div className="banner-wrapper">

      <div className="content">
        <div className="logoInv">
          <video autoPlay loop muted className="vidBack">
            <source src="src\assets\CarnivalBack2.mp4" type="video/mp4" />
          </video>
          <img src={Logo} className="logoImg" alt="Invento_Logo" />
        </div>
        <div className="themeAndObj">
          <div className="jokersPng">
            <img src={Jokers} alt="Carnival Joker" className="Jokers" />
          </div>
          <div className="themeDesc">
            <h2 className="theme">
              Welcome to INVENTO 2025
              -‘smiles in the spotlight, secrets in the shadow ‘
              Step into a world where imagination knows no bounds! INVENTO 2025 is more than just a fest—it’s a grand spectacle of creativity, technology, and culture, woven together into an unforgettable experience. This year, we bring you "Eclipsed Carnival" a theme that explores the contrast between light and shadow, joy and mystery, tradition and innovation.

              From electrifying performances and thrilling competitions to groundbreaking innovations and immersive experiences, INVENTO 2025 promises to be a fusion of energy, passion, and brilliance. Get ready to unleash your talents, embrace the extraordinary, and be part of a celebration like never before!
            </h2>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Banner;

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

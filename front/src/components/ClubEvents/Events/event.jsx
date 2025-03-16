import { useEffect, useState } from "react";
import "./event.css";

const Firework = () => (
  <>
    <div className="firework"></div>
    <div className="firework"></div>
    <div className="firework"></div>
    <div className="firework"></div>
    <div className="firework"></div>
    <div className="firework"></div>
  </>
);

function EventPage({ event }) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {

    const animateText = (selector, animationClass) => {
      document.querySelectorAll(selector).forEach((element) => {
        const text = element.textContent;
        element.innerHTML = "";

        text.split("").forEach((char, index) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char === " " ? "\u00A0" : char;
          charSpan.classList.add("letter", animationClass);
          charSpan.style.animationDelay = `${index * 0.1}s`;
          element.appendChild(charSpan);
        });
      });
    };


    animateText(".event-title", "fade-from-top");
    animateText(".event-description", "fade-from-bottom");
    animateText(".event-list h2", "fade-from-left");
    animateText(".event-list ul li", "fade-from-right");
  }, []);

  return (
    <div
      className="fireworks-background"
      style={{
        backgroundImage: `url(${event.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Firework />
      

      <div className="event-info">
        <h1 className="event-title">{event.title}</h1>

        <div className="event-content">
          <p className="event-description">{event.description}</p>

          {/* "See More" Section */}
          <div className="event-moreinfo">
            <button onClick={() => setShowMore(!showMore)} className="see-more-btn">
              {showMore ? "See Less" : "See More"}
            </button>

            <div className={`more-text ${showMore ? "show" : ""}`}>
              <h2 className="typing-text">Event Details</h2>

              <div className="sentence-container">
                <p className="fade-sentence" style={{ "--delay": 1 }}>
                  <strong>Event Type:</strong> {event.type}
                </p>
                <p className="fade-sentence" style={{ "--delay": 2 }}>
                  <strong>Amount:</strong> Rs {event.amount}
                </p>
                <p className="fade-sentence" style={{ "--delay": 3 }}>
                  <strong>Team Size:</strong> {event.teamSize} members
                </p>
              </div>

              <h2 className="typing-text">Event Rules:</h2>
              <ul className="sentence-container">
                {event.rules.map((rule, index) => (
                  <li key={index} className="fade-sentence" style={{ "--delay": index + 4 }}>
                    {rule}
                  </li>
                ))}
              </ul>

              <h2 className="typing-text">Contact:</h2>
              <p className="fade-sentence" style={{ "--delay": event.rules.length + 4 }}>
                📞 {event.contact}
              </p>
            </div>
          </div>

          {/* Register Button */}
          <div className="event-register">
            <a href={event.eventLink} target="_blank" rel="noopener noreferrer">
              <button className="register-btn">Register</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;

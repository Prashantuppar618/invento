import { useState } from 'react';
import './Cards3d.css';

const Card3DRotation = ({ frontTitle, frontText, backTitle, backText, frontImage, backImage }) => {
  const [rotated, setRotated] = useState(false);

  const handleRotate = () => setRotated(!rotated);

  return (
    <div className="body3d">
      <div className="cards-wrapper">
        <div className="card-container">
          <div className={`card ${rotated ? 'rotated' : ''}`} onClick={handleRotate}>
            <div
              className="card-contents card-front"
              style={{ backgroundImage: `url(${frontImage})` }}
            >
              <div className="card-depth">
                <h2>{frontTitle}</h2>
                <hr />
                <p>{frontText}</p>
              </div>
            </div>
            <div
              className="card-contents card-back"
              style={{ backgroundImage: `url(${backImage})` }}
            >
              <div className="card-depth">
                <h2 className="cham">{backTitle}</h2>
                <hr />
                <p>{backText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card3DRotation;
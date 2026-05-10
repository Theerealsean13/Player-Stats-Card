import { useState } from 'react';
import './PlayerCard.css';

const PlayerCard = ({ name, mainPosition, altPosition, ovr, stats }) => {
  const [isAltPosition, setIsAltPosition] = useState(false);

  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card-header">
          <h2>{name}</h2>
          <h3 className="ovr-rating">{ovr}</h3>
        </div>
        
        <div className="position-container">
          <p className={isAltPosition ? "alt-position-green" : "main-position"}>
            {isAltPosition ? altPosition : mainPosition}
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat"><span className="label">PAC</span> {stats.pac}</div>
          <div className="stat"><span className="label">SHO</span> {stats.sho}</div>
          <div className="stat"><span className="label">PAS</span> {stats.pas}</div>
          <div className="stat"><span className="label">DRI</span> {stats.dri}</div>
          <div className="stat"><span className="label">DEF</span> {stats.def}</div>
          <div className="stat"><span className="label">PHY</span> {stats.phy}</div>
        </div>

        <button className="toggle-btn" onClick={() => setIsAltPosition(!isAltPosition)}>
          Toggle Position
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
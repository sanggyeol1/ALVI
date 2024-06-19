import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ThemeCard.style.css';

const ThemeCard = ({ item }) => {
  return (
    <div className="theme-box mb-5">
      <h3>{item.name}</h3>
      <FontAwesomeIcon className="theme-icon" icon={item.icon} />
      <div className="description">
        {item.description}
      </div>
    </div>
  );
}

export default ThemeCard;
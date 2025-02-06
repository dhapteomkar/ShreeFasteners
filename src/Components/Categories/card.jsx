import React from 'react';
import './Card.css'; // Optional: Add custom styling if needed.

const Card = ({ children, className = '' }) => {
  return <div className={`custom-card ${className} `}>{children}</div>;
};

export default Card;

import React from "react";

import { GoQuote } from "react-icons/all";
export const Card = ({ id, image, name, title, quote, subject, bg }) => {
  return (
    <div className={`card ${bg}`}>
      <header className="profile">
        <div className="profile-img">
          <img src={image} alt={name} />
        </div>
        <div className="position">
          <h4>{name}</h4>
          <h6>{title}</h6>
        </div>
      </header>
      <h3>{subject}</h3>
      <p className="message">
        <GoQuote /> {quote}
      </p>
    </div>
  );
};

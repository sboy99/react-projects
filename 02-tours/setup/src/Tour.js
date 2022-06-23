import React, { useState, useContext } from "react";
import { dataContext } from "./App";
const Tour = ({ id, image, info, price, name }) => {
  const [readmore, setReadmore] = useState(false);
  const { remTour } = useContext(dataContext);
  return (
    <article className="single-tour">
      <img src={image} alt="img" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readmore ? info : info.slice(0, 200) + "..."}

          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? "Read less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => remTour(id)}>
          Not-Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

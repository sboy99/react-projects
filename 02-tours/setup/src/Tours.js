import React from "react";
import Tour from "./Tour";
const Tours = ({ Places }) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Featured Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {Places.map((place) => (
            <Tour key={place.id} {...place} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Tours;

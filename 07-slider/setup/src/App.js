import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  // * States..
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // * Functions..
  //use useEffect instead!
  const checkIndex = (index) => {
    if (index >= people.length) return 0;
    if (index < 0) return people.length - 1;
    return index;
  };

  // * Useeffect..
  // chicking index
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) return setIndex(lastIndex);
    if (index > lastIndex) return setIndex(0);
  }, [index, people]);

  // interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //Stuff
          let position = "";
          if (personIndex === checkIndex(index + 1)) position = "nextSlide";
          if (personIndex === index) position = "activeSlide";
          if (personIndex === checkIndex(index - 1)) position = "lastSlide";

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

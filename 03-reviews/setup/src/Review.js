import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setindex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const checkNumber = (number) => {
    if (number >= people.length) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  const next = () => {
    // if (index === people.length - 1) return setindex(0);
    setindex(checkNumber(index + 1));
  };
  const prev = () => {
    setindex(checkNumber(index - 1));
  };
  const random = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = checkNumber(index + 1);
    }
    setindex(randomNumber);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="name" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        Random
      </button>
    </article>
  );
};

export default Review;

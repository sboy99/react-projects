import React from "react";

const Categories = ({ categories, filter }) => {
  const active = (id) => {
    document.querySelectorAll(".filter-btn").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll(".filter-btn")[id].classList.add("active");
  };
  return (
    <>
      <div className="btn-container">
        {categories.map((category, i) => {
          return (
            <button
              className={
                category === "all" ? "filter-btn active" : "filter-btn"
              }
              id={i}
              onClick={() => {
                filter(category);
                active(i);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;

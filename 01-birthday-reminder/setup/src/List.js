import React from "react";

const List = ({ people, delPeople }) => {
  return (
    <>
      {people?.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <button onClick={() => delPeople(id)}>clear</button>
          </article>
        );
      })}
    </>
  );
};

export default List;

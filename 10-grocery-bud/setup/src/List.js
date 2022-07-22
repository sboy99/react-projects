import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, edit, del }) => {
  return (
    <>
      {items.map(({ id, name }) => {
        return (
          <article key={id} className="grocery-item">
            <p className="title">{name}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => edit(id, name)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => del(id, name)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

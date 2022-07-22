import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  //useStates//
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", className: "" });

  //useEffect//
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, msg: "", className: "" });
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  //Functions//
  const throwAlert = (msg, className) => {
    setAlert({
      show: true,
      msg,
      className: `alert-${className}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      throwAlert(`Please provide product name`, `danger`);
    } else if (name && isEditing) {
      //Editing//
      const itemIndex = list.findIndex((item) => item.id === isEditing);
      list[itemIndex].name = name;
      setName("");
      setIsEditing(null);
      throwAlert(`Item name updated successfully`, `success`);
    } else {
      const item = { id: new Date().getTime().toString(), name };
      setList([...list, item]);
      throwAlert(`${name} successfully added`, `success`);
      setName("");
    }
  };

  const handleDelete = (id, name) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    throwAlert(`${name} successfully deleted`, `danger`);
  };

  return (
    <>
      <section className="section-center">
        <form onSubmit={handleSubmit} className="grocery-form">
          {alert.show && <Alert {...alert} />}
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. product"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button className="submit-btn">
              {!isEditing ? `Submit` : `Edit`}
            </button>
          </div>
        </form>
        <div className="grocery-container">
          {list.length ? (
            <>
              <List
                items={list}
                edit={(id, name) => {
                  setIsEditing(id);
                  setName(name);
                }}
                del={handleDelete}
              />
              <button className="clear-btn" onClick={() => setList([])}>
                Clear All
              </button>
            </>
          ) : (
            <p style={{ textAlign: "center" }}>No Itrems available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default App;

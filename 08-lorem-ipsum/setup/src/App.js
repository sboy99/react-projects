import React, { useState, useRef } from "react";
import data from "./data";
function App() {
  const input = useRef();
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let Input = Number(input.current.value);
    if (Input !== 0 && !Input) {
      document.getElementById("err").textContent =
        "Please provide numeric value";
      setTimeout(() => {
        document.getElementById("err").textContent = "";
      }, 4000);
    }
    if (Input < 0) Input = 1;
    setCount(Input);
  };

  return (
    <section className="section-center">
      <h3>Tired of unsing boring lorem ipsum ?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="input">
          <h3>Paragraph!</h3>{" "}
        </label>
        <input type="text" id="input" ref={input} />
        <span id="err" style={{ color: "red" }}></span>
        <button type="submit " className="btn">
          Generate
        </button>
      </form>
      {data.map((txt, index) => {
        if (index < count) return <p key={index}>{txt}</p>;
      })}
    </section>
  );
}

export default App;

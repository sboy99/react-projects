import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f15025");
  const [Error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all());

  const handleSubmit = (e) => {
    setError(false)
    e.preventDefault();
    try {
      setList(new Values(color).all(5));     
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={Error?`error`:null}
        />
        <button className="btn" onClick={handleSubmit}>
          Generate
        </button>
      </section>
     {!Error && 
     <section className="colors">
     {
      list.map((col,index)=>{
        return <SingleColor key={index} {...col} index={index} hex={col.hex}/>
      })
     } 
      </section>
}
    </>
  );
}

export default App;

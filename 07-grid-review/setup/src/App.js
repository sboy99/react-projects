import "./App.scss";
import React, { useState, useEffect } from "react";
import people from "./data";
import axios from "axios";
import { Card } from "./Card";
import { Grid } from "./grid";
function App() {
  const [person, setPerson] = useState(people);
  return (
    <main>
      <div className="grid-container ">
        {person.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </div>
      <Grid />
    </main>
  );
}

export default App;

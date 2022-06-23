import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const delPeople = (id) => {
    setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };

  const clearAllPeople = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday</h3>
        <List people={people} delPeople={delPeople} />
        <button onClick={clearAllPeople}>Clear All</button>
      </section>
    </main>
  );
}

export default App;

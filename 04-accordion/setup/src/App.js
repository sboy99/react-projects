import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [Questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {Questions.map((q) => (
            <SingleQuestion key={q.id} {...q} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const getData = async () => {
    setLoading(true);
    const { data } = await axios.get(url);
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);
  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  const { company, title, dates, duties } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/*  Button Container */}
        <div className="btn-container">
          {jobs.map((job, i) => {
            return (
              <button
                className={`job-btn ${i === value && "active-btn"}`}
                key={job.id}
                onClick={() => setValue(i)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* Job Info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, i) => (
            <div key={i} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              {duty}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default App;

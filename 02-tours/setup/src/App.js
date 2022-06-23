import React, { useState, useEffect, createContext } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
export const dataContext = createContext();
function App() {
  const [loading, setLoading] = useState(true);
  const [Places, setPlaces] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setPlaces(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  const remTour = (id) => {
    setPlaces(() => {
      return Places.filter((place) => place.id !== id);
    });
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (!loading && Places.length === 0) {
    return (
      <main>
        <>
          <div className="title">
            <h2>No Tour Available</h2>
            <div className="underline"></div>
            <button className="btn" onClick={() => fetchData()}>
              Refresh
            </button>
          </div>
        </>
      </main>
    );
  }

  return (
    <dataContext.Provider value={{ remTour }}>
      <main>
        <Tours Places={Places} />
      </main>
      ;
    </dataContext.Provider>
  );
}

export default App;

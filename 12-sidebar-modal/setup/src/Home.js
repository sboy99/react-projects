import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { setShowMenu, setShowModal } = useGlobalContext();
  return (
    <main>
      <button className={`sidebar-toggle `} onClick={() => setShowMenu(true)}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => setShowModal(true)}>
        ShowModal
      </button>
    </main>
  );
};

export default Home;

import React, { useState, useContext } from "react";
import sublinks from "./data";

const GlobalContext = React.createContext();
export const ContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", link: [] });
  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSubmenu = (text, coordinate) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinate);
    setShowSubmenu(true);
  };

  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  const contexts = {
    showSidebar,
    showSubmenu,
    location,
    page,
    openSidebar,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
  };

  //Wrapper//
  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

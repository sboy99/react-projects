import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { showMenu, setShowMenu } = useGlobalContext();
  return (
    <aside className={`sidebar ${showMenu && `show-sidebar`}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="close-btn" onClick={() => setShowMenu(false)}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} <span>{text}</span>{" "}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${showSidebar ? "show" : ""}`}>
      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-links">
        {sublinks.map((items, index) => {
          const { links, page } = items;
          <article key={index}>
            <h4 className="">{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link, index) => {
                const { label, icon, url } = links;
                return (
                  <a key={index} href={url}>
                    {icon} {label}
                  </a>
                );
              })}
            </div>
          </article>;
        })}
      </div>
    </aside>
  );
};

export default Sidebar;

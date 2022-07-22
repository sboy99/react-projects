import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    showSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${showSubmenu ? `submenu show` : "submenu"} min-w-[20rem] rounded-lg`}
      ref={container}
    >
      <h1 className="text-sm uppercase font-semibold text-gray-700 tracking-tighter">
      {page}
      </h1>
      {page && (
        <div className="flex gap-3 items-center">
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a href={url} className="flex text-lg font-medium items-center capitalize text-gray-500 flex-shrink-0" key={index}>
                <span className="text-violet-500 w-10 h-10 flex justify-center items-center rounded-full hover:bg-violet-100">{icon}</span>{label}
              </a>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default Submenu;

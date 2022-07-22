import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  //filter by category
  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="menu  section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filter={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

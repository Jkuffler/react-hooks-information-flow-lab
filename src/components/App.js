import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, onDarkModeClick] = useState(false);

  
 

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

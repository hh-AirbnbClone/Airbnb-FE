import React from "react";
import { useState } from "react";

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="header">
      <button onClick={handleButtonClick}>Toggle Menu</button>
      {isOpen && (
        <div className="menu">
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      )}
    </div>
  );
};

export default SearchButton;

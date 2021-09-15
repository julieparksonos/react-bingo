import React, { useState, useEffect } from "react";
import Space from "./components/Space";
import { spaces } from "./data/spaces.json";
import "./App.css";

function App() {
  const [spacesUsed, setSpacesUsed] = useState([]);
  const freeSpace = "Adjusted EBITDA";

  function shuffleSpaces(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  //shuffle the spaces array
  shuffleSpaces(spaces);

  useEffect(() => {
    const fillBoard = spaces.map((item) => item);
    setSpacesUsed(fillBoard);
  }, []);

  return (
    <div className="App">
      <div className="bingo-container">
        {spacesUsed.map((space, index) => {
          if (index === 12)
            return (
              <div className="space free-space">
                <h2>{freeSpace}</h2>
              </div>
            );
          if (index < 25) return <Space key={index}>{space}</Space>;
          return null;
        })}
      </div>
    </div>
  );
}

export default App;

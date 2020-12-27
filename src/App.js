import React from "react";
import "./scss/main.css";

import idioms from "./data/idioms.json";

const App = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  console.log(idioms);

  return (
    <div className="App">
      <h1>Idioms</h1>
      <h2>Choose a letter</h2>
      <div className="letters">
        {alphabet.map((letter) => (
          <div className="letter" key={letter}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

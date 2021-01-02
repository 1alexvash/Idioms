import React, { useState } from "react";
import "./scss/main.css";

const App = () => {
  const [letter, setLetter] = useState("");

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

  return (
    <div className="App">
      {/* Alphabet */}
      {/* List of all idioms */}
      {/* Sory by */}
      {/* Get a random idiom */}
      <button className="generate">Get a Random Idiom</button>
    </div>
  );
};

export default App;

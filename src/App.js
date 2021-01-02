import React, { useState } from "react";

import Spinner from "./components/Spinner";

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

  function generateIdiom() {
    console.log("His");
  }

  return (
    <div className="App">
      {/* Alphabet */}
      {/* List of all idioms */}
      {/* Sory by */}
      {/* Get a random idiom */}
      <button className="generate" onClick={() => generateIdiom()}>
        Get a Random Idiom
      </button>
      <Spinner />
    </div>
  );
};

export default App;

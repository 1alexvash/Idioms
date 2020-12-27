import React, { useState } from "react";
import "./scss/main.css";

import idioms from "./data/idioms.json";

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
      <h1>Idioms</h1>
      <h2>Choose a letter</h2>
      <div className="letters">
        {alphabet.map((letter) => (
          <div
            className="letter"
            key={letter}
            onClick={() => setLetter(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <h2>
        Choosen letter is <b>{letter}</b>
      </h2>
      <div className="idioms">
        {letter === "Z"
          ? idioms.map((idiom) => (
              <div className="idiom" key={idiom.name}>
                <div className="name">
                  <b>{idiom.name.split("-")[0]}</b> - {idiom.name.split("-")[1]}
                </div>
                <div className="example">{idiom.example}</div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

import idioms from "./data/idioms.json";

import Spinner from "./components/Spinner";

import "./scss/main.css";

const App = () => {
  const [letter, setLetter] = useState("");
  const [animate, setAnimate] = useState(false);

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
    setAnimate(true);
    const time = 400 + 200 * Math.round(Math.random() * 3);
    const random = Math.floor(Math.random() * idioms.length);
    const randomIdiom = idioms[random];
    console.log("randomIdiom:", randomIdiom);
    setTimeout(() => {
      setAnimate(false);
    }, time);
  }

  return (
    <div className="App">
      {/* Alphabet */}
      {/* List of all idioms */}
      {/* Sory by */}
      {animate ? (
        <Spinner />
      ) : (
        <button className="generate" onClick={() => generateIdiom()}>
          Get a Random Idiom
        </button>
      )}
    </div>
  );
};

export default App;

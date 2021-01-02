import React, { useState } from "react";

import idioms from "./data/idioms.json";

import Spinner from "./components/Spinner";

import List from "./components/List";

import { HashRouter as Router, Route } from "react-router-dom";

import "./scss/main.css";

const App = () => {
  const [letter, setLetter] = useState("");
  const [animate, setAnimate] = useState(false);
  const [idiom, setIdiom] = useState({});

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
    setTimeout(() => {
      const random = Math.floor(Math.random() * idioms.length);
      const randomIdiom = idioms[random];
      setIdiom(randomIdiom);
      setAnimate(false);
    }, time);
  }

  return (
    <div className="App">
      <Router>
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

        <Route path="/" exact component={List} />
      </Router>
    </div>
  );
};

export default App;

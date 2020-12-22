import React from "react";

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

  return (
    <div className="App">
      <h1>Idioms</h1>
      <h2>Choose a letter</h2>
      {alphabet.map((letter) => letter)}
    </div>
  );
};

export default App;

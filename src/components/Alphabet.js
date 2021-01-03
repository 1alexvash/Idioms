import React from "react";

const Alphabet = () => {
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
    <div className="Alphabet">
      {alphabet.map((letter) => (
        <div className="box">
          <div className="letter">{letter}</div>
        </div>
      ))}
    </div>
  );
};

export default Alphabet;

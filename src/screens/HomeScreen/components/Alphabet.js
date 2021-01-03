import React from "react";

const Alphabet = ({ history }) => {
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

  function handleClick(letter) {
    history.push(`/idiom-on-letter/${letter}`);
  }

  return (
    <div className="alphabet">
      {alphabet.map((letter) => (
        <div className="box" key={letter} onClick={() => handleClick(letter)}>
          <div className="letter">{letter}</div>
        </div>
      ))}
    </div>
  );
};

export default Alphabet;

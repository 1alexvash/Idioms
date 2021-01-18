import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const fullAlphabet = [
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

const Alphabet = ({ history }) => {
  const [alphabet, setAlphabet] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (alphabet.length < fullAlphabet.length) {
        setAlphabet([...alphabet, fullAlphabet[alphabet.length]]);
      }
    }, 250);
    return () => clearInterval(timer);
  }, [alphabet]);

  return (
    <div className="alphabet">
      {alphabet.map((letter) => (
        <div className="box" key={letter}>
          <NavLink
            to={`/idiom-on-letter/${letter}`}
            className="letter"
            activeClassName="active"
          >
            {letter}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Alphabet;

import React from "react";
import { NavLink } from "react-router-dom";

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

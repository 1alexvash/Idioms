import React, { useState } from "react";

import idioms from "../../../data/idioms.json";

import Spinner from "../../../components/Spinner";

const RandomButton = ({ history }) => {
  const [animate, setAnimate] = useState(false);

  function generateIdiom() {
    setAnimate(true);
    const time = 500 + 250 * Math.round(Math.random() * 4);
    history.push("/");
    setTimeout(() => {
      const random = Math.floor(Math.random() * idioms.length);
      const randomIdiom = idioms[random];

      history.push(`/idiom/${randomIdiom.idiom}`);
      setAnimate(false);
    }, time);
  }

  return animate ? (
    <Spinner />
  ) : (
    <button className="random-Button" onClick={() => generateIdiom()}>
      Get a Random Idiom
    </button>
  );
};

export default RandomButton;

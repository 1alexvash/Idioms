import React, { useState } from "react";

import idioms from "../data/idioms.json";

import Spinner from "../components/Spinner";

const RandomButton = ({ history }) => {
  const [animate, setAnimate] = useState(false);

  function generateIdiom() {
    setAnimate(true);
    const time = 400 + 200 * Math.round(Math.random() * 3);
    history.push("/");
    setTimeout(() => {
      const random = Math.floor(Math.random() * idioms.length);
      const randomIdiom = idioms[random];
      console.log("randomIdiom:", randomIdiom.idiom);

      history.push(`/idiom/${randomIdiom.idiom}`);
      setAnimate(false);
    }, time);
  }

  return animate ? (
    <Spinner />
  ) : (
    <button className="Random-Button" onClick={() => generateIdiom()}>
      Get a Random Idiom
    </button>
  );
};

export default RandomButton;

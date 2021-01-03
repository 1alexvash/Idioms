import React from "react";

import idioms from "../../data/idioms.json";

const IdiomScreen = ({ match }) => {
  const name = match.params.name;

  // I need to replace ? with an empty space in order to avoid mistakes
  const idiom = idioms.find((idiom) => idiom.idiom.replace("?", "") === name);

  return (
    <div className="IdiomScreen">
      <div className="name">{idiom.idiom}</div>
      <div className="meaning">{idiom.meaning}</div>
      <div className="example">{idiom.example}</div>
    </div>
  );
};

export default IdiomScreen;

import React from "react";

import Idiom from "../../components/Idiom";

import idioms from "../../data/idioms.json";

const IdiomScreen = ({ match }) => {
  const name = match.params.name;

  // I need to replace ? with an empty space in order to avoid mistakes
  const idiom = idioms.find((idiom) => idiom.idiom.replace("?", "") === name);

  return <Idiom idiom={idiom} />;
};

export default IdiomScreen;

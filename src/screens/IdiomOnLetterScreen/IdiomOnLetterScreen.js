import React from "react";

import Idiom from "../../components/Idiom";

import idioms from "../../data/idioms.json";

const IdiomOnLetterScreen = ({ match }) => {
  const { letter } = match.params;

  const filteredIdioms = idioms.filter((idiom) => idiom.idiom[0] === letter);

  return (
    <div className="IdiomOnLetterScreen">
      {filteredIdioms.map((idiom) => (
        <Idiom key={idiom.idiom} idiom={idiom} />
      ))}
    </div>
  );
};

export default IdiomOnLetterScreen;

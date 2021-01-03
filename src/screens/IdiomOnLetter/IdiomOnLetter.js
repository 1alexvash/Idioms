import React from "react";

const IdiomOnLetter = ({ match }) => {
  const { letter } = match.params;
  return <div className="IdiomOnLetter">what letter it iz: {letter}</div>;
};

export default IdiomOnLetter;

import React from "react";

const Idiom = ({ idiom }) => (
  <div className="Idiom">
    <div className="name">{idiom.idiom}</div>
    <div className="meaning">{idiom.meaning}</div>
    <div className="example">{idiom.example}</div>
  </div>
);

export default Idiom;

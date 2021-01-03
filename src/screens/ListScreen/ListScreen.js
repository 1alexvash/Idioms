import React from "react";

import { Link } from "react-router-dom";

import idioms from "../../data/idioms.json";

const ListScreen = () => {
  return (
    <div className="ListScreen">
      {idioms.map((idiom) => (
        <div className="idiom" key={idiom.idiom}>
          <Link to={`idiom/${idiom.idiom}`}>{idiom.idiom}</Link>
        </div>
      ))}
    </div>
  );
};

export default ListScreen;

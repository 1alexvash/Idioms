import React from "react";

import { Link } from "react-router-dom";

import idioms from "../data/idioms.json";

const List = () => {
  return (
    <div className="List">
      {idioms.map((idiom) => (
        <div className="idiom">
          <Link to={`idiom/${idiom.idiom}`}>{idiom.idiom}</Link>
        </div>
      ))}
    </div>
  );
};

export default List;

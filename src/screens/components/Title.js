import React from "react";

import { NavLink } from "react-router-dom";

const Title = () => (
  <h1 className="title">
    <NavLink to="/" exact activeClassName="active">
      Idioms
    </NavLink>
  </h1>
);

export default Title;

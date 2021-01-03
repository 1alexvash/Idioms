import React from "react";

import { NavLink } from "react-router-dom";

const List = () => (
  <div className="list">
    <NavLink to={"/list"} exact activeClassName="active">
      List of all idioms
    </NavLink>
  </div>
);

export default List;

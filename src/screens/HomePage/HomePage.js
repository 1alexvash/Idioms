import React from "react";

import Title from "./components/Title";
import Alphabet from "./components/Alphabet";
import List from "./components/List";
import RandomButton from "./components/RandomButton";

const HomePage = ({ history }) => (
  <div className="HomePage">
    <Title />
    <Alphabet />
    <List />
    <RandomButton history={history} />
  </div>
);

export default HomePage;

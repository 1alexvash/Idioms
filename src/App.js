import React from "react";

import idioms from "./data/idioms.json";

import HomePage from "./screens/HomePage";

import List from "./components/List";

import { HashRouter as Router, Route } from "react-router-dom";

import "./scss/main.css";

const App = () => {
  const Idiom = ({ match }) => {
    const name = match.params.name;

    // I need to replace ? with an empty space in order to avoid mistakes
    const idiom = idioms.find((idiom) => idiom.idiom.replace("?", "") === name);

    return (
      <div className="Idiom">
        <div className="name">{idiom.idiom}</div>
        <div className="meaning">{idiom.meaning}</div>
        <div className="example">{idiom.example}</div>
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Route path="" component={HomePage} />
        <Route path="/list" exact component={List} />
        <Route path="/idiom/:name" exact component={Idiom} />
      </Router>
    </div>
  );
};

export default App;

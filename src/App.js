import React, { useState } from "react";

import idioms from "./data/idioms.json";

import Alphabet from "./components/Alphabet";
import RandomButton from "./components/RandomButton";

import List from "./components/List";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import "./scss/main.css";

const App = () => {
  const [letter, setLetter] = useState("");

  const [idiom, setIdiom] = useState({});

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
        <h1 className="app-title">
          <Link to="/">Idioms</Link>
        </h1>
        <Link to={"/list"}>List of all idioms</Link>
        <Route path="/" component={Alphabet} />
        <Route path="/" component={RandomButton} />
        <Route path="/list" exact component={List} />
        <Route path="/idiom/:name" exact component={Idiom} />
      </Router>
    </div>
  );
};

export default App;

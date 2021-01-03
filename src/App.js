import React from "react";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ListScreen from "./screens/ListScreen/ListScreen";
import IdiomScreen from "./screens/IdiomScreen/IdiomScreen";

import { HashRouter as Router, Route } from "react-router-dom";

import "./scss/main.css";

const App = () => (
  <div className="App">
    <Router>
      <Route path="" component={HomeScreen} />
      <Route path="/list" exact component={ListScreen} />
      {/* <Route path="/idiom-on-letter/:letter" exact component={IdiomScreen} /> */}
      <Route path="/idiom/:name" exact component={IdiomScreen} />
    </Router>
  </div>
);

export default App;

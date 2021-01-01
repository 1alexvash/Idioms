

import React, { useState } from "react";

import listOfIdioms from "./data/listOfIdioms.json";

const Parser = () => {
  const [idioms, setIdioms] = useState(
    localStorage.idioms ? JSON.parse(localStorage.idioms) : []
  );

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const [animate, setAnimate] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const idiom = firstInput.split(" - ")[0];
    const meaning = firstInput.split(" - ")[1];

    if (!listOfIdioms.includes(idiom)) {
      alert("The following idiom is out of the list");
      return "";
    }

    const allIdioms = idioms.map((idiom) => idiom.idiom);
    if (allIdioms.includes(idiom)) {
      alert("The folowing idiom already exists");
      return "";
    }

    if (firstInput === secondInput) {
      alert("Inputs can't match");
      return;
    }

    if (!firstInput.includes(" - ")) {
      alert("Doesnt' have prefix");
      return;
    }

    if (secondInput.length < 5) {
      return;
    }

    if (animate) {
      return;
    }

    const newIdiom = {
      idiom,
      meaning,
      example: secondInput,
    };
    const updatedIdioms = [...idioms, newIdiom];
    localStorage.idioms = JSON.stringify(updatedIdioms);
    setIdioms(updatedIdioms);

    setFirstInput("");
    setSecondInput("");

    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }

  return (
    <div className="Parser">
      <form className="left" onSubmit={handleSubmit}>
        <h1>Add Idioms</h1>
        <input
          type="text"
          className="name"
          placeholder="Name and example"
          minLength="5"
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value.trim())}
          required
        />
        <textarea
          type="text"
          className="desc"
          placeholder="Description"
          minLength="5"
          value={secondInput}
          onChange={(e) =>
            setSecondInput(e.target.value.replace(/\n/g, " ").trim())
          }
          wrap="hard"
          required
        />
        <button className={animate ? "animate" : ""} type="submit">
          {animate ? "..." : "Add Idiom"}
        </button>
      </form>
      <div className="right">
        Idioms length: <b>{idioms.length}</b>
        <br />
        {animate ? "Adding a new idiom" : ""}
        <br />
        Idioms left to add: <b>{listOfIdioms.length - idioms.length}</b>
      </div>
    </div>
  );
};

export default Parser;

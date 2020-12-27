import React from "react";
import "./scss/main.css";

const App = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const idioms = [
    {
      idiom: "Zero tolerance - Refusal to tolerate something at all.",
      example:
        "The school has a zero tolerance policy when it comes to any sort of violence.",
    },
    {
      idiom: "Zip it - Be quiet.",
      example:
        "Our teacher lost his patience. He told one of the loudest students to zip it.",
    },
  ];

  function parseText(text) {
    console.log("Text was parsed");
    const parsedText = text.split("F");
    console.log(parsedText);
  }

  const text = `
Feeding frenzy - To eat a large amount of food, probably in a frantic
manner. Also refers to consuming anything in a frantic way, such as the
public being in a feeding frenzy about the latest celebrity story.
It seemed like all the magazines were in a feeding frenzy for stories about
my favorite celebrity. There were stories printed all over the place.
Feel like a million dollars - To feel extremely good—both in the way you
feel inside and the way you look.
I felt like a million dollars when I was dressed up for the banquet last night.
Feel the pinch - To feel the effects of a lack of money or other resources.
The business had been feeling the pinch. Money was in short supply and
they weren't sure how they could continue to offer their services.  
  `;

  parseText(text);

  return (
    <div className="App">
      <h1>Idioms</h1>
      <h2>Choose a letter</h2>
      <div className="letters">
        {alphabet.map((letter) => (
          <div className="letter" key={letter}>
            {letter}
          </div>
        ))}
      </div>
      <div className="text">
        Well begun is half done - It's important to get a good start. Megan was
        worried that she wouldn't do a good job on the project, but I thought
        she'd made a really good start. I reassured her and reminded her that
        well begun is half done. We'll cross that bridge when we come to it - We
        will deal with that problem when we have to. Don't worry about that
        problem right now. We'll cross that bridge when we come to it.
        Well-heeled - Wealthy and well-dressed. Chloe started working at an
        upscale boutique this week. She told me a bit about all of her
        well-heeled customers. Went the extra mile - To do even more than is
        required. The group went the extra mile with their class project. They
        did more than was required and ended up with an A+. Wet behind the ears
        - Inexperienced and probably young. The new guy in the office is really
        young and wet behind the ears. He hardly has any experience in this
        field. Wet blanket - An individual who others feel ruins a fun or
        enjoyable experience. Dan is such a wet blanket. He always tries to ruin
        the fun when we're having a party
      </div>
    </div>
  );
};

export default App;

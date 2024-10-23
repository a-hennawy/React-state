import React, { useState } from "react";
import answers from "./answers";
import "./EightBall.css";

function EightBall() {
  const [message, setMessage] = useState("Think of a question");
  const [bgColor, setBgColor] = useState("black");
  const [greenColorCount, setGreenColorCount] = useState(0);
  const [goldenrodColorCount, setGoldenrodColorCount] = useState(0);
  const [redColorCount, setRedColorCount] = useState(0);

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIdx];
    setMessage(randomAnswer.msg);
    setBgColor(randomAnswer.color);
    if (randomAnswer.color === "green") setGreenColorCount(greenColorCount + 1);
    if (randomAnswer.color === "goldenrod")
      setGoldenrodColorCount(goldenrodColorCount + 1);
    if (randomAnswer.color === "red") setRedColorCount(redColorCount + 1);
  };

  const resetEightball = () => {
    setMessage("Think of a question");
    setBgColor("black");
    setGreenColorCount(0);
    setGoldenrodColorCount(0);
    setRedColorCount(0);
  };
  return (
    <div className="container">
      <div
        className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="EightBall-msg">{message}</h2>
      </div>
      <h3>Green: {greenColorCount}</h3>
      <h3>Goldenrod: {goldenrodColorCount}</h3>
      <h3>Red: {redColorCount}</h3>
      <button className="EightBall-reset" onClick={resetEightball}>
        Reset
      </button>
    </div>
  );
}

export default EightBall;

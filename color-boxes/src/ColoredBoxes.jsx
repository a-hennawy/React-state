import React, { useState } from "react";
import boxes from "./boxes";

import "./ColoredBoxes.css";

function ColoredBoxes() {
  const [box, setBox] = useState(boxes);
  const handleClick = () => {
    const randomBox = Math.floor(Math.random() * 16);
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const newBoxes = boxes.map((box, box_idx) => {
      if (box_idx === randomBox) {
        return { ...box, color: randomColor };
      }
      return box;
    });
    setBox(newBoxes);
  };
  return (
    <>
      <div className="box-container">
        {box.map((b) => (
          <div
            className="box"
            key={b.id}
            style={{ backgroundColor: b.color }}
          ></div>
        ))}
      </div>
      <button className="box-change-btn" onClick={handleClick}>
        Change!
      </button>
    </>
  );
}

export default ColoredBoxes;

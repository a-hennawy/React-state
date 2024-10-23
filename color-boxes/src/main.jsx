import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ColoredBoxes from "./ColoredBoxes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <ColoredBoxes />
    </div>
  </StrictMode>
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import EightBall from "./EightBall.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <EightBall />
    </div>
  </StrictMode>
);

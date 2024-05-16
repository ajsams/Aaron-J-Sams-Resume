import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage/Homepage";
import Resume from "./pages/Resume/Resume";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Homepage /> */}
    <Resume />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Resume from "./pages/Resume/Resume";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

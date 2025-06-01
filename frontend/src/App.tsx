// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import ResultsByFin from "./pages/ResultsByFin";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:voen" element={<Results />} />
        <Route path="/results-by-fin/:fin" element={<ResultsByFin />} />
      </Routes>
    </Router>
  );
};

export default App;

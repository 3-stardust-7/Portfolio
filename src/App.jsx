import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        {/* 404 - Not Found */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-3xl text-red-500 mt-10">
              404 - Page Not Found 😢
            </h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

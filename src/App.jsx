import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Projects Page */}
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

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Login";
import About from "./components/Dash";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

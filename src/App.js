import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dash from "./components/Dash";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

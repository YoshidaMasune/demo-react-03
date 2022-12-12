import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

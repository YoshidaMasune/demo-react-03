import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Cat from "./components/pages/cat/Cat";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat">
          <Route path="" element={<Cat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

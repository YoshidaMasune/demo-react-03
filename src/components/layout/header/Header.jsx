import React from "react";
import "./header.css";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-brand">
        <h1>Header</h1>
      </div>
    </header>
  );
}

export default Header;

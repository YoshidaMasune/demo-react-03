import React from "react";
import "./header.css";
import Navbar from "../navbar/Navbar";
import catblade from "../../../assets/imgs/cat-h.png";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-brand">
        <section></section>
      </div>
    </header>
  );
}

export default Header;

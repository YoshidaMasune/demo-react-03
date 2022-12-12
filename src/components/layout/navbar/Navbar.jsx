import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-con">
        <div className="nav-brand">
          <h1>Cat Wappy</h1>
        </div>
        <button className="nav-toggle-btn"></button>
        <ul className="primary-nav-flex">
          <li className="active">
            <Link to={"/"} className="primary-nav-link">
              <span aria-hidden={true}>01</span>
              หน้าเเรก
            </Link>
          </li>
          <li className="active">
            <Link to={"/"} className="primary-nav-link">
              <span aria-hidden={true}>02</span>
              ขอให้ทุกวัน
            </Link>
          </li>
          <li className="active">
            <Link to={"/"} className="primary-nav-link">
              <span aria-hidden={true}>03</span>
              เป็นวันพระใหญ่
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

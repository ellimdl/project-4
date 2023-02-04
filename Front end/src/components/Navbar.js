import React from "react";
import { Link } from "react-router-dom";
import logo from "../CondoLogo1.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="condo logo" className="logo" />
          {/* <h1>SG New Launch Condo DB</h1> */}
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/calculator">calculator</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

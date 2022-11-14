import React from "react";
import { Link } from "react-router-dom";
import logo from "../infologo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            style={{ width: 30, height: 30 }}
            src={logo}
            alt="cocktail db logo"
            className="logo"
          ></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

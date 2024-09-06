import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="nav">
        <li>
          <img className="logo" src="./logo.png" alt="logo react" />
        </li>
        <ul className="menu">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>à propos</li>
          </NavLink>
        </ul>
      </ul>
    </div>
  );
};

export default Navigation;

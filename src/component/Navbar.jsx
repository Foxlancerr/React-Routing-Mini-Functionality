import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/searchparams"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
          >
            searchParams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

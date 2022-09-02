import React from "react";
import { NavLink } from "react-router-dom";
// we use navlink instead of link because it has an active class which can styled easily
export const Navbar = () => {
  return (
    <nav className="navbar-style">
      <NavLink to="/" className="link">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/about" className="link">
        {" "}
        About
      </NavLink>
      <NavLink to="/products">products</NavLink>
    </nav>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/leaderboard" activeClassName="active">
        Leaderboard
      </NavLink>
      <NavLink to="/add" activeClassName="active">
        Add poll
      </NavLink>
    </nav>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/leaderboard" exact activeClassName="active">
        Leaderboard
      </NavLink>
      <NavLink to="/add" exact activeClassName="active">
        Add poll
      </NavLink>
    </nav>
  );
};

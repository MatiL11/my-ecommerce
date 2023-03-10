import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__brand">
          <NavLink className="nav__brand-link" to="/">
            M6<span>Store</span>
          </NavLink>
        </div>
        <ul className="nav__list">
          <li>
            <NavLink className="categories" to="/categoria/tees">
              Tees
            </NavLink>
          </li>
          <li>
            <NavLink className="categories" to="/categoria/hoodies">
              Hoodies
            </NavLink>
          </li>
          <li>
            <NavLink className="categories" to="/categoria/jeans">
              Jeans
            </NavLink>
          </li>
        </ul>
        <NavLink to="cart">
          <CartWidget />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

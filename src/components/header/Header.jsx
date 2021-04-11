import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../cart-icon/CartIcon";
import "./header.scss";

export const Header = () => {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">GOLDShop</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <CartIcon />
    </nav>
  );
};

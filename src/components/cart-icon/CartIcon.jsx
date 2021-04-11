import React from "react";
import shoppingBag from "../../assets/shopping-bag.png";
import "./cart-icon.scss";

export const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="shoppingcart" />
      <span className="cart-count">4</span>
    </div>
  );
};

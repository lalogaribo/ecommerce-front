import React from "react";
import "./footer.scss";

export const Footer = () => {
  const year = new Date().getFullYear();
  return <div className="footer">{year} Gold Store</div>;
};

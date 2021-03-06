import React from "react";
import { withRouter } from "react-router";
import "./featured-product.scss";

const FeaturedProduct = (props) => {
  const { title, imageUrl, price, id, history } = props;
  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt={title} />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);

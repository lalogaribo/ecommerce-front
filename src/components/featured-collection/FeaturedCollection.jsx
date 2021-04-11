import React, { useContext } from "react";
import { ProductsContext } from "../../context/product-context";
import FeaturedProduct from "../shared/FeaturedProduct";

export const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);

  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);
  return (
    <div className="featured-collection container">
      <h3 className="featured-section-title">Featured Collection</h3>
      <div className="products">{productItems}</div>
    </div>
  );
};

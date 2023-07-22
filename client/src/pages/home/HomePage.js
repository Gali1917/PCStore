import React from "react";
import { useProducts } from "../../context/providers/ProductsContext";
import {spinner} from '../../components/icons/index';

import "../../styles/homePage.css";
import ProductCard from "../../components/products/ProductCard";

const HomePage = () => {
  const { isLoading, products} = useProducts();

  if (isLoading) {
    return <span>{spinner}</span>
  }
  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
        suscipit omnis blanditiis repudiandae itaque, praesentium accusantium
        maxime! Aliquam maiores perferendis fugiat nihil aut, quidem hic odio ab
        accusantium fugit amet.
      </p>
      <div className="products">
        {products.map((product) => (
          <div className="card-product" key={product._id}>
            <ProductCard product={product}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;

import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="image-product-card">
        <img
          src={
            product.image && product.image.url
              ? product.image.url
              : "https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Imagen del producto"
        />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="buttons-card">
          <button className="secondary-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

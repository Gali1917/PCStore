import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useAuth } from "../../context/providers/AuthContext";
import { useCart } from "../../context/providers/CartContext";

const ProductCard = ({ product }) => {
  const { isLoggedIn } = useAuth();
  const { addToCart, isLoaddingCart } = useCart();

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
    } catch (error) {
      console.log(error);
    }
  };

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
          {isLoggedIn ? (
            <button
              className="secondary-button"
              onClick={() => {
                handleAddToCart(product._id);
              }}
            >
              Agregar <BsCartPlus />
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

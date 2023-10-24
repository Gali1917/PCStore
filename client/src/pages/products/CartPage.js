import React, { useEffect } from "react";
import { useCart } from "../../context/providers/CartContext";

const CartPage = () => {
  const { loadCart } = useCart();

  useEffect(() => {
    loadCart();
    return () => {};
  }, []);

  return <div>Carrito</div>;
};

export default CartPage;

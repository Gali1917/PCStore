import { useEffect, createContext, useReducer, useContext } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";
import { productActions } from "../actions/productsActions";
import { cartActions } from "../actions/cartActions";

export const CartContext = createContext(initialState);

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartProducts));
  }, [state.cartProducts]);

  const loadCart = async () => {
    dispatch({ type: cartActions.LOAD_SAVE_PRODUCT });
    try {
      const res = JSON.parse(localStorage.getItem("cart"));
      console.log(res);
      if (res) {
        dispatch({
          type: cartActions.LOAD_SAVE_PRODUCT_SUCCESS,
          payload: res,
        });
      }
    } catch (error) {
      dispatch({
        type: productActions.LOAD_SAVE_PRODUCT_ERROR,
        payload: error.message,
      });
    }
  };

  const addToCart = async (productId) => {
    dispatch({ type: cartActions.SAVE_PRODUCT });
    try {
      if (productId) {
        dispatch({
          type: cartActions.SAVE_PRODUCT_SUCCESS,
          payload: productId,
        });
      }
    } catch (error) {
      dispatch({
        type: cartActions.SAVE_PRODUCT_ERROR,
        payload: error.message,
      });
    }
  };
  return (
    <CartContext.Provider value={{ ...state, loadCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

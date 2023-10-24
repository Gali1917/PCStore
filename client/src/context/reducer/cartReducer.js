import { cartActions } from "../actions/cartActions";


export const initialState = {
  cartProducts: [],
  isLoaddingCart: false,
  errorMessage: "",
};

export const cartReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case cartActions.SAVE_PRODUCT:
      return {
        ...state,
        isLoaddingCart: true,
      };
    case cartActions.SAVE_PRODUCT_SUCCESS:
      console.log(state.cartProducts);
      return {
        ...state,
        cartProducts: [...state.cartProducts, payload],
        isLoaddingCart: false,
      };
    case cartActions.SAVE_PRODUCT_ERROR:
      return {
        ...state,
        isLoaddingCart: false,
        errorMessage: payload,
      };

    case cartActions.LOAD_SAVE_PRODUCT:
      return {
        ...state,
        isLoaddingCart: true,
      };
    case cartActions.LOAD_SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        cartProducts: payload,
        isLoaddingCart: false,
      };
    case cartActions.LOAD_SAVE_PRODUCT_ERROR:
      return {
        ...state,
        isLoaddingCart: false,
        errorMessage: payload,
      };
    case cartActions.DELETE_PRODUCT:
      return {
        ...state,
        isLoaddingCart: true,
      };
    case cartActions.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product._id !== payload
        ),
        isLoaddingCart: false,
      };
      case cartActions.DELETE_PRODUCT_ERROR:
        return{
            ...state,
            isLoaddingCart: false,
            errorMessage: payload,
        }
    default:
      return state;
  }
};

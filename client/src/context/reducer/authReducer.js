import { authActions } from "../actions/authActions";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  isLoggedIn: Boolean(token),
  user: null || user,
  token: "" || token,
  errorMessage: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActions.AUTH_SIGNUP:
      return {
        ...state,
        isLoading: true,
      };
    case authActions.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        errorMessage: null,
      };
    case authActions.AUTH_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case authActions.AUTH_SIGNIN:
      return {
        ...state,
        isLoading: true,
      };
    case authActions.AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
        errorMessage: null,
        isLoggedIn: true,
      };
    case authActions.AUTH_SIGNIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case authActions.AUTH_LOGOUT:
      return{
        ...state,
        isLoading: false,
        errorMessage: null,
        user: null,
        token: null,
        isLoggedIn: false,
      }
    default:
      return {
        ...state,
      };
  }
};

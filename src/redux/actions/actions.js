import { SEARCH_PRODUCTS, ADD_TO_CART, RESET_CART } from "./types";

export const SearchProduct = (str) => {
  return {
    type: SEARCH_PRODUCTS,
    str,
  };
};
export const AddToCart = (price, quantity, name) => {
  return {
    type: ADD_TO_CART,
    price,
    quantity,
    name,
  };
};
export const ResetCart = () => {
  return {
    type: RESET_CART,
  };
};

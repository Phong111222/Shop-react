import Data from "../../products_data/";
import { SEARCH_PRODUCTS, ADD_TO_CART } from "../actions/types";

const initialState = {
  Data: Data,
  NumberOfProducts: 0,
  TotalPrice: 0,
  CurPro: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS: {
      const regex = new RegExp(`${action.str}`, "gi");
      return { ...state, Data: Data.filter((item) => item.name.match(regex)) };
    }
    case ADD_TO_CART: {
      if (!action.quantity) return state;
      else if (action.name == state.CurPro) return state;
    }
    default:
      return state;
  }
};

export default reducer;

// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ProductListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case types.LIST_PRODUCT_SUCCESS:
      return { ...state, listProduct: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
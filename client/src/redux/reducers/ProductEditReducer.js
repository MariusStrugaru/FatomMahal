// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  product: {}
};

// Reducer
export default function ProductEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case types.UPDATE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case types.GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
import { combineReducers } from "redux";

// START IMPORT REDUCERS
import AccessReducer from "./AccessReducer";
import HomeReducer from "./HomeReducer";
import ProductEditReducer from "./ProductEditReducer";
import ProductListReducer from "./ProductListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	AccessReducer,
	HomeReducer,
	ProductEditReducer,
	ProductListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;

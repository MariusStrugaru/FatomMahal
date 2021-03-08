import actionsFunction from "./generated/ProductActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ProductApi from "../../api/ProductApi";
 
 actionsFunction.loadProductList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ProductApi
     .getProductList()
     .then(list => {
       dispatch(actionsFunction.loadProductSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;

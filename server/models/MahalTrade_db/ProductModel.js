import ProductModelGenerated from "./generated/ProductModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ProductModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProductModelGenerated,
  ...customModel
};

// const initialState= {product:[],productId:null,price:0,qty:0,updateQty:{price:0,qty:0}}

export const Reducer = (state, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        product: [...action.payload],
      };
    case "PRODUCT_ID":
      return {
        ...state,
        productId:action.payload
      };
    default:
      throw new Error("Unexpected action");
  }
};

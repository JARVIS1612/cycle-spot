const initialState = {
   all_products: [],
   bicycles: [],
   accessories: [],
};

export const fetchProductReducer = (state = initialState, action) => {
   switch (action.type) {
      case "FETCH_ALL_PRODUCTS":
         return { ...state, all_products: action.payload };
      case "FETCH_BICYCLES":
         return { ...state, bicycles: action.payload };
      case "FETCH_ACCESSORIES":
         return { ...state, accessories: action.payload };
      default:
         return state;
   }
};

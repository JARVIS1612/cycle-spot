const initialState = {
   cart: [],
};

export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_TO_CART": {
         state.cart.push(action.payload);
         return state;
      }
      case "REMOVE_FROM_CART": {
         return state.cart.filter((item) => item.SKU !== action.payload);
      }
      case "DISPLAY_CART": {
         return {...state, cart:action.payload};
      }
      default:
         return state;
   }
};

const initial_state = {
   authLoader: false,
   productLoader: false,
   addressLoader: false,
}

export const loaderReducer = (state=initial_state, action) => {
   switch(action.type){
      case "AUTH_LOADING":
         return {...state, authLoader: !state.authLoader}
      case "PRODUCT_LOADING":
         return {...state, productLoader: !state.productLoader}
      case "ADDRESS_LOADER":
         return {...state, addressLoader: !state.addressLoader}
   }
   return state
}
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { loaderReducer } from "./loaderReducer";
import { fetchProductReducer } from "./fetchProductReducer";
import { fetchCountryReducer } from "./fetchCountryReducer";

export const rootReducer = combineReducers({
   productReducer: fetchProductReducer,
   cartReducer: cartReducer,
   countryReducer: fetchCountryReducer,
   authReducer: authReducer,
   loaderReducer: loaderReducer,
});

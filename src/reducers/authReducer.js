const initial_state = sessionStorage.getItem("user")

export const authReducer = (state=initial_state, action) => {
   switch (action.type) {
      case "LOGIN":
         return action.user;
      case "LOGOUT":
         return "";
   }
   return state
};
export const setAuthUser = (token) => {
   sessionStorage.setItem("user", token);
   return { type: "LOGIN", user: token };
};

export const removeAuthUser = () => {
   sessionStorage.removeItem("user");
   return { type: "LOGOUT", user: undefined };
};

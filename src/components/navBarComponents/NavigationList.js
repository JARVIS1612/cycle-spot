import React from "react";
import { Link } from "react-router-dom";
import css from "./design/NavigationList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeAuthUser } from "../../actions/authActions";

export default function NavigationList({ showModal }) {
   const dispatch = useDispatch();
   const isAuthenticated = useSelector((state) => {
      return state.authReducer;
   });
   const signOut = () => {
      dispatch(removeAuthUser());
   };

   return (
      <>
         <div>
            <Link to="/" style={{ textDecoration: "none", color: "White" }}>
               <b className={css.hover_effect}>HOME</b>
            </Link>
         </div>
         <div>
            <Link to="/store" style={{ textDecoration: "none", color: "White" }}>
               <b className={css.hover_effect}>STORE</b>
            </Link>
         </div>
         <div>
            <Link to="/contact" style={{ textDecoration: "none", color: "White" }}>
               <b className={css.hover_effect}>CONTACT</b>
            </Link>
         </div>
         <div>
            {isAuthenticated ? (
               <Link to="/" style={{ textDecoration: "none", color: "White" }} onClick={signOut}>
                  <b className={css.hover_effect}>SIGN-OUT</b>
               </Link>
            ) : (
               <Link style={{ textDecoration: "none", color: "White" }} onClick={showModal}>
                  <b className={css.hover_effect}>SIGN-IN/SIGN-UP</b>
               </Link>
            )}
         </div>
      </>
   );
}

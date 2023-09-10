import { Badge } from "antd";
import { React } from "react";
import css from "./design/Navbar.module.css";
import NavigationList from "./NavigationList";
import { useLocation } from "react-router-dom";
import logoimg from "../../assets/imgs/logo-1-80x48.png";
import { ShoppingFilled, MenuOutlined } from "@ant-design/icons";

function Navbar(props) {
   let total_money = 0.0;
   const location = useLocation();
   const style = location.pathname === "/" || location.pathname === "/contact" ? { backgroundColor: "transparent" } : {};

   function display_hide_list() {
      let dropdownlist = document.getElementsByClassName("dropdown_list")[0];
      if (dropdownlist.style.display === "block") {
         dropdownlist.style.display = "none";
      } else {
         dropdownlist.style.display = "block";
      }
   }

   return (
      <>
         <div className={css.Navbar} style={style}>
            <span className={css.logo}>
               <img src={logoimg} height="50px" />
            </span>
            <div className={css.navigation}>
               <NavigationList showModal={props.showModal} />
            </div>

            <div className={css.cart} id="totalAmount">
               ${total_money}
               <div>
                  <ShoppingFilled onClick={props.open_close} className={css.cart_logo} style={{ fontSize: "20px", paddingLeft: "8px", marginRight: "-5px", cursor: "pointer" }} />
                  <Badge count={1} size="small" style={{ top: "-10px" }} />
               </div>
               <div className={css.hide_dropdown_button} onClick={display_hide_list}>
                  <MenuOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
               </div>
            </div>
         </div>

         <div className={css.dropdown_list + " dropdown_list"}>
            <NavigationList showModal={props.showModal} />
         </div>
      </>
   );
}

export default Navbar;

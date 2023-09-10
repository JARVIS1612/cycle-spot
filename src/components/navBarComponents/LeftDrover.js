import { Divider, Button } from "antd";
import { Link } from "react-router-dom";
import { React, useEffect, useRef } from "react";
import css from "./design/LeftDrover.module.css";
import img from "../../assets/imgs/bicycle-1.jpg";
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons";

export default function LeftDrover({ isvisible, open_close }) {
   const bodyRef = useRef(document.querySelector("body"));
   const extraRef = useRef(null);
   const cart_list_ = useRef(null);
   useEffect(() => {
      if (isvisible === "block") {
         bodyRef.current.style.overflow = "hidden";
         extraRef.current.style.display = "block";
         cart_list_.current.style.right = "0";
      } else {
         extraRef.current.style.display = "none";
         cart_list_.current.style.right = "-2000px";
         bodyRef.current.style.cursor = "";
         bodyRef.current.style.overflow = "";
      }
   }, [isvisible]);

   const cart_list = [
      {
         productID: 1,
         name: "Kryo X26 MTB – Model K",
         image: img,
         price: "$350",
         quantity: "13",
      },
      {
         productID: 2,
         name: "Kryo X26 MTB – Model K",
         image: img,
         price: "$350",
         quantity: "14",
      },
      {
         productID: 4,
         name: "Kryo X26 MTB – Model K",
         image: img,
         price: "$350",
         quantity: "1",
      },
      {
         productID: 5,
         name: "Kryo X26 MTB – Model K",
         image: img,
         price: "$350",
         quantity: "1",
      },
      {
         productID: 6,
         name: "Kryo X26 MTB – Model K",
         image: img,
         card_price: "$350",
         quantity: "1",
      },
   ];

   const iter = cart_list?.map((item) => {
      return (
         <div key={item.productID}>
            <div className={css.card_item}>
               <div className={css.card_img}>
                  <img src={process.env.REACT_APP_CONSUMER_URL + "" + item.image} alt={item.name} />
               </div>
               <div className={css.card_details}>
                  <div className={css.card_name}>{item.name}</div>
                  <div className={css.card_price}>{item.price}</div>
               </div>
               <div className={css.card_remove}>
                  <CloseCircleOutlined />
               </div>
            </div>
            <Divider style={{ margin: 10 }} />
         </div>
      );
   });

   return (
      <>
         <div className={css.extra_container} ref={extraRef} onClick={open_close}></div>
         <div className={css.l_drover} ref={cart_list_}>
            <div className={css.closed_sign}>
               <CloseOutlined style={{ fontSize: "24px", cursor: "pointer" }} onClick={open_close} />
            </div>
            <div className={css.cart_list}>{iter}</div>
            <hr />
            <div className={css.subtotal}>
               <div className={css.label}>Subtotal:</div>
               <div className={css.price}>$1,1500</div>
            </div>
            <hr />
            <Button className={css.cart_btn} onClick={open_close} type="primary" block>
               <Link to="shopping-cart">View Cart</Link>
            </Button>
            <br />
            <br />
            <Button className={css.cart_btn} type="primary" block>
               Checkout
            </Button>
         </div>
      </>
   );
}

import React from "react";
import { Button, Input } from "antd";
import css from "./design/CartTable.module.css";
import img from "../../assets/imgs/gloves-1.jpg";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function CartTable() {
   return (
      <div className={css.cartTable}>
         <table>
            <thead>
               <tr>
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className={css.close_sign_td}>
                     <span className={css.close_sign}>
                        <CloseCircleOutlined style={{ fontSize: "26px", fontWeight: "normal" }} />
                     </span>
                  </td>
                  <td className={css.productImg}>
                     <img src={img} alt="" width={75} />
                  </td>
                  <td className={css.productName} data-title="Product:">
                     Bicycle Gloves Gold - XL
                  </td>
                  <td data-title="Price:">$50.00</td>
                  <td data-title="Quantity:">
                     <div className="btns_add">
                        <input type="number" name="quantity" defaultValue={1} min={1} />
                     </div>
                  </td>
                  <td data-title="Subtotal:">$50.00</td>
               </tr>
            </tbody>
         </table>
         <div className={css.tableFooter}>
            <div>
               <Input placeholder="Coupon code" />
               <Button type="primary">APPLY COUPON</Button>
            </div>
            <div>
               <Button type="primary">UPDATE CART</Button>
            </div>
         </div>
      </div>
   );
}

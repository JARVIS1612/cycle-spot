import React from "react";
import { Button } from "antd";
import css from "./design/PriceRange.module.css";

export default function PriceRange({ setPrice, price_pair }) {
   if (!price_pair) return <></>;

   const iter = Object.keys(price_pair).map((element) => {
      return (
         <div key={element} style={{ display: "inline", marginRight: "5px" }}>
            <Button className={css.size} size="small" onClick={()=>setPrice(price_pair[element])} style={{borderRadius:0}}>
               {element}
            </Button>
         </div>
      );
   });
   return <div>{iter}</div>;
}

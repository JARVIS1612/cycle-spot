import React from "react";
import Card from "./Card";
import { List } from "antd";
import "./design/CardList.css";

export default function CardList({ product_list }) {
   
   return (
      <>
         <List
            grid={{
               gutter: 16,
               xs: 1,
               sm: 2,
               md: 4,
               lg: 4,
               xl: 4,
               xxl: 4,
            }}
            dataSource={product_list?product_list:[]}
            renderItem={(element) => (
               <List.Item>
                  <Card element={element} />
               </List.Item>
            )}
         />
      </>
   );
}

import { Card } from "antd";
import { React, useState } from "react";
import css from "./design/Card.module.css";
import {useNavigate} from "react-router-dom";
import { ShoppingFilled } from "@ant-design/icons";

const { Meta } = Card;

function Cards({ element }) {
   const [visibility, setVisibility] = useState("none");
   
   const navigate = useNavigate();
   const gotoProductDetails = () => {
      navigate('/product-details/'+element.SKU);
   }

   return (
      <>
         <Card
            onMouseOver={()=>setVisibility("block")}
            onMouseLeave={()=>setVisibility("none")}
            hoverable
            style={{borderRadius:0}}
            cover={<img alt={element.name} onClick={gotoProductDetails} src={process.env.REACT_APP_ADMIN_URL+""+element.image} style={{borderRadius: "0px"}}/>}
         >
            <div>
            {/* <Rate disabled defaultValue={element.rating} style={{color:"gray"}} /> */}
            </div>
            <Meta title={element.name} description={`${element.price}$`} />
            <br />
            {/* <PriceRange setPrice={setPrice} price_pair={element.pair} /> */}
            <div id="icon" className={css.addtocart_icon} style={{display: visibility}} >
               <ShoppingFilled  className="icon" style={{ fontSize: "20px" }} />
            </div>
         </Card>
      </>
   );
}

export default Cards;

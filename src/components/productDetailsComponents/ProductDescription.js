import SubNavbar from "./SubNavbar";
import getRequest from "../../API/getRequest";
import ErrorPage from "../../pages/ErrorPage";
import postRequest from "../../API/postRequest";
import { React, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Radio, Image, Button, Tooltip } from "antd";
import CardList from "../cardListComponents/CardList";
import css from "./design/ProductDescription.module.css";

export default function ProductDescription() {
   window.scrollTo({ top: 0 });
   const location = useLocation();
   const SKU = location.pathname.split("/")[2];
   const [value3, setValue3] = useState("");
   const [product, setProduct] = useState({});
   const [isValidSKU, setIsValidSKU] = useState(true);
   const [relatedProduct, setRelatedProducs] = useState([]);

   const fetchData = async (category, SKU) => {
      if (category === "Bicycle") {
         let bicycle_list = await getRequest(process.env.REACT_APP_CONSUMER_URL + "productFilter?minPrice=0&maxPrice=100000&category=Bicycle");
         bicycle_list = bicycle_list.data.data
            ?.reverse()
            .filter((item) => item.SKU !== SKU)
            .slice(0, 4);
         setRelatedProducs(bicycle_list);
      } else if (category === "Accessory") {
         let accessory_list = await getRequest(process.env.REACT_APP_CONSUMER_URL + "productFilter?minPrice=0&maxPrice=100000&category=Accessory");
         accessory_list = accessory_list.data.data
            ?.reverse()
            ?.filter((item) => item.SKU !== SKU)
            ?.slice(0, 4);
         setRelatedProducs(accessory_list);
      }
   };

   const getProduct = async () => {
      try{
         const response = await postRequest(process.env.REACT_APP_CONSUMER_URL + "getBySKU", { SKU: SKU });
         console.log(response);
         setProduct(response.data.data);
         fetchData(response.data.data.category, response.data.data.SKU);
      }
      catch(error)
      {
         setIsValidSKU(false)
      }
   };
   useEffect(() => {
      getProduct();
   }, []);

   const sizeArray = () => {
      const pair = [];
      product?.size?.map((element) => {
         pair.push({ label: element, value: element });
      });
      if (pair[0]?.label) return pair;
      return [];
   };

   const onChange3 = ({ target: { value } }) => {
      setValue3(value);
   };

   const fun = (e) => {
      const container = document.querySelector(".product_description_img");
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + container.offsetWidth / 2;
      const centerY = containerRect.top + container.offsetHeight / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = centerX - mouseX;
      const deltaY = centerY - mouseY;

      const image = container.querySelector(".zoom-image");
      image.style.transform = `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px) scale(1.8)`;
   };

   const revfun = (e) => {
      const container = document.querySelector(".product_description_img");
      const image = container.querySelector(".zoom-image");
      image.style.transform = `translate(${0}px, ${0}px) scale(1)`;
   };

   return (
      <>
         {isValidSKU ? (
            <div className={css.outer_product_desc}>
               <div className={css.product_description}>
                  <div className={css.product_description_inner}>
                     <div className={css.img_text}>
                        <div className={css.product_description_img + " product_description_img"}>
                           <Image className={css.zoom_image + " zoom-image"} src={process.env.REACT_APP_ADMIN_URL + "" + product?.image} onMouseMove={fun} onMouseLeave={revfun} alt="Image" />
                        </div>

                        <div className={css.product_description_text}>
                           <div className="path">
                              <Link className="links" to="/">Home</Link> / <Link className="links" to={product?.category==="Bicycle"?"/store/bicycles":"/store/accessories"}>{product?.category}</Link> / {product?.name}
                           </div>
                           <div className={css.catagory}>
                              <h3>{product?.category}</h3>
                           </div>
                           <div className={css.product_name + " group-3"}>{product?.name}</div>
                           <div className={css.cost}>
                              <div className={css.amount}>${product?.price}</div> & Free Shipping
                           </div>
                           <div className={css.text_dis}>{product?.productDetails}</div>

                           <div className={css.productSize}>
                              <div>
                                 <Radio.Group options={sizeArray()} onChange={onChange3} value={value3} optionType="button" />
                              </div>
                           </div>
                           <hr />
                           <div className={css.btns_add}>
                              <div>
                                 {value3 || !sizeArray()?.length ? (
                                    <Button type="primary">ADD TO CART</Button>
                                 ) : (
                                    <Tooltip title="Select Size first">
                                       <Button disabled type="primary">
                                          ADD TO CART
                                       </Button>
                                    </Tooltip>
                                 )}
                              </div>
                           </div>
                           <hr />
                           <span>
                              Category: <span className={css.catagory}>{product?.category}</span>
                           </span>
                        </div>
                     </div>
                     <br />
                     <br />
                     <SubNavbar product={product}></SubNavbar>
                     <div>
                        <div className={css.related_product_title + " group-3"}>Related Products</div>
                        <CardList title="Related products" product_list={relatedProduct ? relatedProduct : []} />
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <ErrorPage status_code="404"></ErrorPage>
         )}
      </>
   );
}

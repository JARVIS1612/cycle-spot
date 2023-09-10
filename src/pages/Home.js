import { React } from "react";
import { Button } from "antd";
import css from "./design/Home.module.css";
import Events from "../components/homePageComponents/Events";
import Catalog from "../components/homePageComponents/Catalog";
import AboutUs from "../components/homePageComponents/AboutUs";
import CardList from "../components/cardListComponents/CardList";
import HomePageOne from "../components/homePageComponents/HomePageOne";
import FeaturedCycle from "../components/homePageComponents/FeaturedCycle";

export default function Home() {

   const new_arrivals_list = [
      {
         name: "Tejas Sport 26T",
         SKU: 76820,
         image: "public\\assets\\1691989614323-tejas sports 26T-fotor-bg-remover-20230814101537.png",
         price: 200,
      },

      {
         name: "Cowboy",
         SKU: 82496,
         image: "public\\assets\\1691989638963-cowboy-fotor-bg-remover-20230814101455.png",
         price: 200,
      },
      {
         name: "Nebula",
         SKU: 79495,
         image: "public\\assets\\1691989676074-nebula-fotor-bg-remover-2023081410814.png",
         price: 100,
      },
      {
         name: "Milano",
         SKU: 97807,
         image: "public\\assets\\1691989729491-milano-fotor-bg-remover-202308141083.png",
         price: 400,
      },
   ];

   const accessories = [
      {
         name: "Red Gloves Premium",
         SKU: 45446,
         image: "public\\assets\\1691990478429-red_gloves-fotor-bg-remover-2023081410438.png",
         price: 20,
      },
      {
         name: "Multipurpose Head Band",
         SKU: 19300,
         image: "public\\assets\\1691990758288-multipurpose_head_band-fotor-bg-remover-2023081410419.png",
         price: 18,
      },
      {
         name: "Special Hero Jersey",
         SKU: 56867,
         image: "public\\assets\\1691990809202-jersey-fotor-bg-remover-2023081410353.png",
         price: 60,
      },
      {
         name: "Red Helmet",
         SKU: 52424,
         image: "public\\assets\\1691991103195-helmet-4-800x800.jpg",
         price: 155,
      },
   ];

   return (
      <div>
         <div className={css.outermost}>
            <div className={css.leftmost}>
               <HomePageOne />
            </div>
            <div className={css.rightmost}></div>
         </div>

         <div className={css.NewArraivalElement}>
            <div className={css.NewArraivalTitle + " group-3"}>New Arrivals</div>
            <div className={css.NewArraivalList}>
               <CardList product_list={new_arrivals_list} />
            </div>
         </div>

         <Catalog />
         <AboutUs />

         <div className={css.NewArraivalElement}>
            <div className={css.NewArraivalTitle + " group-3"}>Explore Accesory</div>
            <div className={css.NewArraivalList}>
               <CardList product_list={accessories} />
               <div className={css.view_all_button_center}>
                  <Button type="primary">VIEW ALL</Button>
               </div>
            </div>
         </div>

         <Events />
         <FeaturedCycle />
      </div>
   );
}

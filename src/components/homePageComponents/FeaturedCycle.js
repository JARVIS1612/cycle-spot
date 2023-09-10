import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import img from "../../assets/imgs/bicycle-1.jpg";
import css from "./design/FeaturedCycle.module.css";

export default function FeaturedCycle() {
   const content_css = {
      backgroundImage: `linear-gradient(rgba(8, 82, 156, 0), rgba(0, 0, 0, 0.655), rgb(0, 0, 0)
      ),url(${img})`,
      color: "White",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "80vh",
      width: "100%",
   };
   return (
      <>
         <div style={content_css}>
            <div className={css.feature_content}>
               <div className="group-2">
                  <>The All New</>
               </div>
               <div className="group-3">
                  <>Kryo X26 MTB Is Here</>
               </div>
               <div>
                  Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Mauris in erat justo.
               </div>
               <div>
                  <br />
                  <Link to="/store">
                     <Button type="primary">SHOP NOW</Button>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}

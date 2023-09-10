import React from "react";
import img1 from "../../assets/imgs/img1.jpg";
import img2 from "../../assets/imgs/img2.jpg";
import img3 from "../../assets/imgs/img3.jpg";
import img4 from "../../assets/imgs/img4.jpg";
import img5 from "../../assets/imgs/img5.jpg";
import css from "./design/AboutUs.module.css";

export default function AboutUs() {
   return (
      <div className={css.outerMost}>
         <div>
            <div className="group-3" style={{ textAlign: "center" }}>
               <h3>Why Choose KRYO?</h3>
            </div>
         </div>

         <div className={css.imageCollection}>
            <div className={css.imgTableFirstRow}>
               <div className={css.wp_caption}>
                  <img className={css.demo} src={img1} alt="Image" />
                     <div className={css.gradient_overlay}></div>
                  <div className={css.wp_caption_text}>
                     <div className="group-4">Light Weight</div>
                     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</div>
                  </div>
               </div>
               <div className={css.wp_caption}>
                  <div className={css.gradient_overlay}></div>
                  <img className={css.demo} src={img2} alt="Image" />
                  <div className={css.wp_caption_text}>
                     <div className="group-4">Lifetime Warrenty</div>
                     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</div>
                  </div>
               </div>
            </div>
            <div className={css.imgTableSecRow}>
               <div className={css.wp_caption}>
                  <div className={css.gradient_overlay}></div>
                  <img className={css.demo} src={img3} alt="Image" />
                  <div className={css.wp_caption_text}>
                     <div className="group-4">Biggest Service Network</div>
                  </div>
               </div>
               <div className={css.wp_caption}>
                  <div className={css.gradient_overlay}></div>
                  <img className={css.demo} src={img4} alt="Image" />
                  <div className={css.wp_caption_text}>
                     <div className="group-4">99% Assembled Delivery</div>
                  </div>
               </div>
               <div className={css.wp_caption}>
                  <div className={css.gradient_overlay}></div>
                  <img className={css.demo} src={img5} alt="Image" />
                  <div className={css.wp_caption_text}>
                     <div className="group-4">Free First Bike Service</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

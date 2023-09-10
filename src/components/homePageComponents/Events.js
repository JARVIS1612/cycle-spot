import React from "react";
import { Button } from "antd";
import css from "./design/Events.module.css";
import outercss from "./design/AboutUs.module.css";
import img2 from "../../assets/imgs/cycling-img.jpg";
import { PlayCircleFilled } from "@ant-design/icons";

export default function Events() {
   return (
      <div className={css.event_div}>
         <div>
            <div className="group-3" style={{ textAlign: "center" }}>
               Join #GoEcoBiking Programme
            </div>
         </div>

         <div className={css.wp_caption + " " + css.wp_caption}>
            <div className={css.gradient_overlay}></div>
            <img className={css.demo} src={img2} alt="Image" />
            <div className={css.wp_caption_text}>
               <div>
                  <PlayCircleFilled style={{ fontSize: "60px", cursor: "pointer" }} />
               </div>
               <div className="group-4">Watch Full Video</div>
            </div>
         </div>
         <div className={css.text_button}>
            <div className={css.text + " group-4"}>
               <h2>Duis aute irure dolor in reprehenderit velit.</h2>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </div>
            <br></br>
            <div className={css.button}>
               <Button type="primary">Join Telegram Group</Button>
            </div>
         </div>
      </div>
   );
}

import ColorTheme from "./ColorTheme";
import { CloseOutlined } from "@ant-design/icons";
import css from "./design/ThemePallate.module.css";
import { React, useState, useEffect, useRef } from "react";
import themelogo from "../../assets/imgs/icons8-theme-50.png";

export default function ThemePallate({ setColor, setFont }) {
   const [isvisible, setisvisible] = useState("none");
   const theme_cart_list_ = useRef(null);
   const button_ref = useRef(null);

   const open_close = () => {
      if (isvisible === "none") setisvisible("block");
      else setisvisible("none");
   };

   useEffect(() => {
      if (isvisible === "block") {
         button_ref.current.style.right = "260px";
         theme_cart_list_.current.style.right = "0";
      } else {
         theme_cart_list_.current.style.right = "-500px";
         button_ref.current.style.right = "0px";
      }
   }, [isvisible]);

   return (
      <>
         <div className={css.buttondisplay} ref={button_ref} onClick={open_close}>
            <img src={themelogo} alt="" width={20} />{" "}
            <div>
               <>Customise</>
            </div>
         </div>
         <div className={css.l_drover} ref={theme_cart_list_}>
            <div className={css.closed_sign}>
               <div>Cycle Shop</div>
               <div>
                  <CloseOutlined style={{ fontSize: "24px", cursor: "pointer" }} onClick={open_close} />
               </div>
            </div>
            <div className={css.content}>
               Use the template as-is or try different colors and fonts from the options below.
               <div className={css.tryOtherClrs}>
                  <div className={css.text}>Try Other Colors</div>
                  <div className={css.resetclr} onClick={() => setColor("rgb(223, 69, 62)")}>
                     Default
                  </div>
               </div>
               <div className={css.ThemeButton} style={{ marginTop: "10px", width: "90%" }}>
                  <p style={{ margin: "0", fontSize: "Small" }}>DEFAULT COLORS</p>
                  <div>
                     <ColorTheme mainColors={["rgb(223, 69, 62)", "rgb(182, 45, 37)"]} />
                  </div>
               </div>
               <div className={css.diffTheme}>
                  <div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(142, 67, 240)")}>
                        <ColorTheme mainColors={["rgb(142, 67, 240)", "rgb(99, 0, 226)"]} />
                     </div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(223, 69, 62)")}>
                        <ColorTheme mainColors={["rgb(223, 69, 62)", "rgb(182, 45, 37)"]} />
                     </div>
                  </div>
                  <div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(255, 66, 179)")}>
                        <ColorTheme mainColors={["rgb(255, 66, 179)", "rgb(255, 0, 153)"]} />
                     </div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(255, 106, 151)")}>
                        <ColorTheme mainColors={["rgb(255, 106, 151)", "rgb(250, 3, 107)"]} />
                     </div>
                  </div>
                  <div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(249, 195, 73)")}>
                        <ColorTheme mainColors={["rgb(249, 195, 73)", "rgb(255, 177, 0)"]} />
                     </div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(48, 199, 181)")}>
                        <ColorTheme mainColors={["rgb(48, 199, 181)", "rgb(182, 45, 37)"]} />
                     </div>
                  </div>
                  <div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(48, 199, 181)")}>
                        <ColorTheme mainColors={["rgb(48, 199, 181)", "rgb(0, 172, 151)"]} />
                     </div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(27, 174, 112)")}>
                        <ColorTheme mainColors={["rgb(27, 174, 112)", "rgb(6, 117, 46)"]} />
                     </div>
                  </div>
                  <div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(47, 193, 255)")}>
                        <ColorTheme mainColors={["rgb(47, 193, 255)", "rgb(8, 172, 242)"]} />
                     </div>
                     <div className={css.dfThemeButton} onClick={() => setColor("rgb(65, 117, 252)")}>
                        <ColorTheme mainColors={["rgb(65, 117, 252)", "rgb(8, 74, 243)"]} />
                     </div>
                  </div>
               </div>
               <br />
               <hr />
               <div className={css.tryOtherClrs}>
                  <div className={css.text}>Try Other Fonts</div>
                  <div
                     className={css.resetclr}
                     onClick={() => {
                        setFont("Racing Sans One");
                     }}
                  >
                     Default
                  </div>
               </div>
               <div
                  className={css.FontButton}
                  style={{ fontFamily: "Racing Sans One" }}
                  onClick={() => {
                     setFont("Racing Sans One");
                  }}
               >
                  Racing Sans One / Roboto
               </div>
               <div className={css.FontTheme}>
                  <div>
                     <div
                        style={{ fontFamily: "Bebas Neue" }}
                        onClick={() => {
                           setFont("Bebas Neue");
                        }}
                     >
                        Aa
                     </div>
                     <div
                        style={{ fontFamily: "Josefin Sans" }}
                        onClick={() => {
                           setFont("Josefin Sans");
                        }}
                     >
                        Aa
                     </div>
                     <div
                        style={{ fontFamily: "Lato" }}
                        onClick={() => {
                           setFont("Lato");
                        }}
                     >
                        Aa
                     </div>
                     <div
                        style={{ fontFamily: "Lobster" }}
                        onClick={() => {
                           setFont("Lobster");
                        }}
                     >
                        Aa
                     </div>
                  </div>
                  <div>
                     <div
                        style={{ fontFamily: "Oswald" }}
                        onClick={() => {
                           setFont("Oswald");
                        }}
                     >
                        Aa
                     </div>
                     <div
                        style={{ fontFamily: "Playfair Display" }}
                        onClick={() => {
                           setFont("Playfair Display");
                        }}
                     >
                        Aa
                     </div>
                     <div
                        style={{ fontFamily: "Preahvihear" }}
                        onClick={() => {
                           setFont("Preahvihear");
                        }}
                     >
                        Aa
                     </div>
                     <div
                        style={{ fontFamily: "Roboto Mono" }}
                        onClick={() => {
                           setFont("Roboto Mono");
                        }}
                     >
                        Aa
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

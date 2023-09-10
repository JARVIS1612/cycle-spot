import React from "react";
import Catagories from "./Catagories";
import img from "../../assets/imgs/bicycle-1.jpg";
import img1 from "../../assets/imgs/bicycle-2.jpg";
import img2 from "../../assets/imgs/bicycle-3.jpg";

export default function Catalog() {

   let templates = [
      {
         id: 1,
         img: `url(${img})`,
         catagories: "Mountain Bikes",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing edivt. Ut edivt tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
         key_points: ["Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet."],
      },
      {
         id: 2,
         img: `url(${img1})`,
         catagories: "City Bikes",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing edivt. Ut edivt tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
         key_points: ["Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet."],
      },
      {
         id: 3,
         img: `url(${img2})`,
         catagories: "Speciality Bikes",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing edivt. Ut edivt tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
         key_points: ["Lorem sit amet asdd.", "Lorem sit amet.", "Lorem sit amet.", "Lorem sit amet asdasd.", "Lorem sit amet.", "Lorem sit amet."],
      },
   ];

   const iter = templates.map((element) => {
      return (
         <div key={element.id}>
            <Catagories element={element}></Catagories>
         </div>
      );
   });

   return iter;
}

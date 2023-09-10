import React from "react";
import { Avatar, Rate, Empty } from "antd";
import { UserOutlined } from "@ant-design/icons";
import css from "./design/OldReviews.module.css";

export default function OldReviews({ reviews }) {
   if (!reviews?.length)
      return (
         <>
            <Empty description="No Reviews" />
            <br />
         </>
      );

        const reviews_ = [
          {
            rating:4.5,
            reviewDescription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero aliquid assumenda quisquam hic illum corrupti! Alias fugit fugiat quaerat hic neque doloribus maxime, consequatur natus. Quas, culpa ad earum ut accusamus minima sunt ducimus consequatur laborum tenetur atque optio fuga nihil harum expedita recusandae voluptate necessitatibus doloribus, distinctio natus!"
          },
          {
            rating:3.9,
            reviewDescription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero aliquid assumenda quisquam hic illum corrupti! Alias fugit fugiat quaerat hic neque doloribus maxime, consequatur natus. Quas, culpa ad earum ut accusamus minima sunt ducimus consequatur laborum tenetur atque optio fuga nihil harum expedita recusandae voluptate necessitatibus doloribus, distinctio natus!"
          },
        ]

   const iter = reviews_.map((element) => {
      return (
         <div className={css.ReviewTemplate}>
            <div className={css.avatar_icon}>
               <Avatar size={56} icon={<UserOutlined />} />
            </div>
            <div className={css.review_text}>
               <div className={css.review_rating}>
                  <Rate disabled defaultValue={Math.floor(element.rating)} style={{ color: "gray" }} />
               </div>
               <div className={css.reviwe_text}>
               {element.reviewDescription}
               </div>
            </div>
         </div>
      );
   });
   return <>{iter}</>;
}

import React from "react";
import { Button } from "antd";
import css from "./design/ReviewForm.module.css";
import { Form, Input, Rate, Checkbox } from "antd";

export default function ReviewForm() {
   return (
      <div className={css.review_form}>
         <Form>
            <div className={css.title}>Your review is valueable for others</div>
            <div className={css.subtitle}>Your email address will not be published. Required fields are marked *</div>
            <div className={css.rating_field}>
               <div>Your Rating*</div>
               <div>
                  <Rate style={{ color: "gray" }} />
               </div>
            </div>
            <div className={css.review_field}>
               <div>Your Review</div>
               <div>
                  <Input.TextArea style={{ borderRadius: "0px" }} />
               </div>
            </div>
            <div className={css.user_details_fields}>
               <div className={css.name_field}>
                  <div>Name*</div>
                  <div>
                     <Input style={{ borderRadius: "0px" }} />
                  </div>
               </div>
               <div className={css.email_field}>
                  <div>Email*</div>
                  <div>
                     <Input style={{ borderRadius: "0px" }} />
                  </div>
               </div>
            </div>
            <div className={css.checkbox}>
               <Checkbox /> <span>&nbsp;&nbsp;Save my name, email, and website in this browser for the next time I comment.</span>
            </div>
            <div className={css.submit_button}>
               <Button type="primary">SUBMIT</Button>
            </div>
         </Form>
      </div>
   );
}

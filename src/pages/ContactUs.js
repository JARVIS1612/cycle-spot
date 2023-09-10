import { React, useState } from "react";
import css from "./design/ContactUs.module.css";
import { Button, Form, Input, Modal, Result, Spin } from "antd";
import { ShopFilled, ToolOutlined, FundOutlined } from "@ant-design/icons";

export default function ContactUs() {
   const [form] = Form.useForm();
   const [modal2Open, setModal2Open] = useState(false);
   const [isLoading, setLoading] = useState(true)
   const onFinish = (element) => {
      setModal2Open(true);
      form.resetFields();
   };

   return (
      <>
         <Modal centered open={modal2Open} footer={false} onCancel={() => setModal2Open(false)}>
            <Result status="success" title="Messege Sent !" subTitle="Our representative will contact you soon !" />
         </Modal>
         <div className={css.title_div}>
            <div className="group-1">Contact Us</div>
         </div>
         <br />
         <div className={css.map_div}>
            <Spin size="large" spinning={isLoading} tip="Loading...">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.8937173963029!2d72.56520133353041!3d23.039376732291313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848acdd45649%3A0x1edfa427054ecd91!2siView%20Labs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1692257016877!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  onLoad={()=>{setLoading(false)}}
                  referrerPolicy="no-referrer-when-downgrade"
                  title="googleMAP"
               ></iframe>
            </Spin>
         </div>
         <div className={css.numbers_icon}>
            <div>
               <span>
                  <ShopFilled style={{ fontSize: 48 }} />
               </span>
               <div className={css.numbers}>1 800 755 60 23</div>
               <div>Dealership Related Enquiries</div>
            </div>
            <div>
               <span>
                  <ToolOutlined style={{ fontSize: 48 }} />
               </span>
               <div className={css.numbers}>1 800 755 60 23</div>
               <div>Service Related Enquiries</div>
            </div>
            <div>
               <span>
                  <FundOutlined style={{ fontSize: 48 }} />
               </span>
               <div className={css.numbers}>1 800 755 60 23</div>
               <div>Sales Related Enquiries</div>
            </div>
         </div>
         <div className={css.contactUsFormDetails}>
            <div className={css.contactUsForm}>
               <div className={css.form}>
                  <div className={css.formtitle + " group-3"}>Let's Get in Touch</div>
                  <Form
                     form={form}
                     style={{
                        height: "fit-content",
                     }}
                     name="signup"
                     onFinish={onFinish}
                  >
                     <div className={css.inline_fields}>
                        <Form.Item
                           name="firstname"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your First Name!",
                              },
                           ]}
                        >
                           <Input placeholder="First Name" />
                        </Form.Item>

                        <Form.Item
                           name="lastname"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your Last Name!",
                              },
                           ]}
                        >
                           <Input placeholder="Last Name" />
                        </Form.Item>
                     </div>

                     <div>
                        <Form.Item
                           name="email"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your Email!",
                              },
                              {
                                 type: "email",
                              },
                           ]}
                        >
                           <Input placeholder="Email" />
                        </Form.Item>
                     </div>
                     <div>
                        <Form.Item
                           name="message"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your Message!",
                              },
                           ]}
                        >
                           <Input.TextArea rows={8} placeholder="Enter Your Message" />
                        </Form.Item>
                     </div>
                     <div className={css.buttons}>
                        <Button type="primary" htmlType="submit">
                           SEND MESSAGE
                        </Button>
                     </div>
                  </Form>
               </div>
            </div>
            <div className={css.contactUsDetails}>
               <div className="group-3">Contact Details</div>
               <div>
                  <span className="group-4">Our Hours</span>
                  <p>10:00 AM – 22.00 PM</p>
                  <p>Monday – Friday</p>
               </div>
               <div>
                  <span className="group-4">Location</span>
                  <p>212 7th St SE, Washington, DC 20003, USA</p>
               </div>
               <div>
                  <span className="group-4">Contact Us</span>
                  <p>Phone: 1 800 755 60 20</p>
                  <p>Email: contact@company.com</p>
               </div>
            </div>
         </div>
      </>
   );
}

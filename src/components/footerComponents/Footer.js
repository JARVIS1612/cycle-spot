import React from "react";
import {Link} from "react-router-dom"
import { Col, Row, Space } from "antd";
import css from "./design/Footer.module.css";
import logoimg from "../../assets/imgs/logo-1-80x48.png";
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, TwitterOutlined } from "@ant-design/icons";

export default function Footer() {
   return (
      <>
         <div className={css.footer}>
            <Row gutter={[0, 10]}>
               <Col xs={24} sm={6}>
                  <img src={logoimg} height="90px" />
               </Col>
               <Col xs={24} sm={6}>
                  <div className="group-5">Usefull Links</div>
                  <Link to="/"><p className={css.links}>Home</p></Link>
                  <Link to="/store" ><p className={css.links}>Shop</p></Link>
                  <Link to="/contact" ><p className={css.links}>Contact Us</p></Link>
                  <p className={css.links}>About Us</p>        
               </Col>
               <Col xs={24} sm={6}>
                  <div className="group-5">Our Collection</div>
                  <Link to="/store/bicycles" className={css.links}><p>Mountain Bikes</p></Link>
                  <Link to="/store/bicycles" className={css.links}><p>City Bikes</p></Link>
                  <Link to="/store/bicycles" className={css.links}><p>Speciality Bikes</p></Link>
                  <Link to="/store/bicycles"><p className={css.links}>Electric Bikes</p></Link>
               </Col>
               <Col xs={24} sm={6}>
                  <div className="group-5">Account</div>
                  <p className={css.links}>Customer Login</p>
                  <p className={css.links}>Dealer Login</p>
                  <p className={css.links}>Address</p>
                  <p className={css.links}>Payment Methods</p>
               </Col>
            </Row>
         </div>
         <hr />
         <div className={css.lower_footer}>
            <div>Copyright © 2023 Cycle Shop</div>
            <div>
               <Space>
                  <FacebookOutlined style={{fontSize: 18}} />
                  <InstagramOutlined style={{fontSize: 18}}/>
                  <TwitterOutlined style={{fontSize: 18}}/>
                  <YoutubeOutlined style={{fontSize: 18}}/>
               </Space>
            </div>
         </div>
      </>
   );
}

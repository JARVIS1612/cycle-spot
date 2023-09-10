import { React, useEffect } from "react";
import postRequest from "../../API/postRequest";
import css from "./design/SignUpForm.module.css";
import { authLoading } from "../../actions/setLoader";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Select, message } from "antd";
import { PHONENUMBER, ZIPCODE, PASSWORD } from "../../utilities/regex";
import { getAllCountries, getAllStates, getAllCities, getAllCountryCodes } from "../../actions/fetchCountryActions";

export default function SignUpForm({setIsModalOpen}) {
   const [messageApi, contextHolder] = message.useMessage();
   const [form] = Form.useForm();
   const dispatch = useDispatch();

   const countryList = useSelector((state) => {
      return state.countryReducer.countries;
   });

   const stateList = useSelector((state) => {
      return state.countryReducer.states;
   });

   const cityList = useSelector((state) => {
      return state.countryReducer.cities;
   });

   const countryCode = useSelector((state)=>{
      return state.countryReducer.countryCode
   })


   useEffect(() => {
      dispatch(getAllCountries());
      dispatch(getAllCountryCodes());
   }, []);

   const onClickCountry = (target) => {
      dispatch(getAllStates(target));
   };

   const onClickState = (target) => {
      dispatch(getAllCities(target));
   };

   const userSignUp = async (req_body) => {
      try {
         dispatch(authLoading());
         const responseData = await postRequest(process.env.REACT_APP_CONSUMER_URL + "signup", req_body);
         messageApi.open({
            type: "success",
            content: `Welcome ${responseData.data.data.firstName}, Please Sign In :)`,
         });
         dispatch(authLoading());
         form.resetFields();
         setIsModalOpen(false)
      } catch (error) {
         console.error(error);
         if (error.message === "Network Error")
            messageApi.open({
               type: "error",
               content: "Server not respond, try after sometime :(",
            });
         else {
            messageApi.open({
               type: "error",
               content: error.data.message,
            });
         }
         dispatch(authLoading());
      }
   };

   const onFinish = (values) => {
      const req_body = {
         firstName: values.firstname,
         lastName: values.lastname,
         email: values.email,
         password: values.password,
         confirmPassword: values.password,
         phoneNumber: values.phonenumber,
         address: {
            address1: values.address,
            pincode: values.pincode,
            city: values.city,
            state: values.state,
            country: values.country,
         },
      };
      userSignUp(req_body);
   };

   const prefixSelector = (
      <Form.Item name="prefix" noStyle>
         <Select style={{ width: 70 }} options={countryCode} showSearch>
         </Select>
      </Form.Item>
   );
   return (
      <div className={css.box}>
         {contextHolder}
         <Form form={form} name="signup" onFinish={onFinish} autoComplete="off" layout="vertical" style={{ maxWidth: 600 }}>
            <Form.Item
               name="firstname"
               rules={[
                  {
                     required: true,
                     message: "Please enter First Name!",
                  },
               ]}
               label="First Name"
            >
               <Input placeholder="Enter First Name" />
            </Form.Item>

            <Form.Item
               name="lastname"
               rules={[
                  {
                     required: true,
                     message: "Please enter Last Name!",
                  },
               ]}
               label="Last Name"
            >
               <Input placeholder="Enter Last Name" />
            </Form.Item>

            <Form.Item
               name="email"
               rules={[
                  {
                     required: true,
                     type: "email",
                     message: "Please Enter Email!",
                  },
               ]}
               label="Email"
            >
               <Input placeholder="Ex. abc@xyz.com" />
            </Form.Item>
            <Form.Item
               name="phonenumber"
               rules={[
                  {
                     required: true,
                     message: "Please input your phone number!",
                  },
                  {
                     pattern: PHONENUMBER,
                     message: "Input valid phone number !",
                  },
               ]}
               label="Phone Number"
            >
               <Input placeholder="Ex. 0123456789" addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
               rules={[
                  {
                     required: true,
                     message: "Please input your Address!",
                  },
               ]}
               name="address"
               label="Address"
            >
               <Input placeholder="Enter Address" />
            </Form.Item>

            <Form.Item
               name="zipcode"
               rules={[
                  {
                     required: true,
                     message: "Please input your Zip Code",
                  },
                  {
                     pattern: ZIPCODE,
                     message: "Please enter a valid Zip Code!",
                  },
               ]}
               label="Zip Code"
            >
               <Input placeholder="Ex. 123456" />
            </Form.Item>

            <Form.Item
               name="country"
               rules={[
                  {
                     required: true,
                     message: "Please select country",
                  },
               ]}
               label="Country"
            >
               <Select
                  onChange={onClickCountry}
                  options={[...countryList, { label: "None", value: "none" }]}
                  placeholder="Select Country"
                  showSearch
                  // optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                  filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
               />
            </Form.Item>
            <Form.Item
               name="state"
               rules={[
                  {
                     required: true,
                     message: "Please input your State",
                  },
               ]}
               label="State"
            >
               <Select
                  onChange={onClickState}
                  options={[...stateList, { label: "None", value: "none" }]}
                  placeholder="Select State"
                  showSearch
                  // optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                  filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
               />
            </Form.Item>
            <Form.Item
               name="city"
               rules={[
                  {
                     required: true,
                     message: "Please input your City",
                  },
               ]}
               label="City"
            >
               <Select
                  options={[...cityList, { label: "None", value: "none" }]}
                  placeholder="Select City"
                  filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                  filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
               />
            </Form.Item>
            <Form.Item
               name="password"
               rules={[
                  {
                     required: true,
                     message: "Please input your password!",
                  },
                  {
                     pattern: PASSWORD,
                     message: "Enter Password as per instruction",
                  },
               ]}
               help="Your Password must contains 8 latters having at-least one capital latter, one special character and one digit !"
               label="Password"
            >
               <Input.Password placeholder="Enter password as per description" />
            </Form.Item>
            <div className={css.buttons}>
               <Button type="primary" htmlType="submit">
                  SIGN UP
               </Button>
               <Button htmlType="reset">Reset</Button>
            </div>
         </Form>
      </div>
   );
}

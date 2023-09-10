import { React } from "react";
import { Modal, Tabs, Spin } from "antd";
import { useSelector } from "react-redux";
import SignInForm from "../components/authenticationComponents/SignInForm";
import SignUpForm from "../components/authenticationComponents/SignUpForm";

export default function Authentication({ isModalOpen, setIsModalOpen }) {
   const isLoading = useSelector((state) => {
      return state.loaderReducer.authLoader;
   });

   const items = [
      {
         key: "1",
         label: `Sign In`,
         children: <SignInForm setIsModalOpen={setIsModalOpen} />,
      },
      {
         key: "2",
         label: `Sign Up`,
         children: <SignUpForm setIsModalOpen={setIsModalOpen}/>,
      },
   ];

   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} cancelText="RESET">
            <Spin size="large" spinning={isLoading} tip="Loading...">
               <Tabs items={items} defaultActiveKey={1} />
            </Spin>
         </Modal>
      </>
   );
}

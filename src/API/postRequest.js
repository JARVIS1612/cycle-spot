import axios from "axios";

const postRequest = async (url, body, header={}) => {
   try {
      const response = await axios.post(url, body, {
         headers: { "Content-Type": "application/json", ...header },
         timeout: 5000,
         responseType: "json",
         withCredentials: true,
      });
      return response;
   } catch (error) {
      if (error.response) {
         console.error("Error response:", error.response);
         throw error.response;
      } else {
         throw error;
      }
   }
};

export default postRequest;

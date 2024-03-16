import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/v1";
axios.defaults.withCredentials = true;

export const getPosts = async (page = 1, size = 10) => {
  try {
    const response = await axios.get(`/post?page=${page}&size=${size}`);
    console.log("response.data -> ", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error.message);
      console.log("Axios error:", error);

      if (error.response?.data) {
        throw new Error(error.response?.data.message);
      }
      throw new Error(error.message);
    }
    console.log("Unknown error:", error);
  }
};

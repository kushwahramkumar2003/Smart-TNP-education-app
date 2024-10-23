// import { LoginSchema } from "@/pages/Login/LoginPage";
// import { SignUpSchema } from "@/pages/SignUp/SignUp";
import axios from "axios";
// import { z } from "zod";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

export const signUp = async (data: any) => {
  try {
    const response = await axios.post("auth/signup", data);
    return response.data;
  } catch (error: unknown) {
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

export const login = async (formData:any) => {
  try {
    const { data } = await axios.post("auth/login", formData);
    return data?.user;
  } catch (error: unknown) {
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

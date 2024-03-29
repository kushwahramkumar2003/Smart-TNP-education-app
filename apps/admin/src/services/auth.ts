import axios from "axios";
import { z } from "zod";
import { SignUpSchema } from "../pages/Signup/Signup";
import { LoginSchema } from "../pages/Login/Login";

axios.defaults.baseURL = "http://localhost:8080/api/v1";
axios.defaults.withCredentials = true;

export const signUp = async (data: z.infer<typeof SignUpSchema>) => {
  try {
    const response = await axios.post("/auth/register", data);
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

export const login = async (formData: z.infer<typeof LoginSchema>) => {
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

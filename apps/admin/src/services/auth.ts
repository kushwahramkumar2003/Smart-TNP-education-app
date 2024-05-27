import axios from "axios";
import { z } from "zod";
import { SignUpSchema } from "../pages/Signup/Signup";
import { LoginSchema } from "../pages/Login/Login";
import axiosClient from "./index";

export const signUp = async (data: z.infer<typeof SignUpSchema>) => {
  try {
    const response = await axiosClient.post("/auth/register", data);
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

// export function login(formData: z.infer<typeof LoginSchema>) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const { data } = await axiosClient.post("auth/login", formData);
//       console.log("data :>> ", data);
//       resolve(data);
//     } catch (error) {
//       console.error("Error in login function:", error);
//       reject(error);
//     }
//   });
// }

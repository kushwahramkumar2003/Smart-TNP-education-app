import { TeacherProfileSchema } from "../components/core/Profile/EditProfile";
import axiosClient from "./index";
import z from "zod";

export function updateProfile(formData: z.infer<typeof TeacherProfileSchema>) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axiosClient.put("/profile/update", formData);
      console.log("data :>> ", data);
      resolve(data);
    } catch (error) {
      console.error("Error in profile update function:", error);
      reject(error);
    }
  });
}

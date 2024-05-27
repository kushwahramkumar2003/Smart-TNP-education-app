import axios from "axios";
import { TeacherProfileSchema } from "../components/core/Profile/EditProfile";
import axiosClient from "./index";
import z from "zod";

// export function updateProfile(formData: z.infer<typeof TeacherProfileSchema>) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const { data } = await axiosClient.put("/profile/update", formData);
//       console.log("data :>> ", data);
//       resolve(data);
//     } catch (error) {
//       console.error("Error in profile update function:", error);
//       reject(error);
//     }
//   });
// }
export const updateProfile = async (
  formData: z.infer<typeof TeacherProfileSchema>
) => {
  try {
    const { data } = await axiosClient.put("/profile/update", formData);
    return data?.profile;
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

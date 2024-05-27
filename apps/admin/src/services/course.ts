import axiosClient from "./index";
import z from "zod";

import axios from "axios";
import { OverviewShecma } from "../components/core/Dashboard/Overview.tsx";

export const createNewCourse = async (
  formData: z.infer<typeof OverviewShecma>,
) => {
  try {
    const { data } = await axiosClient.post("/admin/course", formData);
    return data?.course;
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

export const createNewLesson = async (courseId: string) => {
  try {
    const { data } = await axiosClient.post("admin/course/lesson", {
      courseId,
    });
    return data?.lesson;
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

import { atom } from "recoil";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  teacherId: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  courseId: string;
  category: string;
  resources: string[];
}

export const newCourseAtom = atom<null | Course>({
  key: "newCourse",
  default: null,
});
export const newCourseLessonsAtom = atom<Lesson[]>({
  key: "userProfileAtom",
  default: [],
});

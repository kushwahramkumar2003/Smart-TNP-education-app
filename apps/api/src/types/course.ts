import z from "zod";

interface courseInput {
  title: String;
  description: String;
  category: String;
}

export const courseInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
});

export const newLessonSchema = z.object({
  courseId: z.string(),
});

import { cn } from "../../../lib/utils";
import z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { LessonResources } from "./LessonResources";
import React, { useState, useEffect } from "react";
import axiosClient from "../../../services";
import { useMutation } from "@tanstack/react-query";
import { createNewLesson } from "../../../services/course";
import { useToast } from "../../ui/use-toast";
import { VscLoading } from "react-icons/vsc";
import { useRecoilState } from "recoil";
import { newCourseAtom, newCourseLessonsAtom } from "@repo/store";

enum ResourceType {
  MP4 = "VIDEO",
  PDF = "PDF",
  IMG = "IMG",
}

export interface Resource {
  title: string;
  type: ResourceType;
  size: string;
  url: string;
  pageCount: number;
  duration: number;
  id: string;
  lessonId: string;
}

const LessonSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must have at least one character" }),
  description: z
    .string()
    .min(10, { message: "Description must have at least 10 characters" }),
  category: z.string(),
});

const Lessons = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [course, _setCourse] = useRecoilState(newCourseAtom);
  const [lessons, setLessons] = useRecoilState(newCourseLessonsAtom);
  const { toast } = useToast();
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const form = useForm<z.infer<typeof LessonSchema>>({
    resolver: zodResolver(LessonSchema),
    defaultValues: {
      title: `Lesson-0${lessons.length + 1}`,
      description: "",
      category: "",
    },
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadedResources, setUploadedResources] = useState<Resource[]>([]);

  useEffect(() => {
    if (selectedLessonId) {
      const selectedLesson = lessons.find(
        (lesson) => lesson.id === selectedLessonId
      );
      if (selectedLesson) {
        form.reset({
          title: selectedLesson.title,
          description: selectedLesson.description,
          category: selectedLesson.category,
        });
        // setUploadedResources(selectedLesson.resources || []);
      }
    } else {
      form.reset({
        title: `Lesson-0${lessons.length + 1}`,
        description: "",
        category: "",
      });
      setUploadedResources([]);
    }
  }, [selectedLessonId, lessons, form]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setUploadStatus("Uploading...");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axiosClient({
        method: "post",
        url: "/admin/course/resource?file", // Replace with your actual endpoint
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0; // Default to 0 if total is undefined
          setUploadProgress(percentCompleted);
          if (percentCompleted === 100) {
            setUploadStatus("Almost completed");
          }
        },
      });

      // Assuming the API response includes the uploaded resource data
      const uploadedResource = response.data.resource;
      setUploadedResources((prev) => [...prev, uploadedResource]);
      setUploadProgress(0); // Reset progress after upload is complete
      setUploadStatus("Upload completed");
      setFileName("");

      setLessons((prevLessons) => {
        return prevLessons.map((lesson) => {
          if (lesson.id === selectedLessonId) {
            return {
              ...lesson,
              resources: [...lesson.resources, uploadedResource.id],
            };
          }
          return lesson;
        });
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Upload failed");
    }
  };

  const { mutate: createNewLessonHan, isPending: isLoading } = useMutation({
    mutationFn: async (courseId: string) => {
      return await createNewLesson(courseId);
    },
    onSuccess: (data) => {
      toast({
        variant: "default",
        description: "New Lesson created!!!",
      });
      setLessons((prevLessons) => [...prevLessons, data]);
      setSelectedLessonId(data.id);
      console.log("new lesson created ", lessons);
    },
    onError: (err) => {
      toast({
        title: "Error in Creating new Lesson",
        variant: "destructive",
        description: (err as Error).message,
      });
    },
  });

  const createNewLessonHandler = () => {
    if (!course) {
      toast({
        title: "Please first create course!!",
        variant: "destructive",
      });
      return;
    }

    createNewLessonHan(course.id);
  };

  const saveLessonHandler = (data: z.infer<typeof LessonSchema>) => {
    if (!selectedLessonId) return;

    const updatedLessons = lessons.map((lesson) =>
      lesson.id === selectedLessonId
        ? { ...lesson, ...data, resources: uploadedResources }
        : lesson
    );

    //@ts-expect-error some error
    setLessons(updatedLessons);
    toast({
      variant: "default",
      description: "Lesson updated successfully!",
    });
    console.log("Lesson updated", updatedLessons);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full bg-white text-2xl">
        <Select
          value={selectedLessonId || ""}
          onValueChange={(value) => setSelectedLessonId(value)}
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Select Lesson" />
          </SelectTrigger>
          <SelectContent className={cn("text-2xl")}>
            {lessons.map((item, index) => (
              <SelectItem key={item.id} value={item.id}>
                {`Lesson-0${index + 1}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {lessons.length === 0 ? (
        <div className="flex justify-center mt-8">
          <Button
            className={`disabled:cursor-not-allowed disabled:bg-slate-800`}
            disabled={isLoading}
            type={"button"}
            onClick={createNewLessonHandler}
          >
            {isLoading ? (
              <>
                <VscLoading className="mr-2 animate-spin spin-in-180" />
                <span>Creating new lesson....</span>
              </>
            ) : (
              "Add Lesson"
            )}
          </Button>
        </div>
      ) : (
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(saveLessonHandler)}>
              <div className="flex flex-col w-full gap-8 mt-8">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-left">Lesson Title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Set lesson title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-left">Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Input Text Here" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-left">Category</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Set category"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-gray-700 font-bold">
                      Lesson Resources
                    </h2>
                    <Button
                      variant="ghost"
                      className="text-orange-600 hover:text-amber-600"
                      type="button"
                      onClick={() =>
                        document.getElementById("fileInput")?.click()
                      }
                    >
                      + Add More Resources
                    </Button>
                    <input
                      id="fileInput"
                      type="file"
                      accept="application/pdf,video/*,image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </div>
                  <div className="mt-4">
                    {fileName && (
                      <div className="flex flex-col gap-2">
                        <p className="text-gray-600">{fileName}</p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                          <div
                            className={`bg-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out`}
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-gray-500 text-sm">{uploadStatus}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-5 px-4">
                    {/*{uploadedResources.map((item) => (*/}
                    {/*  <LessonResources resource={item} key={item.id} />*/}
                    {/*))}*/}
                    {uploadedResources
                      .filter((item) => item.id === selectedLessonId)
                      .map((item) => (
                        <LessonResources resource={item} key={item.id} />
                      ))}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <Button type={"submit"}>Save</Button>
                  <Button
                    className={`disabled:cursor-not-allowed disabled:bg-slate-800`}
                    disabled={isLoading}
                    type={"button"}
                    onClick={createNewLessonHandler}
                  >
                    {isLoading ? (
                      <>
                        <VscLoading className="mr-2 animate-spin spin-in-180" />
                        <span>Creating new lesson....</span>
                      </>
                    ) : (
                      "Add Lesson"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Lessons;

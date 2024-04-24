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
import { Textarea } from "../../ui/textarea.tsx";
import { Button } from "../../ui/button.tsx";
import { LessonResources } from "./LessonResources.tsx";
import { AiTwotoneDelete } from "react-icons/ai";

enum ResourceType {
  MP4 = "MP4",
  PDF = "PDF",
  IMG = "IMG",
}

export interface Resource {
  title: string;
  type: ResourceType;
  size: string;
  link: string;
  length: string;
  id: string;
}

const resources: Resource[] = [
  {
    title: "Make a stunning Facebook cover video",
    type: ResourceType.MP4,
    size: "50MB",
    link: "https://example.com/video.mp4",
    length: "45 min",
    id: "jkoihawehivasdjf",
  },
  {
    title: "Cooking Recipes",
    type: ResourceType.PDF,
    size: "10MB",
    link: "https://example.com/pdf.pdf",
    length: "15 pages",
    id: "uiahsbvas89wen",
  },
];

const Lessons = () => {
  const form = useForm<z.infer<typeof LessonSchema>>({
    resolver: zodResolver(LessonSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  });
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row w-full bg-white text-2xl">
        <Select defaultValue="light">
          <SelectTrigger className="">
            <SelectValue placeholder="Select Lesson" />
          </SelectTrigger>
          <SelectContent className={cn("text-2xl")}>
            <SelectItem value="light" className={cn("")}>
              Lesson 1
            </SelectItem>
            <SelectItem value="dark">Lesson 2</SelectItem>
            <SelectItem value="system">Lesson 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <div className="flex flex-col w-full gap-8 mt-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel className="text-left">Course title</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Set course title"
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
              <div className={"flex flex-col gap-6"}>
                <div className={"flex flex-row justify-between"}>
                  <h2 className={"text-gray-700 font-bold"}>
                    Lesson Resources
                  </h2>
                  <Button
                    variant={"ghost"}
                    className={"text-orange-600 hover:text-amber-600"}
                  >
                    + Add More Resources
                  </Button>
                </div>
                <div className={"flex flex-col gap-5 px-4"}>
                  {resources.map((item) => {
                    return <LessonResources resource={item} key={item.id} />;
                  })}
                </div>
                <div className={"flex flex-col gap-3"}>
                  <h2 className={"text-gray-700 font-bold"}>Lesson Video</h2>
                  <div
                    className={
                      "flex flex-row justify-between items-center px-4"
                    }
                  >
                    <div className={"flex flex-row gap-4"}>
                      <div className={"w-28 rounded-xl overflow-hidden"}>
                        <img
                          src="https://www.shutterstock.com/shutterstock/photos/1813462303/display_1500/stock-photo-attractive-asian-woman-cooking-at-kitchen-1813462303.jpg"
                          alt="img"
                        />
                      </div>
                      <div className={"flex flex-col gap-1"}>
                        <p className={"text-lg text-gray-600"}>Lesson2.mp4</p>
                        <p className={"text-md text-gray-500"}>120mb</p>
                      </div>
                    </div>
                    <Button
                      className={
                        "flex flex-row items-center gap-2 text-primary hover:text-primary"
                      }
                      variant={"ghost"}
                    >
                      <AiTwotoneDelete size={18} /> Delete
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <Button>Save</Button>
                <Button>Add Lesson</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Lessons;

export const LessonSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must have at least one character" }),
  description: z
    .string()
    .min(10, { message: "Description must have at least 10 characters" }),
  category: z.string(),
});

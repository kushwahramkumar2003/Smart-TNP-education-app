import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import { useMutation } from "@tanstack/react-query";
import { createNewCourse } from "../../../services/course.ts";
import { useToast } from "../../ui/use-toast.ts";
import { VscLoading } from "react-icons/vsc";
import { useRecoilState } from "recoil";
import { Course, newCourseAtom } from "@repo/store";

const categoryies: string[] = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Science",
];

const Overview = () => {
  const [course, setCourse] = useRecoilState(newCourseAtom);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof OverviewShecma>>({
    resolver: zodResolver(OverviewShecma),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof OverviewShecma>) => {
      return await createNewCourse(data);
    },
    onSuccess: (data) => {
      console.log("New course created!!!", data);
      toast({
        variant: "default",
        description: "New course created!!!",
      });
      setCourse(data as Course);
    },
    onError: (err) => {
      console.log("Error in creating new course!!!", err);
      toast({
        title: "Error in Creating new course",
        variant: "destructive",
        description: err.message,
      });
    },
  });
  const submitHandler = (data: z.infer<typeof OverviewShecma>) => {
    mutate(data);
  };
  return (
    <div className="flex flex-col justify-center items-center w-[80%] bg-zinc-50">
      <div></div>
      <div className="flex flex-col w-full px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)}>
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
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please pick category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categoryies.map((category) => {
                          return (
                            <SelectItem value={category}>{category}</SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row justify-between">
                <Button>Cancel</Button>
                <Button
                  type={"submit"}
                  className={`disabled:cursor-not-allowed disabled:bg-slate-800`}
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <VscLoading className="mr-2 animate-spin spin-in-180" />
                      <span>Creating new course....</span>
                    </>
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Overview;

export const OverviewShecma = z.object({
  title: z
    .string()
    .min(1, { message: "Title must have at least one character" }),
  description: z
    .string()
    .min(10, { message: "Description must have at least 10 characters" }),
  category: z.string(),
});

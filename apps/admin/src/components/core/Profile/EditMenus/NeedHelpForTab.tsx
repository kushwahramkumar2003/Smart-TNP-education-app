import { useState } from "react";
import z from "zod";
import { useToast } from "../../../ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ToastAction } from "../../../ui/toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { VscLoading } from "react-icons/vsc";

const NeedHelpForTab = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof NeedHelpForSchema>>({
    resolver: zodResolver(NeedHelpForSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof NeedHelpForSchema>) => {
      const newData = { title: data.title, description: data.description };
      setNeedHelpFor([...NeedHelpFor, newData]);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have successfully added new item!",
        variant: "default",
        className: "text-green-500",
      });
      form.setValue("title", "");
      form.setValue("description", "");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Error occurred while signing up.",
          description: error?.message || "An unknown error occurred.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        console.log(error.message);
      }

      console.log("Error:", error);
    },
  });

  const onSubmit = (data: z.infer<typeof NeedHelpForSchema>) => {
    mutate(data);
  };

  const [NeedHelpFor, setNeedHelpFor] = useState([
    {
      title: "Coding",
      description:
        "Hello! I'm designer with vision to deliver signature experience design and user centric concern.",
    },
    {
      title: "Business Management",
      description:
        "Hello! I'm designer with vision to deliver signature experience design and user centric concern.",
    },
  ]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4">
        {NeedHelpFor.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 p-3 rounded-lg bg-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid items-center w-full gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-left">Title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-left">Description</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="w-full flex flex-row justify-between">
                <Button type="button" onClick={() => form.reset()}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isPending}
                  className={`disabled:cursor-not-allowed disabled:bg-slate-800`}
                >
                  {isPending ? (
                    <VscLoading className="animate-spin" />
                  ) : (
                    "+ Add new"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="grid grid-cols-2 bg-gray-200 p-2 rounded-lg">
        <div>
          <Button>Cancel</Button>
        </div>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default NeedHelpForTab;

export const NeedHelpForSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must have at least one character" }),
  description: z
    .string()
    .min(10, { message: "Description must have at least 10 characters" }),
});

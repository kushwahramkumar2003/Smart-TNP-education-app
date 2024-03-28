import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import z, { string } from "zod";
import CreatableSelect from "react-select/creatable";
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
import { ProfilePhotoUploader } from "./ProfilePhotoUploader";
import { Textarea } from "../../../ui/textarea";
import { useSelector } from "react-redux";
import { RootState, UserState } from "../../../../types/user";
import { getUserSelector } from "../../../../store/slices/userReducers";
const ProfileTab = () => {
  const [interest, setInterest] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const user = useSelector(
    (state: RootState): UserState => getUserSelector(state)
  );
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof ProfileSchema>) => {
      // const newData = { title: data.title, description: data.description };
      // ProfileSchema([...NeedHelpFor, newData]);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have successfully added new item!",
        variant: "default",
        className: "text-green-500",
      });
      form.setValue("name", "");
      form.setValue("biography", "");
      form.setValue("skills", []);
      form.setValue("intrest", []);
      form.setValue("email", "");
      form.setValue("location", "");
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

  const onSubmit = (data: z.infer<typeof ProfileSchema>) => {
    mutate(data);
  };
  return (
    <div>
      <div>
        <div>
          <div className=" h-32 overflow-hidden">
            <img
              className="w-full"
              src="https://t3.ftcdn.net/jpg/06/71/07/40/240_F_671074077_KpgkMGWOEFOVs5yo3ZMGMA3J88288A4N.jpg"
              alt=""
            />
            <span className="p-1 rounded-full bg-white text-primary justify-end items-end flex -mt-16 z-10">
              <FiEdit size={20} className=" " />
            </span>
          </div>
          <div className="flex justify-start px-5  -mt-20 flex-col items-start">
            {/* <img
              className="h-24 w-24 bg-white p-2 rounded-full   "
              src="https://avatars.githubusercontent.com/u/68776478?v=4"
              alt=""
            />
            <span className="p-1 rounded-full bg-white text-primary justify-end items-end flex -mt-10 mr-32">
              <FiEdit size={20} className=" " /> */}
            <ProfilePhotoUploader iniImage={user.avatar} />
            {/* </span> */}
          </div>
        </div>
        <div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid items-center w-full gap-4">
                  <FormField
                    control={form.control}
                    name="name"
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
                    name="biography"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel className="text-left">
                            Description
                          </FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your biography" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="intrest"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel className="text-left">Interest</FormLabel>
                          <FormControl>
                            <CreatableSelect
                              defaultValue={interest.map((interest) => ({
                                value: interest,
                                label: interest,
                              }))}
                              isMulti
                              onChange={(newValue) =>
                                setInterest(newValue.map((item) => item.value))
                              }
                              className="relative z-20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel className="text-left">Skill</FormLabel>
                          <FormControl>
                            <CreatableSelect
                              defaultValue={skills.map((skill) => ({
                                value: skill,
                                label: skill,
                              }))}
                              isMulti
                              onChange={(newValue) =>
                                setInterest(
                                  newValue.map((item): string => item.value)
                                )
                              }
                              className="relative z-20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel className="text-left">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Your email"
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
                    name="location"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel className="text-left">Location</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Your location"
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
                        "Save Changes"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

export const ProfileSchema = z.object({
  name: z.string().min(1, { message: "name must have at least one character" }),
  biography: z
    .string()
    .min(10, { message: "Biography must have at least 10 characters" }),

  intrest: z.array(z.string()),
  skills: z.array(z.string()),
  email: z.string().email(),
  location: z.string(),
});

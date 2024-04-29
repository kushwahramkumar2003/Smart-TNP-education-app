import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import z from "zod";
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
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const user = useSelector(
    (state: RootState): UserState => getUserSelector(state)
  );
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      biography: "",
      email: "",
      location: "",
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof ProfileSchema>) => {
      console.log("form data --> ", data);
      // Perform mutation logic here
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have successfully added new item!",
        variant: "default",
        className: "text-green-500",
      });
      form.reset();
      setInterests([]);
      setSkills([]);
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
    data.interests = interests;
    data.skills = skills;
    console.log("data --> ", data);
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
            <ProfilePhotoUploader iniImage={user.avatar} />
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
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="text-left">
                          Profile name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Your title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="biography"
                    render={({ field }) => (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="text-left">Biography</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your biography" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => ( */}
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel className="text-left">Interests</FormLabel>
                    <FormControl>
                      <CreatableSelect
                        defaultValue={interests.map((interest) => ({
                          value: interest,
                          label: interest,
                        }))}
                        isMulti
                        onChange={(newValue) =>
                          setInterests(newValue.map((item) => item.value))
                        }
                        className="relative z-20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  {/* )}
                  /> */}
                  {/* <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => ( */}
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel className="text-left">Skills</FormLabel>
                    <FormControl>
                      <CreatableSelect
                        defaultValue={skills.map((skill) => ({
                          value: skill,
                          label: skill,
                        }))}
                        isMulti
                        onChange={(newValue) =>
                          setSkills(newValue.map((item) => item.value))
                        }
                        className="relative z-20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  {/* )} */}
                  {/* /> */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
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
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
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
                    )}
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
  name: z.string().min(1, { message: "Name must have at least one character" }),
  biography: z
    .string()
    .min(10, { message: "Biography must have at least 10 characters" }),
  interests: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  email: z.string().email(),
  location: z.string(),
});

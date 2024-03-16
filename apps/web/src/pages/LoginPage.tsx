import { Button } from "../Components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Components/ui/form";
import { useDispatch } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card";
import { Input } from "../Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { VscLoading } from "react-icons/vsc";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth";
import { ToastAction } from "../Components/ui/toast";
import { useToast } from "../Components/ui/use-toast";

import { ReactNode, useState } from "react";
import { Checkbox } from "../Components/ui/checkbox";
import { userActions } from "../Components/store/reducers/userReducers";
import { UserState } from "../Components/store/user/types";
import { Link } from "react-router-dom";

export const LoginSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Login = (): ReactNode => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof LoginSchema>) => {
      return await login(data);
    },
    onSuccess: async (user: UserState) => {
      console.log("User:", user);
      toast({
        title: "Success",
        description: "You have successfully logged in!",
        variant: "default",
        className: "text-green-500",
      });
      form.setValue("username", "");
      form.setValue("password", "");
      dispatch(userActions.setUserInfo(user));
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/";
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast({
          variant: "destructive",

          description: error?.message || "An unknown error occurred.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        console.log(error.message);
      }

      console.log("Error:", error);
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid items-center w-full gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="text-left">
                          Username / Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Type username"
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
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="text-left">Password</FormLabel>
                        <FormControl>
                          <Input
                            type={`${showPassword ? "text" : "password"}`}
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="showPassword"
                    checked={showPassword}
                    onCheckedChange={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                  <label
                    htmlFor="showPassword"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Show Password
                  </label>
                </div>
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Don't have an account? Sign up here
                </Link>
                <Button
                  type="submit"
                  className={`disabled:cursor-not-allowed disabled:bg-slate-800`}
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <VscLoading className="mr-2 animate-spin spin-in-180" />
                      <span>Login Attempting....</span>
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
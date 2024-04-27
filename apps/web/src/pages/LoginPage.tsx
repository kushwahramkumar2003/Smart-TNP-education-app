// import { Button } from  "../components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../components/ui/form";
// import { useDispatch } from "react-redux";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { VscLoading } from "react-icons/vsc";
// import { useMutation } from "@tanstack/react-query";
// import { login } from "../services/auth";
// import { ToastAction } from "../components/ui/toast";
// import { useToast } from "../components/ui/use-toast";

// import { ReactNode, useState } from "react";
// import { Checkbox } from "../components/ui/checkbox";
// import { Link } from "react-router-dom";
// import { UserState } from "@/store/user/types";
// import { userActions } from "@/store/reducers/userReducers";

// export const LoginSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   password: z.string().min(8, {
//     message: "Password must be at least 8 characters.",
//   }),
// });

// const Login = (): ReactNode => {
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);
//   const { toast } = useToast();
//   const form = useForm<z.infer<typeof LoginSchema>>({
//     resolver: zodResolver(LoginSchema),
//   });

//   const { isPending, mutate } = useMutation({
//     mutationFn: async (data: z.infer<typeof LoginSchema>) => {
//       return await login(data);
//     },
//     onSuccess: async (user: UserState) => {
//       console.log("User:", user);
//       toast({
//         title: "Success",
//         description: "You have successfully logged in!",
//         variant: "default",
//         className: "text-green-500",
//       });
//       form.setValue("username", "");
//       form.setValue("password", "");
//       dispatch(userActions.setUserInfo(user));
//       localStorage.setItem("user", JSON.stringify(user));
//       window.location.href = "/";
//     },
//     onError: (error: unknown) => {
//       if (error instanceof Error) {
//         toast({
//           variant: "destructive",

//           description: error?.message || "An unknown error occurred.",
//           action: <ToastAction altText="Try again">Try again</ToastAction>,
//         });
//         console.log(error.message);
//       }

//       console.log("Error:", error);
//     },
//   });

//   const onSubmit = (data: z.infer<typeof LoginSchema>) => {
//     mutate(data);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Card className="w-80">
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)}>
//               <div className="grid items-center w-full gap-4">
//                 <FormField
//                   control={form.control}
//                   name="username"
//                   render={({ field }) => {
//                     return (
//                       <FormItem className="flex flex-col space-y-1.5">
//                         <FormLabel className="text-left">
//                           Username / Email
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             type="text"
//                             placeholder="Type username"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => {
//                     return (
//                       <FormItem className="flex flex-col space-y-1.5">
//                         <FormLabel className="text-left">Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             type={`${showPassword ? "text" : "password"}`}
//                             placeholder="Enter your password"
//                             {...field}
//                           />
//                         </FormControl>

//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="showPassword"
//                     checked={showPassword}
//                     onCheckedChange={() => {
//                       setShowPassword(!showPassword);
//                     }}
//                   />
//                   <label
//                     htmlFor="showPassword"
//                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                   >
//                     Show Password
//                   </label>
//                 </div>
//                 <Link to="/signup" className="text-blue-500 hover:underline">
//                   Don't have an account? Sign up here
//                 </Link>
//                 <Button
//                   type="submit"
//                   className={`disabled:cursor-not-allowed disabled:bg-slate-800`}
//                   disabled={isPending}
//                 >
//                   {isPending ? (
//                     <>
//                       <VscLoading className="mr-2 animate-spin spin-in-180" />
//                       <span>Login Attempting....</span>
//                     </>
//                   ) : (
//                     "Login"
//                   )}
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Login;

// // import React from 'react';

// // export default function Login() {
// //   return (
// //     <div>
// //       I'm Login page
// //     </div>
// //   );
// // }



import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { VscLoading } from "react-icons/vsc";
import { useMutation } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast.ts"
import { UserState } from "../types/user.ts";

import { ToastAction } from "../components/ui/toast.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "web/src/components/ui/card.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form.tsx";
import { Input } from "../components/ui/input.tsx";
import { Button } from "../components/ui/button.tsx";
import { Checkbox } from "../components/ui/checkbox.tsx";
import { loginUser } from "../store/slices/userReducers.ts";

export const LoginSchema = z.object({
  email: z.string().min(2, {
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

  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof LoginSchema>) => {
      // return await login(data);
      return await dispatch(loginUser(data));
    },
    onSuccess: async (user: UserState) => {
      //@ts-ignore
      if (user?.error) {
        toast({
          title: "Error",
          //@ts-ignore
          description: user?.error?.message,
          variant: "destructive",
          className: "text-red-500",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return;
      }
      console.log("User:", user);
      toast({
        title: "Success",
        description: "You have successfully logged in!",
        variant: "default",
        className: "text-green-500",
      });
      form.setValue("email", "");
      form.setValue("password", "");
      console.log("login user", user);
      // dispatch(setUserInfo(user));
      // localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("error occure ", error);
      if (error instanceof Error) {
        // Check if the error message indicates incorrect credentials or user not registered
        if (
          error.message === "Incorrect email or password." ||
          error.message === "User not registered."
        ) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
            className: "text-red-500",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        } else {
          // For other errors, display a generic error message
          toast({
            title: "Error",
            description:
              error.message || "An error occurred. Please try again.",
            variant: "destructive",
            className: "text-red-500",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      }

      console.log("Error:", error);
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
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
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col space-y-1.5">
                        <FormLabel className="text-left">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
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

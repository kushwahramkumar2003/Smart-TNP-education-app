// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { Input, TERipple } from "tw-elements-react";

// // // export default function Login(): JSX.Element {
// // //   return (
// // //     <section className="h-full bg-neutral-200 dark:bg-neutral-700">
// // //       <div className="container h-full p-10">
// // //         <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
// // //           <div className="w-full">
// // //             <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
// // //               <div className="g-0 lg:flex lg:flex-wrap">
// // //                 {/* <!-- Left column container--> */}
// // //                 <div className="px-4 md:px-0 lg:w-6/12">
// // //                   <div className="md:mx-6 md:p-12">
// // //                     {/* <!--Logo--> */}
// // //                     <div className="text-center">
// // //                       <img
// // //                         className="mx-auto w-48"
// // //                         src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
// // //                         alt="logo"
// // //                       />
// // //                       <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
// // //                         We are The Lotus Team
// // //                       </h4>
// // //                     </div>

// // //                     <form>
// // //                       <p className="mb-4">Please register an account</p>
// // //                       {/* <!--Username input--> */}
// // //                       <Input
// // //                         type="text"
// // //                         label="Username"
// // //                         className="mb-4"
// // //                       ></Input>

// // //                       {/* <!--Password input--> */}
// // //                       <Input
// // //                         type="password"
// // //                         label="Password"
// // //                         className="mb-4"
// // //                       ></Input>

// // //                       {/* <!--Role selection dropdown--> */}
// // //                       <div className="mb-4">
// // //                         <label htmlFor="role" className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">Role</label>
// // //                         <select
// // //                           id="role"
// // //                           name="role"
// // //                           className="block w-full border-gray-300 dark:border-neutral-600 rounded-md shadow-sm focus:border-neutral-400 focus:ring focus:ring-neutral-200 dark:focus:ring-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
// // //                         >
// // //                           <option value="STUDENT">Student</option>
// // //                           <option value="TEACHER">Teacher</option>
// // //                           <option value="ADMIN">Admin</option>
// // //                         </select>
// // //                       </div>

// // //                       {/* <!--Submit button--> */}
// // //                       <div className="mb-12 pb-1 pt-1 text-center">
// // //                         <TERipple rippleColor="light" className="w-full">
// // //                           <button
// // //                             className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
// // //                             type="button"
// // //                             style={{
// // //                               background:
// // //                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
// // //                             }}
// // //                           >
// // //                             Sign up
// // //                           </button>
// // //                         </TERipple>

// // //                         {/* <!--Forgot password link--> */}
// // //                         <a href="#!">Terms and conditions</a>
// // //                       </div>

// // //                       {/* <!--Register button--> */}
// // //                       <div className="flex items-center justify-between pb-6">
// // //                         <p className="mb-0 mr-2">Have an account?</p>
// // //                         {/* <TERipple rippleColor="light"> */}
// // //                         <Link to="/signup">
// // //                          <button className="cursor-pointer rounded-xl text-red-700">SignUp</button>
// // //                           </Link>
// // //                         {/* </TERipple> */}
// // //                       </div>
// // //                     </form>
// // //                   </div>
// // //                 </div>

// // //                 {/* <!-- Right column container with background and description--> */}
// // //                 <div
// // //                   className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
// // //                   style={{
// // //                     background:
// // //                       "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
// // //                   }}
// // //                 >
// // //                   <div className="px-4 py-6 text-white md:mx-6 md:p-12">
// // //                     <h4 className="mb-6 text-xl font-semibold">
// // //                       We are more than just a company
// // //                     </h4>
// // //                     <p className="text-sm">
// // //                       Lorem ipsum dolor sit amet, consectetur adipisicing elit,
// // //                       sed do eiusmod tempor incididunt ut labore et dolore magna
// // //                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
// // //                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import React, { useState } from "react";
// // import { TERipple } from "tw-elements-react";
// import {Input} from "../../components/ui/input";
// // // import { FormLabel } from "@/components/ui/form";
// import Titlogo from "../../../public/TIT.png";

// // // import { Input } from "tw-elements-react";

// // export default function signUp(): JSX.Element {
// //   // State variables to manage form inputs
// //   const [username, setUsername] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [enrollmentId, setEnrollmentId] = useState("");
// //   const [batch, setBatch] = useState("");
// //   const [department, setDepartment] = useState("");
// //   const [semester, setSemester] = useState("");
// //   const [section, setSection] = useState("");
// //   const [bio, setBio] = useState("");
// //   const [location, setLocation] = useState("");
// //   const [website, setWebsite] = useState("");
// //   const [linkedin, setLinkedin] = useState("");
// //   const [github, setGithub] = useState("");

// //   // Function to handle form submission
// //   // const handleSubmit = (event: React.FormEvent) => {
// //    // Inside your ExampleV2 component

// // // const handleSubmit = (event: React.FormEvent) => {
// // //   event.preventDefault();
// // //   console.log("Form submitted with the following data:");
// // //   console.log("Username:", username);
// // //   console.log("Password:", password);
// // //   console.log("Enrollment ID:", enrollmentId);
// // //   console.log("Batch:", batch);
// // //   console.log("Department:", department);
// // //   console.log("Semester:", semester);
// // //   console.log("Section:", section);
// // //   console.log("Bio:", bio);
// // //   console.log("Location:", location);
// // //   console.log("Website:", website);
// // //   console.log("LinkedIn:", linkedin);
// // //   console.log("Github:", github);
// // // };



// // const handleSubmit = async (event: React.FormEvent) => {
// //   event.preventDefault();
// //   try {
// //     const userData = {
// //       username,
// //       email,
// //       password,
// //       enrollmentId,
// //       semester,
// //       batch,
// //       department,
// //       section,
// //       bio,
// //       location,
// //       website,
// //       linkedin,
// //       github,
// //     };
// //     const response = await fetch('http:/locahost/3004/signup', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(userData),
// //     });
// //     if (response.ok) {
// //       const responseData = await response.json();
// //       console.log('User signed up successfully:', responseData);

// //     } else {
// //       console.error('Error signing up user:', response.statusText);
      
// //     }
// //   } catch (error) {
// //     console.error('Error signing up user:', error);

// //   }
// // };

// // //  };
// //   return (
// //     <section className="h-full bg-neutral-200 dark:bg-neutral-700">
// //       <div className="container h-full p-10">
// //         <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
// //           <div className="">
// //             <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
// //                   <div className="md:mx-6 md:p-12">
// //                     <div className="text-center">
// //                       <img
// //                         className="mx-auto w-32"
// //                         src={Titlogo}
// //                         alt="logo"
// //                       />
// //                       <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
// //                         TNP Education 
// //                       </h4>
// //                     </div>

// //                     <form onSubmit={handleSubmit}>
// //                       <p className="mb-4 text-red-700 font-semibold text-2xl">Please Register an account</p>
// //                      <p className="text-zinc-800 font-semibold">Email</p>
// //                       <Input
// //                         type="text"
// //                         // label="Username"
// //                         className="mb-4"
// //                         value={username}
// //                         onChange={(e) => setUsername(e.target.value)}
// //                       />
// //                      <p className="text-zinc-800 font-semibold">Email</p>
// //                       <Input
// //                         type="text"
// //                         // label="email"
// //                         className="mb-4"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                       />
// //                       <p className="text-zinc-800 font-semibold">password</p>
// //                       <Input
// //                         type="password"
// //                         // label="Password"
// //                         className="mb-4"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                       />

// //                       {/* Additional fields for StudentProfile */}
// //                       <p className="text-zinc-800 font-semibold">Enrollment Number</p>
// //                       <Input
// //                         type="text"
// //                         // label="Enrollment ID"
// //                         className="mb-4"
// //                         value={enrollmentId}
// //                         onChange={(e) => setEnrollmentId(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">Batch</p>
// //                       <Input
// //                         type="text"
// //                         // label="Batch"
// //                         className="mb-4"
// //                         value={batch}
// //                         onChange={(e) => setBatch(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">Department</p>
// //                       <Input
// //                         type="text"
// //                         // label="Department"
// //                         className="mb-4"
// //                         value={department}
// //                         onChange={(e) => setDepartment(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">Semester</p>
// //                       <Input
// //                         type="text"
// //                         // label="Semester"
// //                         className="mb-4"
// //                         value={semester}
// //                         onChange={(e) => setSemester(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">Section</p>
// //                       <Input
// //                         type="text"
// //                         // label="Section"
// //                         className="mb-4"
// //                         value={section}
// //                         onChange={(e) => setSection(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">Bio</p>
// //                       <Input
// //                         type="text"
// //                         // label="Bio"
// //                         className="mb-4"
// //                         value={bio}
// //                         onChange={(e) => setBio(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">City Name</p>
// //                       <Input
// //                         type="text"
// //                         // label="Location"
// //                         className="mb-4"
// //                         value={location}
// //                         onChange={(e) => setLocation(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">Website</p>
// //                       <Input
// //                         type="text"
// //                         // label="Website"
// //                         className="mb-4"
// //                         value={website}
// //                         onChange={(e) => setWebsite(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">LinkedIn</p>
// //                       <Input
// //                         type="text"
// //                         // label="LinkedIn"
// //                         className="mb-4"
// //                         value={linkedin}
// //                         onChange={(e) => setLinkedin(e.target.value)}
// //                       />
// //                        <p className="text-zinc-800 font-semibold">Github</p>
// //                       <Input
// //                         type="text"
// //                         // label="Github"
// //                         className="mb-4"
// //                         value={github}
// //                         onChange={(e) => setGithub(e.target.value)}
// //                       />
                      
// //                       <div className="mb-12 pb-1 pt-1 text-center">
// //                         {/* <TERipple */}
// //                           {/* rippleColor="light"
// //                           className="w-full" */}
// //                         {/* > */}
// //                           <button
// //                             className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
// //                             type='submit'
                            
// //                             style={{
// //                               background:
// //                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
// //                             }}
// //                           >
// //                             Sign up
// //                           </button>
// //                         {/* </TERipple> */}

// //                         <a href="#!">Terms and conditions</a>
// //                       </div>

// //                       <div className="flex items-center justify-between pb-6">
// //                         <p className="mb-0 mr-2">Have an account?</p>
// //                         <TERipple rippleColor="light">
// //                           <button
// //                             type="button"
// //                             className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
// //                           >
// //                             Login
// //                           </button>
// //                         </TERipple>
// //                       </div>
// //                     </form>
// //                   {/* </div>
// //                 </div> */}

// //                 {/* <div
// //                   className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
// //                   style={{
// //                     background:
// //                       "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
// //                   }}
// //                 >
                  
// //                 </div> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         {/* </form> */}
// //       </div>
// //     </section>
// //   );
// // }



// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// function Login() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3000/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Signup failed');
//       }

//       const data = await response.json();
//       console.log('Signup successful:', data);

//       // Optionally, redirect to another page upon successful signup
//       // window.location.href = '/dashboard';
//     } catch (error) {
//       console.error('Signup error:', error);
//       // Optionally, display an error message to the user
//     }
//   };

//   return (
//     <section className="h-full bg-neutral-200 dark:bg-neutral-700">
//     <div className="container h-full p-10">
//       <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
//         <div className="">
//           <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
//                 <div className="md:mx-6 md:p-12">
//                   <div className="text-center">
//                     <img
//                       className="mx-auto w-32"
//                       src={Titlogo}
//                       alt="logo"
//                     />
//                     <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
//                       TNP Education 
//                     </h4>
//                   </div>

//          {/* <h1>Signup</h1> */}
//       <form onSubmit={handleSubmit}>
//       <p className="mb-4 text-red-700 font-semibold text-2xl">Please Register an account</p>
//           <p className="text-zinc-800 font-semibold py-2">Email</p>
//           <Input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//        <p className="text-zinc-800 font-semibold py-2">Password</p>
//           <Input className=""
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//         <Button className="mt-6" type="submit">Sign Up</Button>
//         <div>
//           <Link to='/signup'>
//           <p className="text-red-700 font-md mt-4 cursor-pointer text-lg">Don't have any account</p>
//           </Link>
//         </div>
//                          {/* <Button
//                             type="button"
//                             className=""
//                           >
//                             Login
//                           </Button> */}
//       </form>
//       </div>
//     </div>
//       </div>
//     </div>
//       </div>
//     </section>
//   );
// }

// export default Login;

import {useNavigate}  from 'react-router-dom'
import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { useHistory } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Login successful go to dashboard page
      navigate('/')
    } catch (error) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default Login;

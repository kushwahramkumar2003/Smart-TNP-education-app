// import React, { useState } from "react";
// import { TEInput, TERipple } from "tw-elements-react";

// export default function ExampleV2(): JSX.Element {
//   // State variables to manage form inputs
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [enrollmentId, setEnrollmentId] = useState("");
//   const [batch, setBatch] = useState("");
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState("");
//   const [section, setSection] = useState("");
//   const [bio, setBio] = useState("");
//   const [location, setLocation] = useState("");
//   const [website, setWebsite] = useState("");
//   const [linkedin, setLinkedin] = useState("");
//   const [github, setGithub] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Send form data to backend for processing
//     // This is where you would typically make an API request
//   };

//   return (
//     <section className="h-full bg-neutral-200 dark:bg-neutral-700">
//       <div className="container h-full p-10">
//         <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
//           <div className="w-full">
//             <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
//               <div className="g-0 lg:flex lg:flex-wrap">
//                 <div className="px-4 md:px-0 lg:w-6/12">
//                   <div className="md:mx-6 md:p-12">
//                     <div className="text-center">
//                       <img
//                         className="mx-auto w-48"
//                         src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                         alt="logo"
//                       />
//                       <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
//                         We are The Lotus Team
//                       </h4>
//                     </div>

//                     <form onSubmit={handleSubmit}>
//                       <p className="mb-4">Please register an account</p>
//                       <TEInput
//                         type="text"
//                         label="Username"
//                         className="mb-4"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />

//                       <TEInput
//                         type="password"
//                         label="Password"
//                         className="mb-4"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />

//                       {/* Additional fields for StudentProfile */}
//                       <TEInput
//                         type="text"
//                         label="Enrollment ID"
//                         className="mb-4"
//                         value={enrollmentId}
//                         onChange={(e) => setEnrollmentId(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Batch"
//                         className="mb-4"
//                         value={batch}
//                         onChange={(e) => setBatch(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Department"
//                         className="mb-4"
//                         value={department}
//                         onChange={(e) => setDepartment(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Semester"
//                         className="mb-4"
//                         value={semester}
//                         onChange={(e) => setSemester(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Section"
//                         className="mb-4"
//                         value={section}
//                         onChange={(e) => setSection(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Bio"
//                         className="mb-4"
//                         value={bio}
//                         onChange={(e) => setBio(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Location"
//                         className="mb-4"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Website"
//                         className="mb-4"
//                         value={website}
//                         onChange={(e) => setWebsite(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="LinkedIn"
//                         className="mb-4"
//                         value={linkedin}
//                         onChange={(e) => setLinkedin(e.target.value)}
//                       />
//                       <TEInput
//                         type="text"
//                         label="Github"
//                         className="mb-4"
//                         value={github}
//                         onChange={(e) => setGithub(e.target.value)}
//                       />

//                       <div className="mb-12 pb-1 pt-1 text-center">
//                         <TERipple
//                           rippleColor="light"
//                           className="w-full"
//                         >
//                           <button
//                             className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
//                             type="submit"
//                             style={{
//                               background:
//                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                             }}
//                           >
//                             Sign up
//                           </button>
//                         </TERipple>

//                         <a href="#!">Terms and conditions</a>
//                       </div>

//                       <div className="flex items-center justify-between pb-6">
//                         <p className="mb-0 mr-2">Have an account?</p>
//                         <TERipple rippleColor="light">
//                           <button
//                             type="button"
//                             className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
//                           >
//                             Login
//                           </button>
//                         </TERipple>
//                       </div>
//                     </form>
//                   </div>
//                 </div>

//                 <div
//                   className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
//                   style={{
//                     background:
//                       "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                   }}
//                 >
//                   <div className="px-4 py-6 text-white md:mx-6 md:p-12">
//                     <h4 className="mb-6 text-xl font-semibold">
//                       We are more than just a company
//                     </h4>
//                     <p className="text-sm">
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Titlogo from "../../../public/TIT.png";
import { Input } from '../../../../admin/src/components/ui/input';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      // Optionally, redirect to another page upon successful signup
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Signup error:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
    <div className="container h-full p-10">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="md:mx-6 md:p-12">
                  <div className="text-center">
                    <img
                      className="mx-auto w-32"
                      src={Titlogo}
                      alt="logo"
                    />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      TNP Education 
                    </h4>
                  </div>

         {/* <h1>Signup</h1> */}
      <form onSubmit={handleSubmit}>
      <p className="mb-4 text-red-700 font-semibold text-2xl">Please Register an account</p>
                 <p className="text-zinc-800 font-semibold py-2">Name</p>
          <Input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <p className="text-zinc-800 font-semibold py-2">Email</p>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
       <p className="text-zinc-800 font-semibold py-2">Password</p>
          <Input className=""
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

        <Button className="mt-6" type="submit">Sign Up</Button>
        <div>
          <Link to='/login'>
          <p className="text-red-700 font-md mt-4 cursor-pointer text-lg">Already have a account</p>
           </Link>
        </div>
                         {/* <Button
                            type="button"
                            className=""
                          >
                            Login
                          </Button> */}
      </form>
      </div>
    </div>
      </div>
    </div>
      </div>
    </section>
  );
}

export default SignUp;
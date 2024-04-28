// import { ApiError } from "../utils/apiError";
// import asyncHandler from "../utils/asynchHandler";
// import { prisma } from "../utils/prisma";




// // @ts-ignore
// const registerUser = asyncHandler(async (req, res, next) => {
//     const { fullname, email, username, password } = req.body;

//     // Check if any required field is empty
//     if ([fullname, email, username, password].some(field => !field || field.trim() === "")) {
//         throw new ApiError(400, "All fields are required");
//     }

//     const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//         throw new ApiError(409, "User already exists");
//     }


//     const user = await User.create({
//         fullname,
//         email,
//         username: username.toLowerCase(),
//         password,
       
//     });
//     if (!user) {
//         throw new ApiError(500, "User creation failed. Please check and register again.");
//     }
//     const createdUser = await User.findById(user._id).select("-password -refreshToken");
//     const existUser = await User.findOne({email});
//     if(!existUser){
//         throw new ApiError(409,"User already exists")
//     }
//     // const token = user.generateToken();
//     // res.cookie("token", token, {
//     //     httpOnly: true,
//     //     sameSite: "strict",
//     //     maxAge: 1000 * 60 * 60 * 24 * 7, 
//     // });
//     return res.status(201).json({
//         message: "User created successfully",
//         user: createdUser,
//     });
// });

// export { registerUser };


// │  Deploying your app to serverless or edge functions?        │
// │  Try Prisma Accelerate for connection pooling and caching.  │
// │  https://pris.ly/cli/accelerate                             │
// └───────────────────────────────────


import { Request, Response } from "express";
import asyncHandler from "../utils/asynchHandler";
import z, { string } from "zod";
import { prisma } from "../utils/prisma";
import crypto from "crypto";
import { ApiError } from "../utils/apiError";

const TokenSchema = z.object({
  name: string().min(3),
  email: string().email(),
  role: z.enum(["ADMIN", "STUDENT", "TEACHER"]).default("STUDENT"),
});

export const generateStudentRegeToken = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, role } = TokenSchema.parse(req.body);
    if (await prisma.studentRegistrationToken.findFirst({ where: { email } })) {
      throw new ApiError(409, "Token already generated for this email");
    }
    const hash = crypto.createHash("sha256");
    hash.update(email);
    const token = hash.digest("hex");

    await prisma.studentRegistrationToken.create({
      data: {
        name,
        email,
        token,
        role,
      },
    });

    res.status(201).json({
      message: "Token generated successfully",
      token,
    });
  }
);

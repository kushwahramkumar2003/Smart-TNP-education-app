import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import z from "zod";
import getNewToken from "../utils/jwtToke";
import asyncHandler from "../utils/asynchHandler";
import bcrypt from "bcrypt";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
};

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string().optional(),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

/**************************************
 * @kushwahramkumar2003
 * @api {post} /api/auth/register
 * @apiName signUp
 * @apiGroup Auth
 * @apiDescription Sign up a new user
 ****************************************/
export const signUp = asyncHandler(async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = SignUpSchema.parse(req.body);

  if (await prisma.user.findUnique({ where: { email } })) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(15));
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
    },
  });

  user.password = "";

  const token = await getNewToken(user);

  res.cookie("token", token, cookieOptions);

  res.status(201).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
});

/**************************************
 * @kushwahramkumar2003
 * @api {post} /api/auth/login
 * @apiName login
 * @apiGroup Auth
 * @apiDescription Login a user
 ****************************************/
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = LoginSchema.parse(req.body);

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  user.password = "";

  const token = await getNewToken(user);

  res.cookie("token", token, cookieOptions);

  res.status(200).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
});
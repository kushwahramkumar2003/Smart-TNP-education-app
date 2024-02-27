import { ErrorRequestHandler, Request, Response } from "express";
import { prisma } from "../utils/prisma";
import z from "zod";
import getNewToken from "../utils/jwtToke";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: true,
};

interface SignUpBody {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
}

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string().optional(),
});

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName } = SignUpSchema.parse(
      req.body
    );

    if (await prisma.user.findUnique({ where: { email } })) {
      throw new Error("Email already exists");
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
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
  } catch (error) {
    console.log("Error in signUp", error?.message);
    res.status(400).json({ error: error?.message });
  }
};

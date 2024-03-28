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

const AdminTeacherSignUpSchema = z.object({
  password: z.string().min(8),
  token: z.string(),
});

const StudentSignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(3),
  role: z.enum(["ADMIN", "STUDENT", "TEACHER"]).default("STUDENT"),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

/***************************************
 * @kushwahramkumar2003
 * @api {post} /api/auth/register
 * @apiName signUp
 * @apiGroup Auth
 * @apiDescription Sign up a new user
 ****************************************/
export const signUp = asyncHandler(async (req: Request, res: Response) => {
  // const { email, password, name, role, token } = SignUpSchema.parse(req.body);

  if (req.body.token) {
    const { password, token } = AdminTeacherSignUpSchema.parse(req.body);
    const teacher = await prisma.teacherRegistrationToken.findFirst({
      where: {
        token,
      },
    });

    if (!teacher) {
      throw new Error("Invalid token");
    }

    if (await prisma.user.findUnique({ where: { email: teacher.email } })) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(15)
    );
    const user = await prisma.user.create({
      data: {
        email: teacher.email,
        password: hashedPassword,
        name: teacher.name,
        role: teacher.role,
      },
    });

    await prisma.teacherRegistrationToken.delete({
      where: {
        token,
      },
    });

    user.password = "";

    const jwtToken = await getNewToken(user);

    res.cookie("token", jwtToken, cookieOptions);

    res.status(201).json({
      message: "User created",
      user: {
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
    return;
  }

  const { email, password, name } = StudentSignUpSchema.parse(req.body);

  if (await prisma.user.findUnique({ where: { email } })) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(15));
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  user.password = "";

  const jwtToken = await getNewToken(user);

  res.cookie("token", jwtToken, cookieOptions);

  res.status(201).json({
    message: "User created",
    user: {
      email: user.email,
      name: user.name,
      role: user.role,
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
    message: "User logged in successfully",
    user: {
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
});

/**************************************
 * @kushwahramkumar2003
 * @api {get} /api/auth/logout
 * @apiName logout
 * @apiGroup Auth
 * @apiDescription Logout a user
 ****************************************/
export const logout = asyncHandler(async (req: Request, res: Response) => {
  res.clearCookie("token", cookieOptions);
  res.status(200).json({ message: "User Logged out successfully" });
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  if (!req?.body.id) {
    throw new Error("User not found");
  }

  const user = await prisma.user.delete({
    where: {
      id: req.body.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  res.status(200).json({ message: "User deleted successfully" });
});

/**************************************
 * @kushwahramkumar2003
 * @api {get} /api/auth/user
 * @apiName getUser
 * @apiGroup Auth
 * @apiDescription Get user details
 ****************************************/
export const updatePassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { id, password } = req.body;
    if (!id || !password) {
      throw new Error("Invalid request");
    }

    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(15)
    );

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }
    user.password = "";

    res.status(200).json({ message: "Password updated successfully" });
  }
);

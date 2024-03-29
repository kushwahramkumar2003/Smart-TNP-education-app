import { Request, Response } from "express";
import asyncHandler from "../utils/asynchHandler";
import z, { string } from "zod";
import { prisma } from "../utils/prisma";
import crypto from "crypto";

const TokenSchema = z.object({
  name: string().min(3),
  email: string().email(),
  role: z.enum(["ADMIN", "STUDENT", "TEACHER"]).default("TEACHER"),
});

export const generateTeacherRegeToken = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, role } = TokenSchema.parse(req.body);
    if (await prisma.teacherRegistrationToken.findFirst({ where: { email } })) {
      throw new Error("Token already exists");
    }
    const hash = crypto.createHash("sha256");
    hash.update(email);
    const token = hash.digest("hex");

    await prisma.teacherRegistrationToken.create({
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

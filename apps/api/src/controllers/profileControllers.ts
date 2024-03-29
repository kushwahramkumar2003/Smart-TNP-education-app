import { Request, Response } from "express";
import asyncHandler from "../utils/asynchHandler";
import { azureUpload } from "../services/azure";
import { prisma } from "../utils/prisma";

export const uploadAvatar = asyncHandler(
  async (req: Request, res: Response) => {
    const avatar = req.file;
    //@ts-ignore
    const user = req.user;
    if (!avatar) {
      throw new Error("Please provide an avatar");
    }

    const avatarUrl = await azureUpload(avatar);
    if (!avatarUrl) {
      throw new Error("Error uploading avatar");
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        avatar: avatarUrl,
      },
      select: {
        avatar: true,
        name: true,
        email: true,
        role: true,
        profile: true,
        teacherProfile: true,
      },
    });

    console.log("updatedUser --> ", updatedUser);
    res.status(200).json({ updatedUser });
  }
);

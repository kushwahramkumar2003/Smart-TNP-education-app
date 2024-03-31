import { Request, Response } from "express";
import asyncHandler from "../utils/asynchHandler";
import { azureUpload } from "../services/azure";
import { prisma } from "../utils/prisma";
import z, { string } from "zod";
import { User } from "@prisma/client";
import { strToArr } from "../utils/stringToArr";

const cometomefor = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  teacherProfileId: z.string(),
});
const needHelpFor = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  teacherProfileId: z.string(),
});

const TeacherProfileSchema = z.object({
  bio: z.string().optional(),
  interests: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  location: z.string().optional(),
  comeToMeFor: z.array(cometomefor).optional(),
  needHelpFor: z.array(needHelpFor).optional(),
});

export const uploadAvatar = asyncHandler(
  async (req: Request, res: Response) => {
    const avatar = req.file;
    //@ts-ignore
    const user = req.user;
    // console.info("req.body --> ", req.body);
    if (!avatar) {
      throw new Error("Please provide an avatar");
    }

    // console.log("File uploading starting.....");
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

    // console.log("updatedUser --> ", updatedUser);
    res.status(200).json({ updatedUser });
  }
);

export const updateTeacherProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { bio, interests, skills, location, comeToMeFor, needHelpFor } =
      TeacherProfileSchema.parse(req.body);

    //@ts-ignore
    const user = req?.user as User;
    if (!user) {
      throw new Error("User not found");
    }

    const teacherProfile = await prisma.teacherProfile.findUnique({
      where: { userId: user.id },
      include: {
        comeToMeFor: true,
        needHelpFor: true,
      },
    });

    if (!teacherProfile) {
      throw new Error("Teacher profile not found");
    }

    const updatedTeacherProfile = await prisma.teacherProfile.update({
      where: { userId: user.id },
      data: {
        bio: bio || teacherProfile.bio,
        interests: interests || teacherProfile.interests,
        skills: skills || teacherProfile.skills,
        location: location || teacherProfile.location,
        comeToMeFor: {
          // Update comeToMeFor associations
          update: comeToMeFor?.map((item) => ({
            where: { id: item.id },
            data: {
              title: item.title,
              description: item.description,
            },
          })),
        },
        needHelpFor: {
          // Update needHelpFor associations
          update: needHelpFor?.map((item) => ({
            where: { id: item.id },
            data: {
              title: item.title,
              description: item.description,
            },
          })),
        },
      },
      include: {
        comeToMeFor: true,
        needHelpFor: true,
      },
    });

    if (!updatedTeacherProfile) {
      throw new Error("Error updating teacher profile");
    }

    res.status(200).json({
      profile: {
        bio: updatedTeacherProfile.bio,
        interests: updatedTeacherProfile?.interests,
        skills: updatedTeacherProfile?.skills,
        location: updatedTeacherProfile.location,
      },
    });
  }
);

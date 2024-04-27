import { Request, Response } from "express";
import asyncHandler from "../utils/asynchHandler";
import { azureUpload } from "../services/azure";
import { prisma } from "../utils/prisma";
import z, { string } from "zod";
import { User } from "@prisma/client";
import { strToArr } from "../utils/stringToArr";
//  interface StudentProfile{
//     interests : String;
//     skills : String;
//     location : String;
//     comeToMeFor : String;
//     needHelpFor : String;
// }

interface studentProfile {
     interests : String,
    skills : String,
}
const cometomefor = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  studentProfileId: z.string(),
});
const needHelpFor = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  studentProfileId: z.string(),
});

const studentProfileSchema = z.object({
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
      },
    });

    // console.log("updatedUser --> ", updatedUser);
    res.status(200).json({ updatedUser });
  }
);

export const updateStudentProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { bio, interests, skills, location, comeToMeFor, needHelpFor } =
      studentProfileSchema.parse(req.body);

    //@ts-ignore
    const user = req?.user as User;
    if (!user) {
      throw new Error("User not found");
    }

    const studentProfile = await prisma.studentProfile.findUnique({
      where: { userId: user.id }
    });

    if (!studentProfile) {
      throw new Error("Student profile not found");
    }

    const updatedstudentProfile = await prisma.studentProfile.update({
      where: { userId: user.id },
      data: {
        bio: bio || studentProfile.bio,
        interests: interests || studentProfile.interests,
        skills: skills || studentProfile.skills,
        location: location || studentProfile.location,
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

    if (!updatedstudentProfile) {
      throw new Error("Error updating student profile");
    }

    res.status(200).json({
      profile: {
        bio: updatedstudentProfile.bio,
        interests: updatedstudentProfile?.interests,
        skills: updatedstudentProfile?.skills,
        location: updatedstudentProfile.location,
      },
    });
  }
);

import prisma from "../utils/prisma";
import { Request, Response } from "express";
import asyncHandler from "../utils/asynchHandler";
import { courseInputSchema, newLessonSchema } from "../types/course";
import { User } from "@prisma/client";
import fileType from "file-type";
import { readFile } from "fs";
import { azureUpload } from "../services/azure";
import getVideoDuration from "../services/getVideoDuration";
import getPdfPageCount from "../services/getPdfPageCount";
import { createReadStream } from "node:fs";
import { randomUUID } from "node:crypto";
import { promises as fs } from "fs";

export const createNewCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, description, category } = courseInputSchema.parse(req.body);
    //@ts-ignore
    const user = req?.user as User;

    const newCourse = await prisma.course.create({
      data: {
        title,
        category,
        description,
        teacherId: user.id,
      },
    });
    console.log("newCourse", newCourse);
    if (!newCourse) {
      res.status(302).json({
        success: false,
        message: "New course can't be created!!",
      });
    }

    res.status(200).json({
      success: true,
      message: "New course successfully created!!",
      course: newCourse,
    });
  },
);

export const createNewResource = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.file) throw new Error("No file uploaded.");

    const publicUrl = await azureUpload(req.file);
    const { originalname: title, mimetype, size } = req.file;
    let metadata: any = {
      title,
      size,
      type: mimetype.includes("video")
        ? "VIDEO"
        : mimetype === "application/pdf"
          ? "PDF"
          : "IMAGE",
    };

    if (mimetype.includes("video")) {
      const tempFilePath = `temp_${randomUUID()}.mp4`;
      await fs.writeFile(tempFilePath, req.file.buffer);
      metadata.duration = await getVideoDuration(tempFilePath);
      await fs.unlink(tempFilePath);
    } else if (mimetype === "application/pdf") {
      metadata.pageCount = await getPdfPageCount(req.file.buffer);
    }

    const resource = await prisma.resource.create({
      data: {
        ...metadata,
        url: publicUrl,
        lessonId: null,
      },
    });

    res.status(200).json({ message: "File uploaded successfully", resource });
  },
);

export const createNewLesson = asyncHandler(
  async (req: Request, res: Response) => {
    const { courseId } = newLessonSchema.parse(req.body);
    //@ts-ignore
    const user = req?.user as User;

    const lesson = await prisma.lesson.create({
      data: {
        courseId: courseId,
      },
    });

    console.log("newCourse", lesson);
    if (!lesson) {
      res.status(302).json({
        success: false,
        message: "New lesson can't be created!!",
      });
    }

    res.status(200).json({
      success: true,
      message: "New lesson successfully created!!",
      lesson,
    });
  },
);

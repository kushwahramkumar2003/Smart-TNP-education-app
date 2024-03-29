import setRateLimit from "express-rate-limit";
import asyncHandler from "../utils/asynchHandler";
import jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";
import config from "../config";
import { prisma } from "../utils/prisma";
import { User } from "@prisma/client";

// Rate limit middleware
export const rateLimitMiddleware = setRateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  message: "You have exceeded your 50 request in 10 min.",
  headers: true,
});

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req?.cookies?.token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = req.cookies.token;
  console.log("token --> ", token);
  try {
    const decodedToken = await jwt.verify(token, config.jwtSecret);
    //@ts-ignore
    const userId = decodedToken.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await prisma.user.findFirst({
      where: { id: userId as string },
    });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    //@ts-ignore
    req.user = user as User;
    console.log("extracted user ", user);
    //@ts-ignore
    console.log("authMiddleware user --> ", req?.user);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const extractUserMiddleware = asyncHandler(
  async (req: Request, res: Response, next) => {
    if (req?.cookies?.token) {
      const token = req.cookies.token;
      console.log("token --->", token);
      const decodeToken = await jwt.decode(token);
      //@ts-ignore
      const userId = decodeToken.userId;
      console.log("userId ----->", userId);
      if (!userId) {
        res.status(401).json({ message: "Invalid token" });
      }
      const user = await prisma.user.findFirst({
        where: { id: userId as string },
      });

      if (!user) {
        res.status(401).json({ message: "Invalid token" });
      }
      req.push(user);
      //@ts-ignore
      console.log("extractUserMiddleware user --> ", req?.user);
    }
    next();
  }
);

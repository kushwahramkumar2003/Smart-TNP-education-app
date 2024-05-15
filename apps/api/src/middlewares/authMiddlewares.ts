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
  next: NextFunction,
) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token not provided" });
    }

    const decodedToken: any = await jwt.verify(token, config.jwtSecret);
    const userId: string = decodedToken.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    //@ts-ignore
    req.user = user;
    //@ts-ignore
    console.log("authMiddleware user --> ", req.user);
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    return res
      .status(401)
      .json({ message: "Unauthorized: Token verification failed" });
  }
};

import setRateLimit from "express-rate-limit";
import asyncHandler from "../utils/asynchHandler";
import jwt from "jsonwebtoken";
import { prisma } from "../utils/prisma";
import { User } from "../types/user";
import { Request, Response } from "express";

// Rate limit middleware
export const rateLimitMiddleware = setRateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  message: "You have exceeded your 50 request in 10 min.",
  headers: true,
});

export const extractUserMiddleware = asyncHandler(
  async (req: Request, res: Response, next) => {
    if (req.cookies.token) {
      const token = req.cookies.token;
      const userId = await jwt.decode(token);
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
    }
    next();
  }
);

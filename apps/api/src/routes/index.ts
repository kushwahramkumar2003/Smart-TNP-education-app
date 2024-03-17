import { Router } from "express";
import authRoutes from "./auth.routes";
import { rateLimitMiddleware } from "../middlewares/authMiddlewares";

const router = Router();

router.use("/auth", rateLimitMiddleware, authRoutes);

export default router;

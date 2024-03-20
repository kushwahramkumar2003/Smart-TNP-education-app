import { Router } from "express";
import authRoutes from "./auth.routes";
import usersRoutes from "./user.routes";
import teachersRoutes from "./teacher.routes";
import adminRoutes from "./admin";
import { rateLimitMiddleware } from "../middlewares/authMiddlewares";

const router = Router();

router.use("/auth", rateLimitMiddleware, authRoutes);
router.use("/user", rateLimitMiddleware, usersRoutes);
router.use("/teacher", rateLimitMiddleware, teachersRoutes);
router.use("/admin", rateLimitMiddleware, adminRoutes);

export default router;

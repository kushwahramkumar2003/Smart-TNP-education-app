import { Router } from "express";
import authRoutes from "./auth.routes";
import usersRoutes from "./user.routes";
import adminRoutes from "./admin/index";
import teacherRoutes from "./admin/teacher.routes";
import profileRoutes from "./profile.routes";
import {
  authMiddleware,
  rateLimitMiddleware,
} from "../middlewares/authMiddlewares";

const router = Router();

router.use("/auth", rateLimitMiddleware, authRoutes);
router.use("/user", rateLimitMiddleware, authMiddleware, usersRoutes);
router.use("/teacher", rateLimitMiddleware, authMiddleware, teacherRoutes);
router.use("/admin", rateLimitMiddleware, authMiddleware, adminRoutes);
router.use("/profile", rateLimitMiddleware, authMiddleware, profileRoutes);

export default router;

import { Router } from "express";
import authRoutes from "./auth.routes";
import usersRoutes from "./student.routes";
import teachersRoutes from "./teacher.routes";
import adminRoutes from "./admin";
import profileRoutes from "./profile.routes";
import {
  authMiddleware,
  extractUserMiddleware,
  rateLimitMiddleware,
} from "../middlewares/authMiddlewares";

const router = Router();

router.use("/auth", rateLimitMiddleware, authRoutes);
router.use("/user", rateLimitMiddleware, extractUserMiddleware, usersRoutes);
router.use(
  "/teacher",
  rateLimitMiddleware,
  extractUserMiddleware,
  teachersRoutes
);
router.use("/admin", rateLimitMiddleware, extractUserMiddleware, adminRoutes);
router.use("/profile", rateLimitMiddleware, authMiddleware, profileRoutes);

export default router;

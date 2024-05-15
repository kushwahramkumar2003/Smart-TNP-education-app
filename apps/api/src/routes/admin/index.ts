import { Router } from "express";
import teacherRoutes from "./teacher.routes";
import courseRoutes from "./course.routes";

const router = Router();

router.use("/teachers", teacherRoutes);
router.use("/course", courseRoutes);

export default router;

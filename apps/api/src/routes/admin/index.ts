import { Router } from "express";
import teacherRoutes from "./teacher.routes";
import courseRoutes from "./course.routes";
import classRoutes from "./liveClass.routes";

const router = Router();

router.use("/teachers", teacherRoutes);
router.use("/course", courseRoutes);
router.use("/class", classRoutes);

export default router;

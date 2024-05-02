import { Router } from "express";
import teacherRoutes from "./teacher.routes";
import studentRoutes from "../student.routes";

const router = Router();

router.use("/teachers", teacherRoutes);
router.use("/students", studentRoutes);

export default router;

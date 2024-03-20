import { Router } from "express";
import teacherRoutes from "./teacher.routes";

const router = Router();

router.use("/teachers", teacherRoutes);

export default router;

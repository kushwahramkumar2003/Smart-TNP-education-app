import { Router } from "express";
import { generateTeacherRegeToken } from "../../controllers/teacherManagmentControllers";

const router = Router();

router.post("/genToken", generateTeacherRegeToken);

export default router;

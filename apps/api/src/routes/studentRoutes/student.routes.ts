import { Router } from "express";
import { generateStudentRegeToken } from "../../controllers/studentManagetControlllers";

const router = Router();

router.post("/genToken", generateStudentRegeToken);

export default router;
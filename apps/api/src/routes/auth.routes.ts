import { Router } from "express";
import { signUp } from "../controllers/authControllers";

const router = Router();

router.post("/register", signUp);

export default router;

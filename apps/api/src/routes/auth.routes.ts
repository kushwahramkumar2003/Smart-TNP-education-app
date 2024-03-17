import { Router } from "express";
import { login, logout, signUp } from "../controllers/authControllers";

const router = Router();

router.post("/register", signUp);
router.post("/login", login);
router.get("/logout", logout);

export default router;

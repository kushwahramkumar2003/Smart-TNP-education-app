import { Router } from "express";
import multer from "multer";
import { uploadAvatar } from "../controllers/profileControllers";
const upload = multer();

const router = Router();
router.post("/avatar/upload", upload.single("avatar"), uploadAvatar);

export default router;

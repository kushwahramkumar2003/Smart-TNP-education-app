import { Router } from "express";
import multer from "multer";
import {
  updateTeacherProfile,
  uploadAvatar,
} from "../controllers/profileControllers";
const upload = multer();

const router = Router();
router.post("/avatar/upload", upload.single("avatar"), uploadAvatar);
router.put("/update", updateTeacherProfile);

export default router;

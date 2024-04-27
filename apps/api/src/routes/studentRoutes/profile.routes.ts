import multer  from "multer";
import express from "express"
import {
    updateTeacherProfile,
    uploadAvatar,
  } from "../../controllers/profileControllers";
  const upload = multer();
  
  const router = express.Router();
  router.post("/avatar/upload", upload.single("avatar"), uploadAvatar);
  router.put("/update", updateTeacherProfile);
  
  export default router;
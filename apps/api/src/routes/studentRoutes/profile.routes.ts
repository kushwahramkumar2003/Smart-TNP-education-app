import multer  from "multer";
import express from "express"
import {
    updateStudentProfile,
    uploadAvatar,
  } from "../../controllers/studentProfile";
  const upload = multer();
  
  const router = express.Router();
  router.post("/avatar/upload", upload.single("avatar"), uploadAvatar);
  router.put("/update", updateStudentProfile);
  
  export default router;

  
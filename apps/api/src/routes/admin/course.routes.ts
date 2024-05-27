import { Router } from "express";
import {
  createNewCourse,
  createNewLesson,
  createNewResource,
} from "../../controllers/courseControllers";
import multer from "multer";
const upload = multer();
const route = Router();

route.post("/", createNewCourse);
route.post("/resource", upload.single("file"), createNewResource);
route.post("/lesson", createNewLesson);
export default route;

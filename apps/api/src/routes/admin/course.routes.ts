import { Router } from "express";
import {
  createNewCourse,
  createNewResource,
} from "../../controllers/courseControllers";
import multer from "multer";
const upload = multer();
const route = Router();

route.post("/", createNewCourse);
route.post("/resource", upload.single("file"), createNewResource);
export default route;

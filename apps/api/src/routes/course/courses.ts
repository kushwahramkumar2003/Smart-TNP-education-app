import express from 'express';
import {
  createNewCourse,
  createNewResource,
  createNewLesson
} from '../../controllers/courseControllers';
import upload from '../../middlewares/upload';

const router = express.Router();

// Route to create a new course
router.post('/courses', createNewCourse);

// Route to create a new resource (upload a file)
router.post('/resources', upload.single('file'), createNewResource);

// Route to create a new lesson
router.post('/lessons', createNewLesson);

export default router;

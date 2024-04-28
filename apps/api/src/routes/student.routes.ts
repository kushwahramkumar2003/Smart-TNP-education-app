// routes/studentProfileRoutes.ts
// routes/studentProfileRoutes.ts

import express from 'express';
import * as studentProfileController from '../controllers/studentManagetControlllers';

const router = express.Router();

router.get('/:id', studentProfileController.getStudentProfileById);

export default router;

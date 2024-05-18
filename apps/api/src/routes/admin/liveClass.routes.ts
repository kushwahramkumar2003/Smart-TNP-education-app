import { Router } from "express";

const router = Router();

router.post("/start", startNewMeeting);
router.post("/join", joinToMeeting);

export default router;

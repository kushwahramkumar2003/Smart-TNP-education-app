import { Router } from "express";
import {joinToMeeting, startNewMeeting} from "../../controllers/liveClassControllers";

const router = Router();

// router.post("/start", startNewMeeting);
// router.post("/join", joinToMeeting);

export default router;

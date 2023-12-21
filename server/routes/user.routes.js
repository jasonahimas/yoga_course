import { Router } from "express";
import { enrollUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/enrollment").post(enrollUser)

export default router;
 
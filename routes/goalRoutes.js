import express from "express";
const router = express.Router();
import {
  addGoal,
  getGoal,
} from "../controllers/goalController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addGoal).get(protect, getGoal);

export default router;

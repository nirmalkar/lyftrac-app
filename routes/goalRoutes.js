import express from "express";
const router = express.Router();
import {
  addGoal,
  getGoal,
  getGoalById,
} from "../controllers/goalController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addGoal).get(protect, admin, getGoal);
router.route("/:id").get(protect, getGoalById);

export default router;

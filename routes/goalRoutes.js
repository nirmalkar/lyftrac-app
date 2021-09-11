import express from "express";
const router = express.Router();
import {
  addGoal,
  getGoal,
  getGoalById,
  deleteGoal,
  updateGoal
} from "../controllers/goalController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addGoal).get(protect, admin, getGoal);
router.route("/:id").get(protect, getGoalById).delete(protect, deleteGoal).put(protect, updateGoal);

export default router;

import express from "express";
const router = express.Router();
import {
  addGoal,
  getGoal,
  getGoalById,
  deleteGoal
} from "../controllers/goalController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addGoal).get(protect, admin, getGoal);
router.route("/:id").get(protect, getGoalById).delete(protect, deleteGoal);

export default router;

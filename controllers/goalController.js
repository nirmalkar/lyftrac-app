import asyncHandler from "express-async-handler";
import Goal from "../models/goalModal.js";

// @desc    Create new goal
// @route   POST /api/goals
// @access  Private
const addGoal = asyncHandler(async (req, res) => {
  const { goal } = req.body;
    const newGoal = new Goal({
      goal,
    });
    const createGoal = await newGoal.save();
    res.status(201).json(createGoal);

});

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find({}).populate("user", "id name");
  res.json(goals);
});

export { addGoal, getGoal };

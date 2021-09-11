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

// @desc    Get goal by ID
// @route   GET /api/goals/:id
// @access  Private
const getGoalById = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ "goal.user_id": { $all: [req.params.id] } });
  if (goal) {
    res.json(goal);
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find({}).populate("user", "id name");
  res.json(goals);
});

export { addGoal, getGoal, getGoalById };

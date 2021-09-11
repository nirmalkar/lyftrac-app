import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    goal: {
      user_id:{ type: String, required: true },
      title: { type: String, required: true },
      type: { type: String, required: true },
      image: { type: String },
      children: { type: Array },
      progress: {
        progress: { type: Number, required: true },
        startsAt: { type: Number, required: true },
        target: { type: Number, required: true },
      },
      isCompleted: { type: Boolean, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;

import mongoose from "mongoose";

const townSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Provide Pension Number"],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Town || mongoose.model("Town", townSchema);

import mongoose from "mongoose";

const mdaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Provide Pension Number"],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Mda || mongoose.model("Mda", mdaSchema);

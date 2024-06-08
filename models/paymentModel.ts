import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Provide Pension Number"],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", paymentSchema);

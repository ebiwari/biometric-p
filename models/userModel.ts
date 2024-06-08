import mongoose from "mongoose";

const userSchemea = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Provide First Name"],
    },
    otherName: {
      type: String,
      required: [true, "Please Provide Other Name"],
    },

    email: {
      type: String,
      required: [true, "Please Provide Email"],
    },

    password: {
      type: String,
      required: [true, "Please Provide Password"],
    },
    token: {
      type: String,
    },
    department: {
      type: String,
    },
    designation: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchemea);

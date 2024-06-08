import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Database Connection Valid");
  } catch (err: any) {
    console.log(err.message);
  }
};

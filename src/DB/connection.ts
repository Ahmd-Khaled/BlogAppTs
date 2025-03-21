import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected successfully...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectDB;
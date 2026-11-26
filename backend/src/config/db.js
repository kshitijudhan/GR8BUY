import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log("Connected to DB for GR8BUY");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

import mongoose from "mongoose";

// Function to connect to MongoDB
async function connectDB() {
  // Check if the connection is already established
  if (mongoose.connection.readyState === 1) {
    console.log("Database is already connected");
    return;
  }

  // If not connected, proceed with the connection
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI as string);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error; // Rethrow the error for further handling if needed
  }
}

export default connectDB;

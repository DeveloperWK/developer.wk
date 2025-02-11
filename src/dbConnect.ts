import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI as string);
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;

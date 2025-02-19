import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      minLength: 1,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "moderator", "editor"],
      default: "moderator",
    },
  },
  { timestamps: true }
);
export default mongoose.models.Users || model("Users", UserSchema);

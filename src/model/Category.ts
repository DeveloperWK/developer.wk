import mongoose, { model, Schema } from "mongoose";

const Category = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Category || model("Category", Category);

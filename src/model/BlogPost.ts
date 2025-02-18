import mongoose, { Schema, model } from "mongoose";

const BlogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },

    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   default: "Tech",
    // },
  },
  { timestamps: true }
);
export default mongoose.models.BlogPost || model("BlogPost", BlogPostSchema);

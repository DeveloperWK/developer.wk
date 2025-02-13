import mongoose, { Schema, model } from "mongoose";

const BlogPost = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      secure_url: {
        type: String,
        default: "",
      },
      public_id: {
        type: String,
        default: "",
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    },
  },
  { timestamps: true }
);
export default mongoose.models.BlogPost || model("BlogPost", BlogPost);

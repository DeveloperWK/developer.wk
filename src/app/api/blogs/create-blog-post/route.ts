import connectDB from "@/dbConnect";
import BlogPost from "@/model/BlogPost";
import mongoose from "mongoose";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { title, content, imageUrl, category } = await req.json();

  if (!mongoose.Types.ObjectId.isValid(category)) {
    return NextResponse.json({
      status: 400,
      message: "Invalid category ID",
    });
  }

  try {
    const blog = await new BlogPost({
      title,
      content,
      imageUrl,
      category,
    }).save();

    revalidateTag("create-blog");

    return NextResponse.json({
      status: 201,
      message: "Blog post created successfully",
      blog,
    });
  } catch (error) {
    console.error("Error saving blog post:", (error as Error).message);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
      error: (error as Error).message,
    });
  }
}

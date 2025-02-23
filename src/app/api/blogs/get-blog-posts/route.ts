import connectDB from "@/dbConnect";
import BlogPost from "@/model/BlogPost";
import Category from "@/model/Category";
import { NextResponse } from "next/server";
void Category;
export async function GET() {
  await connectDB();
  try {
    const blogs = await BlogPost.find()
      .populate("category")
      .lean()
      .sort({ createdAt: -1 });

    return NextResponse.json({
      status: 200,
      message: "Blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}

import connectDB from "@/dbConnect";
import BlogPost from "@/model/BlogPost";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { title, content, category } = await req.json();
  try {
    const blog = new BlogPost({
      title,
      content,
      category,
    }).save();
    revalidateTag("create-blog");
    return NextResponse.json({
      status: 201,
      message: "Blog post created successfully",
      blog,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}

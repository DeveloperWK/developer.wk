import connectDB from "@/dbConnect";
import BlogPost from "@/model/BlogPost";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  await connectDB();
  const { _id } = await req.json();
  try {
    await BlogPost.findByIdAndDelete({ _id });
    return NextResponse.json({
      status: 202,
      message: "Blog deleted successfully",
      blog: _id,
    });
  } catch (error) {
    return NextResponse.json({
      status: 204,
      message: "Something went wrong || Blog not found",
      error,
    });
  }
}

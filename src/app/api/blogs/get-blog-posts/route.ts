import connectDB from "@/dbConnect";
import BlogPost from "@/model/BlogPost";
import { NextResponse } from "next/server";
export async function GET() {
  await connectDB();
  // const searchParams = queryString.parseUrl(request.url).query;
  // const { id } = searchParams;
  try {
    const blogs = await BlogPost.find().select("-_id").sort({ createdAt: -1 });
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

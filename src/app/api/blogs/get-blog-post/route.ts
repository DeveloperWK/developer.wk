import connectDB from "@/dbConnect";
import BlogPost from "@/model/BlogPost";
import { NextResponse } from "next/server";
import queryString from "query-string";

export async function GET(request: Request) {
  await connectDB();
  const searchParams = queryString.parseUrl(request.url).query;
  const { slug } = searchParams;
  try {
    const blog = await BlogPost.findOne({ _id: slug });
    return NextResponse.json({
      status: 200,
      message: "Blog fetched successfully",
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

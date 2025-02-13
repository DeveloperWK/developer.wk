import connectDB from "@/dbConnect";
import BlogPost from "@/model/BlogPost";
import { NextResponse } from "next/server";
import queryString from "query-string";

export async function POST(req: Request) {
  await connectDB();
  const { title, content, category } = await req.json();
  try {
    const blog = new BlogPost({
      title,
      content,
      category,
    }).save();
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

export async function GET(request: Request) {
  await connectDB();
  const searchParams = queryString.parseUrl(request.url).query;
  const { id } = searchParams;
  console.log("params", id);

  return Response.json({
    title: `Blog Post ${id}`,
    excerpt: "This is the excerpt of the blog post.",
    category: "Technology",
    date: "2024-01-01",
    imageUrl: "https://example.com/image.jpg",
    readMoreUrl: `/blog/`,
  });
}

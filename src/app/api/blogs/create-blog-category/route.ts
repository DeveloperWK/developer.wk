import connectDB from "@/dbConnect";
import Category from "@/model/Category";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { name } = await req.json();

  try {
    const blog = new Category({
      name,
    }).save();
    revalidateTag("create-blog");
    return NextResponse.json({
      status: 201,
      message: "Category created successfully",
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

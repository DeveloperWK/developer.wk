import connectDB from "@/dbConnect";
import Category from "@/model/Category";

import { NextResponse } from "next/server";
export async function GET() {
  await connectDB();

  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    return NextResponse.json({
      status: 200,
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}

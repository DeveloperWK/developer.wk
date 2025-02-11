import connectDB from "@/dbConnect";
import Users from "@/model/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password } = await req.json();
  try {
    await new Users({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    }).save();
    return NextResponse.json({
      message: "success",
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "something went wrong",
      status: 500,
    });
  }
}

import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_HUGGING_API_KEY}`,
        },
        body: JSON.stringify({
          inputs: prompt,
        }),
      }
    );
    const data = await response.json();
    return NextResponse.json({ summary: data[0].summary_text });
  } catch (error) {
    return NextResponse.json({
      error: "Summary not generated",
      summary: (error as Error).message,
    });
  }
}

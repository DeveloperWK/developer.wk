import { marked } from "marked";
import { NextResponse } from "next/server";

function chunkText(text: string, chunkSize: number): string[] {
  const chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }
  return chunks;
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt must be a non-empty string" },
        { status: 400 }
      );
    }

    const cleanedPrompt = prompt.trim().replace(/\s+/g, " ");
    if (!cleanedPrompt) {
      return NextResponse.json(
        { error: "Prompt cannot be empty after trimming spaces" },
        { status: 400 }
      );
    }

    const htmlContent = marked(cleanedPrompt);
    const plainTextContent =
      typeof htmlContent === "string"
        ? htmlContent.replace(/<[^>]*>/g, "")
        : "";

    if (!plainTextContent.trim()) {
      return NextResponse.json(
        { error: "Failed to process the input content" },
        { status: 400 }
      );
    }

    const chunks = chunkText(plainTextContent, 1000);

    const summaries = await Promise.all(
      chunks.map(async (chunk) => {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_HUGGING_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: chunk }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to summarize chunk");
        }

        const data = await response.json();
        return data[0]?.summary_text || "";
      })
    );

    const finalSummary = summaries.join(" ").trim();

    return NextResponse.json({ summary: finalSummary });
  } catch (error) {
    console.error("Error generating summary:", error);
    return NextResponse.json(
      {
        error: "Summary not generated",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

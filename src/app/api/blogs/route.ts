import connectDB from "@/dbConnect";
import queryString from "query-string";

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

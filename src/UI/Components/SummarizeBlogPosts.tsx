"use client";

import { Button } from "@/UI/Components/button";
import { useState } from "react";

const SummarizeBlogPosts = ({
  blogPostsContent,
}: {
  blogPostsContent: string;
}) => {
  interface BlogPostData {
    blogPostsContent: string;
    summary: string;
  }
  const [data, setData] = useState<BlogPostData>({
    blogPostsContent: "",
    summary: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const summarizeBlogPosts = async () => {
    setIsLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-summary`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          prompt: blogPostsContent,
        }),
      }
    );
    const data = await res.json();
    setData(data);
    setIsLoading(false);
  };
  return (
    <>
      <Button onClick={summarizeBlogPosts}>
        {isLoading ? "Summarizing..." : "Summarize Blog Posts"}
      </Button>
      {data && (
        <section className="text-white p-4 border border-gray-500 mt-4 transition-all duration-300 md:p-6 md:mt-6 lg:p-8 lg:mt-8 hover:scale-105 md:hover:scale-110 lg:hover:scale-115">
          <p>{data?.summary}</p>
        </section>
      )}
    </>
  );
};

export default SummarizeBlogPosts;

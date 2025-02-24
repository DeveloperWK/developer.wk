// "use client";

// import { Button } from "@/UI/Components/button";
// import { useState } from "react";

// const SummarizeBlogPosts = ({
//   blogPostsContent,
// }: {
//   blogPostsContent: string;
// }) => {
//   interface BlogPostData {
//     blogPostsContent: string;
//     summary: string;
//   }
//   const [data, setData] = useState<BlogPostData>({
//     blogPostsContent: "",
//     summary: "",
//   });

//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const summarizeBlogPosts = async () => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-summary`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ prompt: blogPostsContent }),
//         }
//       );
//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching summary:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto p-4 flex flex-col items-center gap-4">
//       <Button
//         onClick={summarizeBlogPosts}
//         disabled={isLoading}
//         className="px-6 py-3 text-lg font-semibold transition-all duration-300 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
//       >
//         {isLoading ? "Summarizing..." : "Summarize Blog Posts"}
//       </Button>
//       {data?.summary && (
//         <section className="text-white p-4 md:p-6 lg:p-8 border border-gray-500 mt-4 rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105">
//           <p className="text-lg leading-relaxed text-gray-300">
//             {data?.summary}
//           </p>
//         </section>
//       )}
//     </div>
//   );
// };

// export default SummarizeBlogPosts;
"use client";
import { Button } from "@/UI/Components/button";
import { useState } from "react";
import SpeechReader from "./SpeechReader";

const SummarizeBlogPosts = ({
  blogPostsContent,
}: {
  blogPostsContent: string;
}) => {
  interface BlogPostData {
    blogPostsContent: string;
    summary: string;
    error?: string; // Add an optional error field
  }

  const [data, setData] = useState<BlogPostData>({
    blogPostsContent: "",
    summary: "",
    error: undefined, // Initialize error as undefined
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const summarizeBlogPosts = async () => {
    setIsLoading(true);
    setData((prev) => ({ ...prev, error: undefined })); // Clear previous errors

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-summary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: blogPostsContent }),
        }
      );

      if (!res.ok) {
        // Handle non-200 responses (e.g., 400, 500)
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch summary");
      }

      const result = await res.json();

      // Validate the response structure
      if (!result.summary) {
        throw new Error("Invalid response from the server");
      }

      setData({ blogPostsContent, summary: result.summary });
    } catch (error) {
      console.error("Error fetching summary:", error);

      // Update state with the error message
      setData((prev) => ({
        ...prev,
        error: (error as Error).message || "An unexpected error occurred",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 flex flex-col items-center gap-4">
      <Button
        onClick={summarizeBlogPosts}
        disabled={isLoading}
        className="px-6 py-3 text-lg font-semibold transition-all duration-300 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isLoading ? "Summarizing..." : "Summarize Blog Posts"}
      </Button>
      {data?.summary && (
        <SpeechReader text={data?.summary || "No summary available"} />
      )}

      {/* Display Error Message */}
      {data?.error && (
        <section className="text-red-500 p-4 border border-red-500 mt-4 rounded-lg bg-red-900 shadow-lg">
          <p className="text-lg leading-relaxed">{data.error}</p>
        </section>
      )}
    </div>
  );
};

export default SummarizeBlogPosts;

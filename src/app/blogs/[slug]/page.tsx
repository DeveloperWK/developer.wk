import BackToTop from "@/UI/Components/BackToTop";
import MdRender from "@/UI/Components/MdRender";
import SocialShare from "@/UI/Components/SocialShare";
import SummarizeBlogPosts from "@/UI/Components/SummarizeBlogPosts";
import Image from "next/image";

interface BlogPostData {
  blog?: {
    title: string;
    excerpt: string;
    imageUrl: string;
    content: string;
    author: string;
    updatedAt: string;
    authorImage: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-post?slug=${slug}`
  );
  const data = await res.json();

  const title = data?.blog?.title || "Blog Post";
  const description =
    data?.blog?.content || "Read this blog post to learn more.";
  const imageUrl = data?.blog?.imageUrl || "/default-image.jpg";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL as string),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-post?slug=${slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }
  const post: BlogPostData = await res.json();

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto w-full space-y-6 overflow-x-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white break-words pt-7">
          {post?.blog?.title}
        </h1>

        <div className="flex items-center space-x-4">
          <Image
            src={post?.blog?.authorImage || "/logo.jpg"}
            alt="Author"
            width={50}
            height={50}
            className="rounded-full border border-gray-700"
          />
          <div>
            <p className="text-gray-300 font-medium">
              {post?.blog?.author || "Owner"}
            </p>
            <p className="text-sm text-gray-400">
              {post?.blog?.updatedAt
                ? new Date(post.blog.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Date Not Available"}
            </p>
          </div>
        </div>

        {post?.blog?.imageUrl && (
          <div className="w-full flex justify-center overflow-hidden">
            <Image
              src={`${post.blog.imageUrl}?e_blur:100,q_auto:best`}
              alt="Blog Image"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed sm:px-4 break-words overflow-x-hidden">
          <MdRender>{post?.blog?.content || "No content available."}</MdRender>
        </div>

        <section className="mt-8">
          <SocialShare />
        </section>

        <section className="mt-12">
          <SummarizeBlogPosts blogPostsContent={post?.blog?.content || ""} />
        </section>
      </div>
      <BackToTop />
    </section>
  );
}

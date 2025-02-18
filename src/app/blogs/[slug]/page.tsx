import Image from "next/image";
// Generate dynamic metadata for the blog post

interface BlogPostData {
  blog?: {
    title: string;
    excerpt: string;
    image: string;
    content: string;
    author: string;
    date: string;
    authorImage: string;
  };
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch the blog post data to dynamically generate metadata
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-post?slug=${slug}`
  );
  const data = await res.json();

  return {
    title: data?.blog?.title || "Blog Post",
    description: data?.blog?.excerpt || "Read this blog post to learn more.",
    openGraph: {
      images: [data?.blog?.image || "/default-image.jpg"],
    },
  };
}

// Server Component for BlogPost
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch the blog post data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-post?slug=${slug}`,
    { cache: "no-store" } // Disable caching if needed
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const post: BlogPostData = await res.json();

  return (
    <section className="min-h-screen flex flex-col justify-center p-20 text-white">
      <div className="max-w-3xl mx-auto p-4">
        {/* Dynamic Title */}
        <h1 className="text-3xl font-bold sm:text-4xl">{post?.blog?.title}</h1>

        {/* Author Information */}
        <div className="mt-4 flex items-center space-x-4">
          <Image
            src={post?.blog?.authorImage || "/author.jpg"}
            alt="Author"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-gray-700 font-medium">
              {post?.blog?.author || "John Doe"}
            </p>
            <p className="text-sm text-gray-500">
              {post?.blog?.date || "February 17, 2025"}
            </p>
          </div>
        </div>

        {/* Featured Image */}
        <Image
          src={post?.blog?.image || "/blog-image.jpg"}
          alt="Blog Image"
          width={800}
          height={400}
          className="mt-6 w-full rounded-lg shadow-md"
        />

        {/* Blog Content */}
        <div className="mt-6 text-white leading-relaxed space-y-4">
          {post?.blog?.content?.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

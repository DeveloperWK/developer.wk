// import SocialShare from "@/UI/Components/SocialShare";
// import SummarizeBlogPosts from "@/UI/Components/SummarizeBlogPosts";
// import Image from "next/image";
// // Generate dynamic metadata for the blog post

// interface BlogPostData {
//   blog?: {
//     title: string;
//     excerpt: string;
//     imageUrl: string;
//     content: string;
//     author: string;
//     date: string;
//     authorImage: string;
//   };
// }
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   // Fetch the blog post data to dynamically generate metadata
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-post?slug=${slug}`
//   );
//   const data = await res.json();

//   return {
//     title: data?.blog?.title || "Blog Post",
//     description: data?.blog?.excerpt || "Read this blog post to learn more.",
//     openGraph: {
//       images: [data?.blog?.imageUrl || "/default-image.jpg"],
//     },
//   };
// }

// // Server Component for BlogPost
// export default async function BlogPost({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   // Fetch the blog post data
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-post?slug=${slug}`,
//     { cache: "no-store" } // Disable caching if needed
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch blog post");
//   }

//   const post: BlogPostData = await res.json();

//   return (
//     <section className="min-h-screen flex flex-col justify-center p-4 text-white">
//       <div className="max-w-3xl mx-auto p-4">
//         {/* Dynamic Title */}
//         <h1 className="text-3xl font-bold sm:text-4xl">{post?.blog?.title}</h1>

//         {/* Author Information */}
//         <div className="mt-4 flex items-center space-x-4">
//           <Image
//             src={post?.blog?.authorImage || "/author.jpg"}
//             alt="Author"
//             width={50}
//             height={50}
//             className="rounded-full"
//           />
//           <div>
//             <p className="text-gray-300 font-medium">
//               {post?.blog?.author || "John Doe"}
//             </p>
//             <p className="text-sm text-gray-400">
//               {post?.blog?.date || "February 17, 2025"}
//             </p>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <Image
//           src={post?.blog?.imageUrl || "/blog-image.jpg"}
//           alt="Blog Image"
//           width={800}
//           height={400}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="mt-6 w-2/3 rounded-lg shadow-md"
//         />

//         {/* Blog Content */}
//         <div className="mt-6 text-white leading-relaxed space-y-4">
//           {post?.blog?.content?.split("\n").map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>

//         {/* Social Share Section */}
//         {/* <div className="mt-6 flex space-x-4">
//           <a
//             href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//               currentUrl
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-blue-600 rounded-full hover:bg-blue-700"
//           >
//             <FaFacebook className="text-white w-5 h-5" />
//           </a>
//           <a
//             href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
//               currentUrl
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-blue-400 rounded-full hover:bg-blue-500"
//           >
//             <FaTwitter className="text-white w-5 h-5" />
//           </a>
//           <a
//             href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//               currentUrl
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-blue-700 rounded-full hover:bg-blue-800"
//           >
//             <FaLinkedin className="text-white w-5 h-5" />
//           </a>
//           <button
//             onClick={handleCopyLink}
//             className="p-2 bg-gray-600 rounded-full hover:bg-gray-700 relative"
//           >
//             <FaCopy className="text-white w-5 h-5" />
//             {copySuccess && (
//               <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1">
//                 Copied!
//               </span>
//             )}
//           </button>
//         </div> */}
//         <section>
//           <SocialShare />
//         </section>
//       </div>
//       <section className="">
//         <SummarizeBlogPosts blogPostsContent={post?.blog?.content || ""} />
//       </section>
//     </section>
//   );
// }
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

  return {
    title: data?.blog?.title || "Blog Post",
    description: data?.blog?.content || "Read this blog post to learn more.",
    openGraph: {
      images: [data?.blog?.imageUrl || "/default-image.jpg"],
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

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-post?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const post: BlogPostData = await res.json();

  return (
    <section className="min-h-screen flex flex-col justify-center p-4 pt-24 text-white bg-gray-900">
      <div className="max-w-4xl mx-auto p-4">
        {/* Dynamic Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-left leading-tight tracking-wide text-white">
          {post?.blog?.title}
        </h1>

        {/* Author Information */}
        <div className="mt-4 flex items-center space-x-4">
          <Image
            src={"/logo.jpg"}
            alt="Author"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-gray-300 font-medium">Owner</p>
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

        {/* Featured Image */}
        <Image
          src={
            post?.blog?.imageUrl
              ? `${post.blog.imageUrl}?e_blur:100,q_auto:best`
              : "/blog-image.jpg"
          }
          alt="Blog Image"
          width={1200}
          height={600}
          placeholder="blur"
          blurDataURL={`${post?.blog?.imageUrl}?e_blur:100,q_auto:best`} // Using Cloudinary transformation for blur
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="mt-6 w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg mx-auto"
        />

        {/* Blog Content */}
        <div className="mt-8 text-lg text-gray-300 leading-relaxed space-y-6">
          {post?.blog?.content?.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Social Share Section */}
        <section className="mt-8">
          <SocialShare />
        </section>

        {/* Summarize Blog Posts */}
        <section className="mt-12">
          <SummarizeBlogPosts blogPostsContent={post?.blog?.content || ""} />
        </section>
      </div>
    </section>
  );
}

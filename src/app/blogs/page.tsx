export const dynamic = "force-dynamic";
import { BlogCard, BlogCardProps } from "@/UI/Components/blog-card";
interface QueryParams {
  page?: string;
  category?: string;
}

async function getBlogPosts(query: QueryParams) {
  const searchParams = new URLSearchParams({
    page: query?.page || "1",
    category: query?.category || "",
  }).toString();
  console.log("searchParams", searchParams);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-posts?${searchParams}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const { status, message, blogs } = await res.json();
    return {
      status,
      message,
      blogs,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Something went wrong",
      blogs: [],
      currentPage: 1,
      totalPages: 1,
    };
  }
}
export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const { page, category } = await searchParams;
  const query = {
    page,
    category,
  };
  const { blogs: blogPosts } = await getBlogPosts(query);
  // interface IBlogPost{
  //   _id: string;
  //   title: string;
  //   content: string;
  //   category: string;
  //   image: string;

  // }

  return (
    // <div className="min-h-screen animated-bg pt-20">
    //   <main className="container mx-auto px-4 py-12">
    //     <motion.h1
    //       className="text-4xl font-extrabold mb-2 text-white text-center tracking-tight"
    //       initial={{ opacity: 0, y: -20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       Latest Blog Posts
    //     </motion.h1>
    //     <motion.p
    //       className="text-xl font-medium text-gray-300 mb-8 text-center"
    //       initial={{ opacity: 0, y: -20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5, delay: 0.2 }}
    //     >
    //       Stay updated with our latest articles and insights
    //     </motion.p>

    //     {/* <BlogFilters
    //       categories={categories}
    //       onSearchChange={setSearchTerm}
    //       onCategoryChange={setSelectedCategory}
    //     /> */}

    //     <AnimatePresence mode="wait">
    //       {isLoading ? (
    //         <motion.div
    //           key="loading"
    //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    //           variants={containerVariants}
    //           initial="hidden"
    //           animate="visible"
    //           exit={{ opacity: 0 }}
    //         >
    //           {[...Array(6)].map((_, index) => (
    //             <LoadingCard key={index} />
    //           ))}
    //         </motion.div>
    //       ) : blogPosts?.length === 0 ? (
    //         <motion.p
    //           key="no-results"
    //           className="text-center text-gray-300 mt-8 font-medium"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ duration: 0.5 }}
    //         >
    //           No blog posts found matching your criteria.
    //         </motion.p>
    //       ) : (
    //         <motion.div
    //           key="results"
    //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    //           variants={containerVariants}
    //           initial="hidden"
    //           animate="visible"
    //           exit={{ opacity: 0 }}
    //         >
    //           {isLoading ? (
    //             <LoadingCard />
    //           ) : (
    //             blogPosts?.map((post, index) => (
    //               <BlogCard key={index} {...post} />
    //             ))
    //           )}
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </main>
    // </div>
    <section className="min-h-screen animated-bg pt-20">
      <main className="container mx-auto px-4 py-12">
        {/* Title Animation */}
        <h1
          className="text-4xl font-extrabold mb-2 text-white text-center tracking-tight 
                 animate-fade-in-up"
        >
          Latest Blog Posts
        </h1>

        {/* Subtitle Animation */}
        <p
          className="text-xl font-medium text-gray-300 mb-8 text-center 
                 animate-fade-in-up-delay"
        >
          Stay updated with our latest articles and insights
        </p>

        {/* Blog Filters (Commented Out) */}
        {/* <BlogFilters
      categories={categories}
      onSearchChange={setSearchTerm}
      onCategoryChange={setSelectedCategory}
    /> */}

        {/* Conditional Rendering */}
        {/* {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                   animate-fade-in"
          >
            {[...Array(6)].map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        ) : */}
        {blogPosts?.length === 0 ? (
          <p
            className="text-center text-gray-300 mt-8 font-medium 
                   animate-fade-in"
          >
            No blog posts found matching your criteria.
          </p>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                   animate-fade-in"
          >
            {blogPosts?.map((post: BlogCardProps, index: number) => (
              <BlogCard
                key={index}
                {...post}
                readMoreUrl={`/blogs/${post?._id}`}
              />
            ))}
          </div>
        )}
      </main>
    </section>
  );
}

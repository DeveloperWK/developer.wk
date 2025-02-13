"use client";

import { BlogCard } from "@/UI/Components/blog-card";
import { LoadingCard } from "@/UI/Components/loading-card";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// const blogPosts = [
//   {
//     title: "The Future of Web Development",
//     excerpt:
//       "Explore the latest trends and technologies shaping the future of web development.",
//     category: "Technology",
//     date: "May 15, 2023",
//     imageUrl:
//       "https://images.unsplash.com/photo-1739032713558-017ad58b0fbb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     readMoreUrl: "#",
//   },
//   {
//     title: "Mastering TypeScript in 2023",
//     excerpt:
//       "Learn the best practices and advanced features of TypeScript for modern web applications.",
//     category: "Programming",
//     date: "June 2, 2023",
//     imageUrl:
//       "https://images.unsplash.com/photo-1738936339590-ea1fc8bd9732?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     readMoreUrl: "#",
//   },
//   {
//     title: "Responsive Design Techniques",
//     excerpt:
//       "Discover effective strategies for creating responsive and mobile-friendly websites.",
//     category: "Design",
//     date: "April 28, 2023",
//     imageUrl:
//       "https://images.unsplash.com/photo-1738969773091-abcf274f7e0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     readMoreUrl: "#",
//   },
//   {
//     title: "Introduction to React Hooks",
//     excerpt:
//       "Dive into the world of React Hooks and learn how they can simplify your component logic.",
//     category: "Programming",
//     date: "July 10, 2023",
//     imageUrl:
//       "https://images.unsplash.com/photo-1738694237335-a537515c0b7b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     readMoreUrl: "#",
//   },
//   {
//     title: "The Rise of AI in Web Applications",
//     excerpt:
//       "Explore how artificial intelligence is transforming the landscape of web applications.",
//     category: "Technology",
//     date: "August 5, 2023",
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1738614647383-0435fcb26a55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     readMoreUrl: "#",
//   },
// ];
interface IBlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
  readMoreUrl: string;
}
export default function BlogsPage() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);

  const getBlogPosts = async () => {
    try {
      setIsLoading(true);
      const GetBlogPosts = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-posts`,
        {
          next: { tags: ["create-blog"] },
        }
      );
      const data = await GetBlogPosts.json();

      setIsLoading(false);
      setBlogPosts(data.blogs);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // const categories = useMemo(() => {
  //   return Array.from(new Set(blogPosts.map((post) => post.category)));
  // }, [blogPosts]);

  // const filteredPosts = useMemo(() => {
  //   return blogPosts.filter((post) => {
  //     const matchesSearch = post.title
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase());
  //     const matchesCategory =
  //       selectedCategory === "all" || post.category === selectedCategory;
  //     return matchesSearch && matchesCategory;
  //   });
  // }, [searchTerm, selectedCategory]);

  useEffect(() => {
    // Simulate loading delay

    getBlogPosts();
  }, []);

  // useEffect(() => {
  //   // Show loading state when filtering
  //   setIsLoading(true);
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []); // Removed unnecessary dependencies: searchTerm, selectedCategory

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen animated-bg pt-20">
      <main className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-extrabold mb-2 text-white text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </motion.h1>
        <motion.p
          className="text-xl font-medium text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stay updated with our latest articles and insights
        </motion.p>

        {/* <BlogFilters
          categories={categories}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        /> */}

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {[...Array(6)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </motion.div>
          ) : blogPosts.length === 0 ? (
            <motion.p
              key="no-results"
              className="text-center text-gray-300 mt-8 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              No blog posts found matching your criteria.
            </motion.p>
          ) : (
            <motion.div
              key="results"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {isLoading ? (
                <LoadingCard />
              ) : (
                blogPosts?.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

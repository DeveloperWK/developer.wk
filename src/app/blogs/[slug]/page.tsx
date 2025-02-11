import { notFound } from "next/navigation";

// This would typically come from your CMS or API
const posts = {
  "the-art-of-food-photography": {
    title: "The Art of Food Photography: A Visual Journey",
    author: {
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      role: "Food Photographer",
    },
    date: "March 15, 2024",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus id ligula cursus venenatis. Sed vitae justo lacus. Nulla facilisi. Sed at massa sit amet nunc tincidunt tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.

    Donec porta erat non ex condimentum, sed aliquam elit blandit. Fusce in vestibulum ex. Sed eu blandit lorem dolor sit amet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet lorem. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl.`,
    mainImage:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    relatedPosts: [
      {
        title: "Essential Kitchen Tools for Food Photography",
        image:
          "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=300&q=80",
        date: "March 10, 2024",
      },
      {
        title: "Lighting Techniques for Food Photography",
        image:
          "https://images.unsplash.com/photo-1516824711718-9c1e683412ac?auto=format&fit=crop&w=300&q=80",
        date: "March 5, 2024",
      },
      {
        title: "Styling Tips for Food Photography",
        image:
          "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?auto=format&fit=crop&w=300&q=80",
        date: "March 1, 2024",
      },
    ],
  },
};
async function fetchBlogPost(slug: string) {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
    cache: "no-store", // Bypass cache for fresh data
  });

  if (!res.ok) return null;
  return res.json();
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchBlogPost(params.slug);

  if (!post) {
    notFound();
  }
  console.log("post", post);

  return (
    // <div className="min-h-screen bg-[#000319] text-white pt-20">
    //   <main className="container mx-auto px-4 py-8">
    //     {/* Header */}
    //     <div className="max-w-3xl mx-auto mb-8">
    //       <h1 className="text-4xl font-bold mb-6 tracking-tight">
    //         {post.title}
    //       </h1>
    //       <div className="flex items-center gap-4 mb-8">
    //         <Avatar className="border-2 border-white/10">
    //           <AvatarImage src={post.author.image} alt={post.author.name} />
    //           <AvatarFallback>{post.author.name[0]}</AvatarFallback>
    //         </Avatar>
    //         <div>
    //           <p className="font-medium">{post.author.name}</p>
    //           <p className="text-gray-400 text-sm">{post.author.role}</p>
    //         </div>
    //         <div className="flex items-center ml-auto text-gray-400">
    //           <Calendar className="w-4 h-4 mr-2" />
    //           <span className="text-sm">{post.date}</span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Main Image */}
    //     <div className="max-w-4xl mx-auto mb-12 relative aspect-[16/9] rounded-lg overflow-hidden">
    //       <Image
    //         src={post.mainImage}
    //         alt={post.title}
    //         fill
    //         className="object-cover"
    //         priority
    //         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    //       />
    //     </div>

    //     {/* Content */}
    //     <div className="max-w-3xl mx-auto mb-16">
    //       <div className="prose prose-invert prose-lg">
    //         {post.content.split("\n\n").map((paragraph, index) => (
    //           <p key={index} className="mb-6 leading-relaxed text-gray-200">
    //             {paragraph}
    //           </p>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Related Posts */}
    //     <div className="max-w-4xl mx-auto">
    //       <h2 className="text-2xl font-bold mb-8 tracking-tight">
    //         Related Posts
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         {post.relatedPosts.map((relatedPost, index) => (
    //           <div
    //             key={index}
    //             className="group cursor-pointer bg-white/5 rounded-lg p-4 transition-all hover:bg-white/10"
    //           >
    //             <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
    //               <Image
    //                 src={relatedPost.image}
    //                 alt={relatedPost.title}
    //                 fill
    //                 className="object-cover transition-transform group-hover:scale-105"
    //                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
    //               />
    //             </div>
    //             <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
    //               {relatedPost.title}
    //             </h3>
    //             <p className="text-sm text-gray-400">{relatedPost.date}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <h1>hello</h1>
  );
}

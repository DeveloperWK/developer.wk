// "use client";
// import { Button } from "@/UI/Components/button";
// import { Card, CardContent } from "@/UI/Components/card";
// import { Input } from "@/UI/Components/input";
// import { Textarea } from "@/UI/Components/ui/textarea";
// import { Loader2 } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// export default function AddBlogPost() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     trigger,
//     watch,
//     control,

//     formState: { errors },
//   } = useForm<BlogPostData>();
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [categories, setCategories] = useState<Category[]>([]);

//   interface BlogPostData {
//     title: string;
//     content: string;
//     category: string;
//     imageUrl?: string;
//   }
//   interface Category {
//     _id: string;
//     name: string;
//   }
//   const getCategories = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-categories`
//     );
//     const data = await res.json();
//     setCategories(data?.categories);
//   };
//   useEffect(() => {
//     getCategories();
//   }, []);
//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLoading(true); // Indicate loading state

//     try {
//       const file = e.target.files?.[0];
//       if (!file) alert("No image selected");

//       const formData = new FormData();
//       if (file) {
//         formData.append("file", file);
//       }
//       formData.append("upload_preset", "my_portfolio");
//       formData.append("cloud_name", "dhagnak0m");

//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dhagnak0m/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const result = await res.json();
//       if (!result.secure_url) throw new Error("Upload failed");

//       // Ensure the image URL is properly set
//       setValue("imageUrl", result.secure_url, { shouldValidate: true });
//       await trigger("imageUrl");
//       setImagePreview(result.secure_url);
//     } catch (error) {
//       console.error("Error uploading image to Cloudinary:", error);
//       alert("Failed to upload image");
//     } finally {
//       setLoading(false); // Stop loading state
//     }
//   };

//   const onSubmit = async (data: BlogPostData) => {
//     if (!data.imageUrl || data.imageUrl.includes("FileList")) {
//       alert("Please upload an image");
//     }
//     setLoading(true);

//     try {
//       if (!imagePreview && !data.imageUrl) {
//         alert("Please upload an image");
//       }
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/create-blog-post`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );
//       const result = await response.json();
//       console.log(result);
//       if (!response.ok) throw new Error("Failed to add blog");
//       alert("Blog posted successfully!");
//       setValue("title", "");
//       setValue("content", "");
//       setValue("category", "");
//       setValue("imageUrl", "");
//       setImagePreview(null);

//       console.log(data);
//     } catch (error) {
//       alert((error as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   console.log(categories);

//   const watchValue = watch("imageUrl");
//   return (
//     <div className="max-w-3xl mx-auto p-20 ">
//       <Card>
//         <CardContent className="p-6 space-y-4">
//           <h2 className="text-2xl font-bold">Add Blog Post</h2>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <Input
//                 placeholder="Title"
//                 {...register("title", { required: "Title is required" })}
//               />
//               {errors.title && (
//                 <p className="text-red-500 text-sm">{errors.title.message}</p>
//               )}
//             </div>

//             <div>
//               <Textarea
//                 placeholder="Content"
//                 rows={6}
//                 {...register("content", { required: "Content is required" })}
//               />
//               {errors.content && (
//                 <p className="text-red-500 text-sm">{errors.content.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="block font-medium">Category</label>
//               <select
//                 {...register("category", { required: "Category is required" })}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="" disabled selected>
//                   Select a category
//                 </option>
//                 {categories.map((category) => (
//                   <option key={category?._id} value={category?._id}>
//                     {category?.name}
//                   </option>
//                 ))}
//               </select>

//               {errors.category && (
//                 <p className="text-red-500 text-sm">
//                   {errors.category.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block font-medium">Featured Image</label>
//               <input
//                 type="file"
//                 onChange={handleImageUpload}
//                 className="w-full border p-2 rounded"
//               />
//             </div>
//             <div>
//               <Input placeholder="Image URL" value={`${watchValue}`} disabled />
//               {errors.imageUrl && (
//                 <p className="text-red-500 text-sm">
//                   {errors.imageUrl.message}
//                 </p>
//               )}
//             </div>

//             {errors.imageUrl && (
//               <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
//             )}
//             {imagePreview && (
//               <div className="mt-4">
//                 <Image
//                   src={imagePreview}
//                   alt="Featured Image"
//                   width={200}
//                   height={200}
//                 />
//               </div>
//             )}
//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? <Loader2 className="animate-spin" /> : "Submit"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
"use client";
import { Button } from "@/UI/Components/button";
import { Card, CardContent } from "@/UI/Components/card";
import { Input } from "@/UI/Components/input";
import { Textarea } from "@/UI/Components/ui/textarea";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AddBlogPost() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,

    formState: { errors },
  } = useForm<BlogPostData>({
    defaultValues: {
      title: "",
      content: "",
      category: "", // Explicitly set default value for category
      imageUrl: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  interface BlogPostData {
    title: string;
    content: string;
    category: string;
    imageUrl?: string;
  }

  interface Category {
    _id: string;
    name: string;
  }

  const getCategories = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/get-blog-categories`
      );
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      setCategories(data?.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        await getCategories();
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Reset the form state after categories are fetched
  useEffect(() => {
    if (categories.length > 0) {
      setValue("category", ""); // Reset the category field
    }
  }, [categories, setValue]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    try {
      const file = e.target.files?.[0];
      if (!file) alert("No image selected");
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      }
      formData.append("upload_preset", "my_portfolio");
      formData.append("cloud_name", "dhagnak0m");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dhagnak0m/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await res.json();
      if (!result.secure_url) throw new Error("Upload failed");
      setValue("imageUrl", result.secure_url, { shouldValidate: true });
      await trigger("imageUrl");
      setImagePreview(result.secure_url);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      alert("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: BlogPostData) => {
    if (!data.imageUrl || data.imageUrl.includes("FileList")) {
      alert("Please upload an image");
    }
    setLoading(true);
    try {
      if (!imagePreview && !data.imageUrl) {
        alert("Please upload an image");
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/create-blog-post`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to add blog");
      alert("Blog posted successfully!");
      setValue("title", "");
      setValue("content", "");
      setValue("category", "");
      setValue("imageUrl", "");
      setImagePreview(null);
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const watchValue = watch("imageUrl");

  return (
    <div className="max-w-3xl mx-auto p-20">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Add Blog Post</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
            <div>
              <Textarea
                placeholder="Content"
                rows={6}
                {...register("content", { required: "Content is required" })}
              />
              {errors.content && (
                <p className="text-red-500 text-sm">{errors.content.message}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Category</label>
              {loadingCategories ? (
                <p>Loading categories...</p>
              ) : categories.length > 0 ? (
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full border p-2 rounded"
                  value={watch("category") || ""}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category?._id} value={category?._id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
              ) : (
                <>
                  <p>
                    No categories available. Please create a category first.{" "}
                  </p>

                  <Link
                    href="/dashboard/add-category"
                    className="underline hover:text-blue-600"
                  >
                    Create Category
                  </Link>
                </>
              )}
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">Featured Image</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <Input placeholder="Image URL" value={`${watchValue}`} disabled />
              {errors.imageUrl && (
                <p className="text-red-500 text-sm">
                  {errors.imageUrl.message}
                </p>
              )}
            </div>
            {imagePreview && (
              <div className="mt-4">
                <Image
                  src={imagePreview}
                  alt="Featured Image"
                  width={200}
                  height={200}
                />
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { Button } from "@/UI/Components/button";
import { Card, CardContent } from "@/UI/Components/card";
import { Input } from "@/UI/Components/input";
import { Textarea } from "@/UI/Components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddBlogPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogPostData>();
  const [loading, setLoading] = useState(false);

  interface BlogPostData {
    title: string;
    content: string;
    category: string;
    featuredImage?: FileList;
  }

  const onSubmit = async (data: BlogPostData) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw new Error("Failed to add blog");
      alert("Blog posted successfully!");
      console.log(data);
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-20 ">
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
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full border p-2 rounded"
              >
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
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
                {...register("featuredImage")}
                className="w-full border p-2 rounded"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

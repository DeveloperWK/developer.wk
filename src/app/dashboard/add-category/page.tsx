"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  interface FormData {
    name: string;
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/create-blog-category`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      // const result = await response.json();

      if (!response.ok) throw new Error("Failed to add blog");
      alert("Category added successfully!");
      setValue("name", "");
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-black-100">
          Add Category
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Category Name Field */}
          <div>
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              {...register("name", {
                required: "Category Name is required",
                maxLength: {
                  value: 50,
                  message: "Must be 50 characters or less",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Description Field */}
          {/* <div>
             <label
               htmlFor="description"
               className="block text-sm font-medium text-gray-700"
             >
               Description
             </label>
             <textarea
               id="description"
               rows={4}
               {...register("description", {
                 required: "Description is required",
                 maxLength: {
                   value: 200,
                   message: "Must be 200 characters or less",
                 },
               })}
               className={`mt-1 block w-full px-3 py-2 border ${
                 errors.description ? "border-red-500" : "border-gray-300"
               } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
             />
             {errors.description && (
               <p className="mt-2 text-sm text-red-600">
                 {errors.description.message}
               </p>
             )}
           </div> */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

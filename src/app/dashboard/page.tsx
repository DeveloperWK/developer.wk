import Link from "next/link";

const Dashboard = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-10">
        <Link href="/dashboard/add-blog">Add Blog</Link>
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-10">
        <Link href="/dashboard/add-category">Add Category</Link>
      </button>
    </section>
  );
};

export default Dashboard;

import Link from "next/link";

const Dashboard = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-10">
        <Link href="/add-blog">Click Me</Link>
      </button>
    </section>
  );
};

export default Dashboard;

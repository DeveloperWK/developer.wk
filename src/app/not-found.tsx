import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="text-2xl text-red-600">Not Found</h2>
      <p>Could not find requested resource</p>
      <section className="flex items-center justify-center gap-3">
        <span className="">{<FaHome />}</span>
        <Link href="/" className="text-blue-600 hover:underline">
          Return Home
        </Link>
      </section>
    </div>
  );
}

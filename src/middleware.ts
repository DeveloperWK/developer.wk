import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*", "/api/blogs/postBlog"],
};

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;
    const role = (req.nextauth?.token?.user as { role: string })?.role;

    if (url?.includes("/dashboard") && role !== "admin") {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) return false;
        return true;
      },
    },
  }
);

"use client";
import { Github, Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { status } = useSession();
  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-all duration-300";
    const desktopClasses =
      pathname === path
        ? "text-white border-b-2 border-white transform scale-105"
        : "text-white hover:text-gray-300 hover:scale-105";
    return `${baseClasses} ${desktopClasses}`;
  };

  const getMobileLinkClasses = (path: string) => {
    return `block w-full text-center py-4 text-lg font-medium transition-all duration-300 ${
      pathname === path
        ? "text-white bg-[#0a0e2e]"
        : "text-gray-300 hover:text-white hover:bg-[#0a0e2e]"
    }`;
  };

  return (
    <nav className="bg-[#000319] shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center">
            <Github className="h-8 w-8 text-white transition-transform duration-300 hover:scale-110" />
            <span className="ml-2 text-xl font-bold text-white">Company</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={"/"} className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href={"/blogs"} className={getLinkClasses("/blogs")}>
              Blogs
            </Link>
            <Link href={"/contact"} className={getLinkClasses("/contact")}>
              Contact
            </Link>

            {status === "unauthenticated" && (
              <Link href={"/sign-in"} className={getLinkClasses("/sign-in")}>
                Sign In
              </Link>
            )}
            {status === "unauthenticated" && (
              <Link href={"/sign-up"} className={getLinkClasses("/sign-up")}>
                Sign Up
              </Link>
            )}
            <Link href={"/dashboard"} className={getLinkClasses("/dashboard")}>
              Dashboard
            </Link>
            {status === "authenticated" && (
              <button
                className={getLinkClasses("/sign-out")}
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            )}
            {/* {navItems.map((link) => (
              <Link
                key={link?.id}
                href={link?.href}
                className={getLinkClasses(link?.href)}
              >
                {link?.title}
              </Link>
            ))} */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-[#000319] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-4">
          <Link
            href={"/"}
            className={getMobileLinkClasses("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/blogs"}
            className={getMobileLinkClasses("/blogs")}
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href={"/contact"}
            className={getMobileLinkClasses("/contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {status === "unauthenticated" && (
            <Link
              href={"/sign-in"}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClasses("/sign-in")}
            >
              Sign In
            </Link>
          )}
          {status === "unauthenticated" && (
            <Link
              href={"/sign-up"}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClasses("/sign-up")}
            >
              Sign Up
            </Link>
          )}
          <Link
            href={"/dashboard"}
            onClick={() => setIsOpen(false)}
            className={getMobileLinkClasses("/dashboard")}
          >
            Dashboard
          </Link>
          {status === "authenticated" && (
            <button
              className={getMobileLinkClasses("/sign-out")}
              onClick={() => {
                setIsOpen(false);
                signOut();
              }}
            >
              Sign Out
            </button>
          )}
          {/* {navItems.map((link) => (
            <Link
              key={link?.id}
              href={link?.href}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClasses(link?.href)}
            >
              {link?.title}
            </Link>
          ))} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

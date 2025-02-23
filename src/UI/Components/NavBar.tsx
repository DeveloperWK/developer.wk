//Next-Link use korle refresh korte hoy naile link change hoy nh bar bar login nh korle je call back dekhai setai dekhai tai refresh korle session change hoye jay ar link ar bodole anchor tag use korle refresh kore session update kore fele tai question holo link use kore session update kora jai ki nh ???
"use client";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../../public/logo.webp";
export const Firlest = localFont({
  src: "../../../public/fonts/Firlest-Regular.otf",
  display: "swap",
});
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
    <nav className="bg-[#000319] shadow-lg fixed w-full top-0 z-50 border-gray-800 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Developer.WK Logo" // Descriptive alt text for SEO and accessibility
              width={50} // Base width for desktop
              height={50} // Base height for desktop
              className="transition-transform duration-300 hover:scale-110"
              title="Developer.WK Logo"
              sizes="(max-width: 768px) 40px, (max-width: 1024px) 45px, 50px" // Responsive sizing
              style={{
                width: "auto", // Ensures the image scales proportionally
                height: "auto",
              }}
            />
            <span
              className={`${Firlest.className} ml-2 text-2xl font-bold text-white`}
            >
              Developer.WK
            </span>
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
              <Link
                href={"/auth/sign-in"}
                className={getLinkClasses("/auth/sign-in")}
              >
                Sign In
              </Link>
            )}
            {status === "authenticated" && (
              <Link
                href={"/auth/sign-up"}
                className={getLinkClasses("/auth/sign-up")}
              >
                Sign Up
              </Link>
            )}
            <a href={"/dashboard"} className={getLinkClasses("/dashboard")}>
              Dashboard
            </a>
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
              href={"/auth/sign-in"}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClasses("/auth/sign-in")}
            >
              Sign In
            </Link>
          )}
          {status === "authenticated" && (
            <Link
              href={"/auth/sign-up"}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClasses("/auth/sign-up")}
            >
              Sign Up
            </Link>
          )}
          <a
            href={"/dashboard"}
            onClick={() => setIsOpen(false)}
            className={getMobileLinkClasses("/dashboard")}
          >
            Dashboard
          </a>
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

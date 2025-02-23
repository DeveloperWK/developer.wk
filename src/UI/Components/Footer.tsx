import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import localFont from "next/font/local";
import Image from "next/image";
import logo from "../../../public/logo.webp";
const Firlest = localFont({
  src: "../../../public/fonts/Firlest-Regular.otf",
  display: "swap",
});

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <section className="flex items-center space-x-2">
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
                className={`${Firlest.className} text-2xl font-bold text-white`}
                // Responsive text size adjustments
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
              >
                Developer.WK
              </span>
            </section>
            <p className="text-gray-400">
              Making the world a better place through innovative solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Uttara</li>
              <li> Dhaka-1230</li>
              <a href="tel:+8801772998671" className="hover:underline">
                Phone: +8801772998671
              </a>
              <li>
                <a
                  href="mailto: wasifulkabir2023@gmail.com"
                  className="hover:underline"
                >
                  wasifulkabir2023@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMenu,
  AiOutlineYoutube,
} from "react-icons/ai";
import logo from "../../../public/logo.jpg";
import navItems from "../../Data/NavItems";
import styles from "../styles/navBar.module.css";
// Menu Focus jiges korte hobe

const NavBar = () => {
  const [isMenuOpe, setIsMenuOpen] = useState(false);
  const handleNav = () => {
    setIsMenuOpen(!isMenuOpe);
  };
  return (
    <nav className="w-full h-24 shadow-xl sticky top-0 left-0 z-50 bg-black-100">
      <section className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <section>
          <Link href="/">
            <Image src={logo} alt="logo" width={80} height={80} />
          </Link>
        </section>
        <section className="hidden md:flex items-center gap-3">
          <ul className="hidden sm:flex">
            {navItems.map((item) => (
              <Link key={item?.id} href={item?.href}>
                <motion.li
                  className={`ml-5 uppercase hover:border-b text-md ${styles.navFont} `}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                >
                  {item?.title}
                </motion.li>
              </Link>
            ))}
          </ul>
        </section>
        <section
          onClick={handleNav}
          className="cursor-pointer  pl-24 sm:hidden"
        >
          <AiOutlineMenu size={25} />
        </section>
      </section>
      <section
        className={
          isMenuOpe
            ? "fixed left-0 top-0 w-[65%] h-screen bg-black-100 p-10 ease-in duration-500 sm:hidden"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={handleNav}
        />
        <section className="flex flex-col py-4">
          <ul>
            {navItems.map((item) => (
              <Link key={item?.id} href={item?.href}>
                <li
                  className="py-4 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item?.title}
                </li>
              </Link>
            ))}
          </ul>
        </section>
        <section className="flex flex-col gap-3 ">
          <section className="flex gap-4">
            <AiOutlineFacebook size={30} className="cursor-pointer" />
            <AiOutlineLinkedin size={30} className="cursor-pointer" />
            <AiOutlineGithub size={30} className="cursor-pointer" />
            <AiOutlineYoutube size={30} className="cursor-pointer" />
          </section>

          <Image
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="ml-3"
          />
        </section>
      </section>
    </nav>
  );
};

export default NavBar;

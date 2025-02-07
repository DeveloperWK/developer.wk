"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react"; // Added import for React

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function AnimatedButton({
  href,
  children,
}: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition-colors duration-200"
      >
        {children}
      </Link>
    </motion.div>
  );
}

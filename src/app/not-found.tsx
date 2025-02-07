"use client";

import AnimatedButton from "@/UI/Components/AnimatedButton";
import AnimatedText from "@/UI/Components/AnimatedText";
import CodeSnippet from "@/UI/Components/CodeSnippet";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <AnimatedText
          text="404"
          className="text-6xl md:text-9xl font-bold text-blue-500 mb-4"
        />
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <AnimatedButton href="/">Return Home</AnimatedButton>
      </motion.div>
      <CodeSnippet />
    </div>
  );
}

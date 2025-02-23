"use client"; // Mark this as a client-side component

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockWithCopyProps {
  language: string;
  code: string;
}

const CodeBlockWithCopy: React.FC<CodeBlockWithCopyProps> = ({
  language,
  code,
}) => {
  const [copied, setCopied] = useState(false);

  // Function to copy text to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true); // Show "Copied!" tooltip
      setTimeout(() => setCopied(false), 2000); // Hide tooltip after 2 seconds
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          padding: "0.375rem 0.75rem",
          background: "#2e7d32", // Green background
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.875rem",
          transition: "background 0.3s ease",
          zIndex: 10,
        }}
        onMouseEnter={
          (e) => (e.currentTarget.style.background = "#1b5e20") // Darker green on hover
        }
        onMouseLeave={
          (e) => (e.currentTarget.style.background = "#2e7d32") // Revert to original color
        }
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Syntax Highlighted Code Block */}
      <SyntaxHighlighter
        style={oneDark} // Use a dark theme
        language={language}
        PreTag="div" // Use a div instead of pre for better styling control
        customStyle={{
          margin: 0,
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlockWithCopy;

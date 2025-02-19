"use client";

import { useEffect } from "react";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(`Global Error: ${error.message}`);
  }, [error]);
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1>Oops! something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred"}</p>
      <button
        onClick={reset}
        className="text-white bg-red-500 px-4 py-2 rounded-md"
      >
        Try again
      </button>
    </section>
  );
};

export default GlobalError;

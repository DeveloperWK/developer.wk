"use client";

import { useEffect } from "react";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(`Global Error: ${error.message}`);
  }, [error]);
  return (
    <section className="h-screen flex items-center justify-center">
      <h1>Oops! something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred"}</p>
      <button onClick={reset}>Try again</button>
    </section>
  );
};

export default GlobalError;
